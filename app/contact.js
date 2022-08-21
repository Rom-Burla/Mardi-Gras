"use strict";

let errors = [];
let myForm = document.getElementById("my-form");
let myErr = document.getElementById("err");
let article = document.getElementsByTagName("article")[0];
// form validations
myForm.addEventListener("submit", (evt) => {
  let { fname, lname, email, password, freetxt } = myForm.elements;
  let tempName = fname.value.trim();
  if (tempName.length == 0) {
    let msg = "You need to write your first name";
    errors.push(msg);
    evt.preventDefault();
  } else if (tempName.length < 2 && tempName.length > 0) {
    let msg = "First name isn't valid";
    errors.push(msg);
    evt.preventDefault();
  }
  tempName = lname.value.trim();
  if (tempName.length == 0) {
    let msg = "You need to write your last name";
    errors.push(msg);
    evt.preventDefault();
  } else if (tempName.length < 2) {
    let msg = "Last name isn't valid";
    errors.push(msg);
    evt.preventDefault();
  }
  if (email.value.length == 0) {
    let msg = "You need to write your Email";
    errors.push(msg);
    evt.preventDefault();
  } else if (!email.value.includes("@")) {
    let msg = "Email isn't valid";
    errors.push(msg);
    evt.preventDefault();
  } else if (!email.value.includes(".")) {
    let msg = "Email isn't valid";
    errors.push(msg);
    evt.preventDefault();
  } else if (email.value.length < 11) {
    let msg = "Emails are at least 10 characters long";
    errors.push(msg);
    evt.preventDefault();
  }
  if (password.value.length == 0) {
    let msg = "You need to create a password";
    errors.push(msg);
    evt.preventDefault();
  } else if (password.value.length < 8) {
    let msg = "Password needs to be at least 8 characters";
    errors.push(msg);
    evt.preventDefault();
  }
  if (freetxt.value.length < 2) {
    let msg = "You need to write something to us";
    errors.push(msg);
    evt.preventDefault();
  }
  if (errors.length > 0) {
    myErr.innerHTML = "";
    errors.forEach((err) => {
      myErr.innerHTML += `
      <div>${err}</div>`;
    });
    errors.splice(0, errors.length);
  }
});

let cityHallContact = document.createElement("div");
article.appendChild(cityHallContact);
cityHallContact.innerHTML = `
<h3 class="cityhall-heading">New Orleans - City Hall</h3>
<p class="cityhall-address">Address: 1300 Perdido St, New Orleans, LA 70112.</p>
<p class="cityhall-phone">Phone: 504-658-4000</p>
<div class="mapouter"><div class="gmap_canvas"><iframe width="750" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=1300%20Perdido%20St,%20New%20Orleans&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123 movies</a><br><style>.mapouter{position:relative;text-align:right;height:450px;width:750px;}</style><a href="https://www.embedgooglemap.net">google map location for website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:450px;width:750px;}</style></div></div>
<div class="mapouter-mobile"><div class="gmap_canvas"><iframe width="400" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=1300%20Perdido%20St,%20New%20Orleans,%20LA&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/">divi discount</a><br><style>.mapouter{position:relative;text-align:right;height:350px;width:400px;}</style><a href="https://www.embedgooglemap.net">google maps api html</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:350px;width:400px;}</style></div></div>
`;


