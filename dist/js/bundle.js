/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = ".";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_app_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_app_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider_sliderDom_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps_maps_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__menu_js__);








if(navigator.serviceWorker)
  navigator.serviceWorker.register("../sw.js");


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slider__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preloader_preloader__ = __webpack_require__(5);




let textContainer = document.querySelector("#slider-text");
let textContent = document.querySelector("#slider-text-content")
let titleContainer = document.querySelector("#slider-title");
let subtitleContainer = document.querySelector("#slider-subtitle");
let imageContainer = document.querySelector("#slider-image");

let rightArrow = document.querySelector("#right-arrow");
let leftArrow = document.querySelector("#left-arrow");

let slider = new __WEBPACK_IMPORTED_MODULE_0__slider__["a" /* default */]({
  elements: __WEBPACK_IMPORTED_MODULE_1__elements__["a" /* default */],
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

const imagePaths = __WEBPACK_IMPORTED_MODULE_1__elements__["a" /* default */].map(el => el.image);

__WEBPACK_IMPORTED_MODULE_2__preloader_preloader__["a" /* default */].preloadImages({
  images: imagePaths,
  completed: function(){
    document.querySelector(".controls").style.display = "block";
  }
})


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Slider{
  constructor({elements, animFunc, speed}){
    this.elements = elements;
    this.animFunc = animFunc;
    this.speed = speed;

    this.index = 0;
    this.size = elements.length;

    this.stop = this.stop.bind(this);

    this.innerNext = this.innerNext.bind(this);

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  innerNext(){
    this.index ++;
    if(this.index >= this.size) this.index = 0;

    this.animFunc(this.elements[this.index]);
  }

  innerPrev(){
    this.index --;
    if(this.index < 0) this.index = this.size-1;

    this.animFunc(this.elements[this.index]);
  }

  next(){
    this.innerNext();
    if(this.interval){
      this.stop();
      this.play();
    }
  }

  prev(){
    this.innerPrev();
    if(this.interval){
      this.stop();
      this.play();
    }
  }

  play(){
    this.interval = setInterval(this.innerNext, this.speed);
  }

  stop(){
    clearInterval(this.interval);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Slider;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const elements = [
  {
    title: "Lorem ipsum",
    subtitle: "Imagenes",
    image: "../public/images/1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Lorem ipsum dolor sit ",
    subtitle: "Ipsum amet",
    image: "../public/images/6.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Lorem ipsum ...",
    subtitle: "Ipsum sit amet",
    image: "../public/images/7.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Lorem ips",
    subtitle: "Ipsum dolor sit",
    image: "../public/images/9.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

/* harmony default export */ __webpack_exports__["a"] = (elements);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Preloader {
  static preloadImages({images, completed}){
    const promises = images.map(imagePath => Preloader.preloadImage({imagePath}) );

    Promise.all(promises).then(completed);
  }

  static preloadImage({imagePath}){
    return new Promise((res, rej)=>{
      let image = new Image();
      image.src = imagePath;
      image.onload = res;
    })
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Preloader;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles__ = __webpack_require__(7);


function initMap(){
  const coords = {
    lat: 19.427038,
    lng: -99.167691
  }
  let map = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 17,
    center: coords,
    styles: __WEBPACK_IMPORTED_MODULE_0__styles__["a" /* default */]
  });

  let marker = new google.maps.Marker({
    position: coords,
    map,
    title: "Angel de la independiencia"
  })
}

initMap();


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const blue = "#245cc3";
const lightBlue = "#5cb6e4";
const indigo = "#1c44a4";
const grey = "#647c9c";
const brown = "#3c3a3a";
const teal = "#05bbed";

const styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
];

/* harmony default export */ __webpack_exports__["a"] = (styles);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

function scrollToElement(element){
  window.scrollTo({
    "behavior": "smooth",
    top: element.offsetTop
  })
}

document.querySelector(".menu").addEventListener("click", function(){
  document.querySelector(".menu-screen").classList.add("active");
});

document.querySelector(".close").addEventListener("click", function(){
  document.querySelector(".menu-screen").classList.remove("active");
});

let links = document.querySelectorAll(".menu-screen a");



links.forEach(link => {
  link.addEventListener("click", function(ev){
    document.querySelector(".menu-screen").classList.remove("active");

    let path = this.href.split("/");

    const selector = path[path.length - 1];
    if(window.scrollTo) ev.preventDefault();

    scrollToElement(document.querySelector(selector));

    return !window.scrollTo;

  })
})


/***/ })
/******/ ]);