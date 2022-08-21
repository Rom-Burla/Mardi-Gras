"use strict";

let errors = [];
let myForm = document.getElementById("my-form");
let myErr = document.getElementById("err");

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
