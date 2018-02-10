import "../css/app.scss";

import "./slider/sliderDom.js";

import "./maps/maps.js";

import "./menu.js";

if(navigator.serviceWorker)
  navigator.serviceWorker.register("../sw.js");
