"use strict";
import { sponsers } from "./sponsers.js";
let navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");
let footer = document.querySelector("footer");
let modalArr = [];
let modalContainer = document.createElement("div");
let footerHeading = document.createElement("h3");
let copyright = document.createElement("p");

// responsive nav bar
navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
// end of responsive nav bar

// footer
footer.appendChild(footerHeading);
footerHeading.innerHTML = `Our Festival's Sponsers`;
footer.appendChild(modalContainer);
modalContainer.className = "modal-container";

for (let i = 0; i < sponsers.length; i++) {
  let modal = document.createElement("button");
  modal.id = i;
  modalArr.push(modal);
  modalContainer.appendChild(modalArr[i]);
  modalArr[i].style.backgroundImage = `url("${sponsers[i].logo}")`;
  modalArr[i].className = "modal";
  let modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  document.body.appendChild(modalContent);
  let modalContentActive = document.createElement("div");
  modalContentActive.className = "modal-content-active";
  modalContent.appendChild(modalContentActive);
  modalContentActive.innerHTML = `<img src = "${sponsers[i].logo}" alt = "${sponsers[i].name} logo">
  <h1>${sponsers[i].name}</h1>
  <img src = "${sponsers[i].image}" alt = "${sponsers[i].name}">
  <p>${sponsers[i].description}</p>
  <h3><a href="${sponsers[i].website}">${sponsers[i].website}</h3>`;
  modalArr[i].addEventListener("click", function () {
    modalContent.style.display = "block";
  });
  window.addEventListener("click", function (event) {
    if (event.target == modalContent) {
      modalContent.style.display = "none";
    }
  });
}
footer.appendChild(copyright);
copyright.innerHTML += `<p class="copyright">
Copyright &copy; 2022 by Nir & Rom. All rights reserved.
</p>`;
// end of footer
