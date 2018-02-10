import Slider from "./slider";
import elements from "./elements"
import Preloader from "../preloader/preloader"

let textContainer = document.querySelector("#slider-text");
let textContent = document.querySelector("#slider-text-content")
let titleContainer = document.querySelector("#slider-title");
let subtitleContainer = document.querySelector("#slider-subtitle");
let imageContainer = document.querySelector("#slider-image");

let rightArrow = document.querySelector("#right-arrow");
let leftArrow = document.querySelector("#left-arrow");

let slider = new Slider({
  elements: elements,
  animFunc: function(element){
    textContent.classList.add("hide");
    imageContainer.classList.add("hide");

    setTimeout(function(){
      textContainer.innerHTML = element.text;
      titleContainer.innerHTML = element.title;
      subtitleContainer.innerHTML = element.subtitle;
      imageContainer.src = element.image;

      textContent.classList.remove("hide");
      imageContainer.classList.remove("hide");
    }, 600);
  },
  speed: 5000
});

slider.play();

rightArrow.addEventListener("click", slider.next);
leftArrow.addEventListener("click", slider.prev);

const imagePaths = elements.map(el => el.image);

Preloader.preloadImages({
  images: imagePaths,
  completed: function(){
    document.querySelector(".controls").style.display = "block";
  }
})
