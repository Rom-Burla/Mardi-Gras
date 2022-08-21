"use strict";
import { sliderPics } from "./sliderpics.js";

let section = document.getElementsByTagName("section")[0];

let slideContainer = document.createElement("div");
slideContainer.className = "slide-container";
section.appendChild(slideContainer);

// slider
for (let i = 0; i < 5; i++) {
  let slide = document.createElement("div");
  slide.classList = "slide";
  slide.classList.add("fade");
  let slideCount = document.createElement("div");
  slideCount.className = "slide-count";
  slideCount.innerHTML += `${i + 1} / 5`;
  slide.appendChild(slideCount);
  slide.innerHTML += `<img src="${sliderPics[i].img}" alt="${sliderPics[i].alt}">`;
  let slideDescription = document.createElement("div");
  slideDescription.innerHTML = `${sliderPics[i].description}`;
  slideDescription.className = "slide-description";
  slide.appendChild(slideDescription);
  slideContainer.appendChild(slide);
}
let slides = document.getElementsByClassName("slide");
console.log(slides);
let prevSlide = document.createElement("a");
prevSlide.innerHTML = "&#10094;";
prevSlide.className = "prev";
slideContainer.appendChild(prevSlide);
let nextSlide = document.createElement("a");
nextSlide.innerHTML = "&#10095;";
nextSlide.className = "next";
slideContainer.appendChild(nextSlide);

let slideIndex = 1;
showSlides(slideIndex);

prevSlide.addEventListener("click", (n) => {
  n = -1;
  showSlides((slideIndex += n));
});
nextSlide.addEventListener("click", (n) => {
  n = 1;
  showSlides((slideIndex += n));
});

function showSlides(n) {
  let i;

  console.log(slides);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//end of slider

//mobile image
let mobileImgContainer = document.createElement("div");
mobileImgContainer.className = "mobile-img-container";
let mobileImg = document.createElement("img");
mobileImg.src = `${sliderPics[0].img}`;
mobileImg.alt = `${sliderPics[0].alt}`;
mobileImg.className = "mobile-img";
let mobileImgDescription = document.createElement("div");
mobileImgDescription.innerHTML = `<h1>${sliderPics[0].description}</h1>`;
mobileImgDescription.className = "mobile-img-description";
section.appendChild(mobileImgContainer);
mobileImgContainer.appendChild(mobileImg);
mobileImgContainer.appendChild(mobileImgDescription);
//end of mobile image
