"use strict";

let errors = [];
let myForm = document.getElementById("my-Form");
let myErr = document.getElementById("err");

// need to return to make the checks more serius
myForm.addEventListener("submit", (evn) => {
  let { fName, lName, eMail, password } = myForm.elements;
  let tempName = fName.value.trim();
  if (tempName.length == 0) {
    let msg = "Name is empty";
    errors.push(msg);
    evn.preventDefault();
  } else if (tempName.length < 2 && tempName.length > 0) {
    let msg = "wrong name!";
    errors.push(msg);
    evn.preventDefault();
  }
  tempName = lName.value.trim();
  if (tempName.length < 2) {
    let msg = "wrong last name!";
    errors.push(msg);
    evn.preventDefault();
  }

  if (!eMail.value.includes("@")) {
    let msg = "wrong email!";
    errors.push(msg);
    evn.preventDefault();
  }

  if (password.value < 2) {
    let msg = "wrong password!";
    errors.push(msg);
    evn.preventDefault();
  }

  if (errors.length > 0) {
    myErr.innerHTML = "";
    errors.forEach((err) => {
      myErr.innerHTML += `
          <div>
          you got error ${err}
          </div>`;
    });
    errors.splice(0, errors.length);
  }
});
