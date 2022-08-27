"use strict";
import { sponsers } from "./sponsers.js";
let navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");
let footer = document.querySelector("footer");
let modalArr = [];
let modalContainer = document.createElement("div");
let footerHeading = document.createElement("h3");
let copyright = document.createElement("p");
let socialIconsFoot = document.createElement("div");
let audio = document.createElement("div");

// responsive nav bar
navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
// end of responsive nav bar

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
                                <i class="fab fa-facebook"></i>
                                </a>
                                </li>
                                <li>
                                <a
                                href="https://twitter.com/MardiGrasNOLA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                                <i class="fab fa-twitter"></i>
                                </a>
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
audio.innerHTML = `<audio controls loop playsinline id="website-song">
                                                        <source src="./images/Music/new_orleans_mardis_gras_proud_music_preview.mp3"
                                                            type="audio/mpeg">
                                                    </audio>`;
document.getElementsByTagName("header")[0].appendChild(audio);
footer.appendChild(copyright);
copyright.innerHTML += `<p class="copyright">
Copyright &copy; 2022 by Rom & Nir. All rights reserved.
</p>`;
document.addEventListener("DOMContentLoaded", musicPlay);
function musicPlay() {
  document.getElementById("website-song").play();
  document.removeEventListener("click", musicPlay);
}
// end of footer
