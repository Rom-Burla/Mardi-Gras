"use strict";
import { sponsers } from "./sponsers.js";
let navToggle = document.querySelector(".fas");
let links = document.querySelector(".links");
let footer = document.querySelector("footer");
let modalArr = [];
let modalContainer = document.createElement("div");
let footerHeading = document.createElement("h3");
let copyright = document.createElement("p");
let socialIconsFoot = document.createElement("div");
let triviaContainer = document.createElement("div");
triviaContainer.className = "trivia-container";
let triviaBtn = document.createElement("button");
triviaBtn.textContent = "Trivia";
triviaBtn.className = "trivia-game";
triviaContainer.appendChild(triviaBtn);
footer.appendChild(triviaContainer);
// responsive nav bar
navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
// end of responsive nav bar
triviaBtn.addEventListener("click", () => {
  window.open(
    "./trivia.html",
    "_blank",
    "toolbar=yes,scrollbars=yes,resizable=yes,width=800,height=800"
  );
});
// footer
footer.appendChild(footerHeading);
footerHeading.innerHTML = `Our Festival's Sponsers`;
footerHeading.style.color = "#9453A6";
footer.appendChild(modalContainer);
modalContainer.className = "modal-container";

// sponser modals
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
  <h3>Contact Info</h3>
  <p>Address: ${sponsers[i].address}</p>
  <p>Phone: ${sponsers[i].phone}</p>
  <h3><a href="${sponsers[i].website}">Click to get to ${sponsers[i].name} website</a></h3>`;
  modalArr[i].addEventListener("click", function () {
    modalContent.style.display = "block";
  });
  window.addEventListener("click", function (event) {
    if (event.target == modalContent) {
      modalContent.style.display = "none";
    }
  });
}
//end of sponser modals

footer.appendChild(socialIconsFoot);
socialIconsFoot.innerHTML = `<ul class="social-icons-footer">
<li>
  <a href="https://www.facebook.com/MardiGrasNewOrleans">
   <i class="fab fa-facebook"></i></a>
</li>
<li>
  <a href="https://twitter.com/MardiGrasNOLA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
  <i class="fab fa-twitter"></i></a>
</li>
<li>
  <a href="https://www.youtube.com/c/MardiGrasNewOrleans">
   <i class="fab fa-youtube"></i>
  </a>
</li>
<li>
  <a href="https://www.instagram.com/nolamardigras">
   <i class="fab fa-instagram  "></i>
  </a>
</li>
</ul>`;

let year = new Date().getFullYear();
footer.appendChild(copyright);
copyright.innerHTML += `<p class="copyright">
Copyright &copy; ${year} by Rom & Nir. All rights reserved.
</p>`;

// end of footer
