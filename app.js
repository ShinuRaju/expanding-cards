import { imageObject } from "./images.js";

let divs = Array.from(document.querySelectorAll(".container .panel div"));

let removeClass = () => {
  divs.forEach((eachEle) => {
    eachEle.classList.remove("active");
  });
};

divs.forEach((eachEle) => {
  switch (eachEle.classList.item(0)) {
    case "tajmahal":
      eachEle.style.backgroundImage = `url(${imageObject.tajmahal})`;
      break;

    case "pyramid":
      eachEle.style.backgroundImage = `url(${imageObject.pyramid})`;
      break;

    case "petra":
      eachEle.style.backgroundImage = `url(${imageObject.petra})`;
      break;

    case "colosseum":
      eachEle.style.backgroundImage = `url(${imageObject.colosseum})`;
      break;

    case "chichen":
      eachEle.style.backgroundImage = `url(${imageObject.chichen})`;
      break;

    case "machu":
      eachEle.style.backgroundImage = `url(${imageObject.machu})`;
      break;

    case "christ":
      eachEle.style.backgroundImage = `url(${imageObject.christ})`;
      break;
  }
});

divs.forEach((eachEle) => {
  eachEle.addEventListener("click", () => {
    removeClass();
    eachEle.classList.toggle("active");
  });
});
