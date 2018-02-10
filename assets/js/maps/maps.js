import styles from "./styles"

function initMap(){
  const coords = {
    lat: 19.427038,
    lng: -99.167691
  }
  let map = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 17,
    center: coords,
    styles: styles
  });

  let marker = new google.maps.Marker({
    position: coords,
    map,
    title: "Angel de la independiencia"
  })
}

initMap();
