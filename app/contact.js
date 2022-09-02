"use strict";

let errors = [];
let myForm = document.getElementById("my-form");
let myErr = document.getElementById("err");
let article = document.getElementsByTagName("article")[0];
let emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*){2,}|(".+"))@((\[[0-9]{2,3}\.[0-9]{2,3}\.[0-9]{2,3}\.[0-9]{2,3}])|(([a-zA-Z\-0-9]{2,}\.)+[a-zA-Z]{2,}))$/g;
let passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,14}$/g;
let nameRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\][^-\s\]]{2,}$/g;
// form validations

myForm.addEventListener("submit", (evt) => {
  let { fname, lname, email, password, passwordConfirm, freetxt } =
    myForm.elements;
  let tempName = fname.value;
  if (tempName.length === 0) {
    let msg = "You need to write your first name";
    errors.push(msg);
    evt.preventDefault();
  } else if (!tempName.match(nameRegex)) {
    let msg = "First name isn't valid";
    errors.push(msg);
    evt.preventDefault();
  }
  tempName = lname.value;
  if (tempName.length === 0) {
    let msg = "You need to write your last name";
    errors.push(msg);
    evt.preventDefault();
  } else if (!tempName.match(nameRegex)) {
    let msg = "Last name isn't valid";
    errors.push(msg);
    evt.preventDefault();
  }
  if (email.value.length === 0) {
    let msg = "You need to write your Email";
    errors.push(msg);
    evt.preventDefault();
  } else if (!email.value.match(emailRegex)) {
    let msg = "Email isn't valid";
    errors.push(msg);
    evt.preventDefault();
  }
  if (password.value.length === 0) {
    let msg = "You need to create a password";
    errors.push(msg);
    evt.preventDefault();
  } else if (!password.value.match(passwordRegex)) {
    let msg =
      "Password needs to between 8-14 characters, with at least one letter, one number and one special character";
    errors.push(msg);
    evt.preventDefault();
  }
  if (
    passwordConfirm.value.length === 0 &&
    password.value.match(passwordRegex)
  ) {
    let msg = "You need to confirm your password";
    errors.push(msg);
    evt.preventDefault();
  } else if (passwordConfirm.value.length > 0 && password.value.length === 0) {
    let msg = "You need to create a password before you confirm it";
    errors.push(msg);
    evt.preventDefault();
  } else if (passwordConfirm.value !== password.value) {
    let msg = "Passwords don't match";
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
      <div style="margin-bottom:10px">${err}</div>`;
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
