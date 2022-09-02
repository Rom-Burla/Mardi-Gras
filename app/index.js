"use strict";
import { sliderPics } from "./sliderpics.js";

const section = document.getElementsByTagName("section")[0];
const article = document.getElementsByTagName("article")[0];
let slideContainer = document.createElement("div");
slideContainer.className = "slide-container";
section.appendChild(slideContainer);

// Countdown timer until MardiGras

let countDown = document.createElement("div");
countDown.className = "countdown";

let mardiDate23 = new Date("Feb 21, 2023 00:00:00.001 CST").getTime();

setInterval(() => {
  let present = new Date().getTime();
  let timeLeft = mardiDate23 - present;
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countDown.innerHTML = `<h3>Time left 'til Mardi Gras 2023!</h3><br><span class="count-element">${days}</span> <span class="count-element">${hours}</span><span class="count-element">${minutes}</span><span class="count-element">${seconds}</span><br><span class="date-elements"><h4>Days</h4></span><span class="date-elements"><h4>Hours</h4></span><span class="date-elements"><h4>Minutes</h4></span><span class="date-elements"><h4>Seconds</h4></span>`;

  if (timeLeft < 0) {
    i++;
  }
}, 1000);
section.appendChild(countDown);
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
let activeTimer;

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

function timedSlides(n) {
  n = n || 1;
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  if (activeTimer) window.clearTimeout(activeTimer);

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
  activeTimer = window.setTimeout(timedSlides, 5000);
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

let mardiExplain = document.createElement("div");
article.appendChild(mardiExplain);
mardiExplain.innerHTML = `<p>The holiday of Mardi Gras is celebrated in all of Louisiana, including the city of New Orleans. Celebrations are concentrated for about two weeks<br> before and through Shrove Tuesday, the day before Ash Wednesday (the start of lent in the Western Christian tradition). Usually there is one major <br>parade each day (weather permitting); many days have several large parades. The largest and most elaborate parades take place the last five days<br> of the Mardi Gras season. In the final week, many events occur throughout New Orleans and surrounding communities,<br> including parades and balls (some of them masquerade balls).</p>
<p>The parades in New Orleans are organized by social clubs known as krewes; most follow the same parade schedule and route each year. The<br> earliest-established krewes were the Mistick Krewe of Comus, the earliest, Rex, the Knights of Momus and the Krewe of Proteus. Several modern<br> "super krewes" are well known for holding large parades and events (often featuring celebrity guests), such as the Krewe of Endymion, the<br> Krewe of Bacchus, as well as the Zulu Social Aid & Pleasure Club—a predominantly African American krewe. Float riders traditionally toss throws into<br> the crowds. The most common throws are strings of colorful plastic beads, doubloons, decorated plastic "throw cups", Moon Pies, and small<br> inexpensive toys. Major krewes follow the same parade schedule and route each year.</p>
<p>While many tourists center their Carnival season activities on Bourbon Street, major parades originate in the Uptown and Mid-City districts and follow<br> a route along St. Charles Avenue and Canal Street, on the upriver side of the French Quarter. Walking parades - most notably the Krewe du Vieux and Chewbacchus - also take place downtown in the Faubourg Marigny and French Quarter in the weekends preceding Mardi Gras day. Mardi Gras day traditionally concludes with the "Meeting of the Courts" between Rex and Comus.</p>`;
mardiExplain.className = "mardi-explain";
