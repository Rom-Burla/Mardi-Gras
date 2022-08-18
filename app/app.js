import { sponsers } from "./sponsers.js";
let navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");
let modalArr = [];
let modalContainer = document.getElementById("modal-container");
navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

footer.innerHtml = `<p class="copyright">Copyright &copy; 2022 by Nir & Rom. All rights reserved.</p>`;
footer.innerHtml = `<p class="copyright">Copyright &copy; 2022 by Nir & Rom. All rights reserved.</p>`;

for (let i = 0; i < sponsers.length; i++) {
  let modal = document.createElement("div");
  modalArr.push(modal);
  footer.appendChild(modalArr[i]);
}
