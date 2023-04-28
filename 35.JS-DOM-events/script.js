let firstname = document.querySelector("#name");
let inputName = document.querySelector("#inputname");
let surname = document.querySelector("#surname");
let inputSurname = document.querySelector("#inputsurname");
let email = document.querySelector("#email");
let inputEmail = document.querySelector("#inputemail");
let password = document.querySelector("#pasword");
let inputPassword = document.querySelector("#inputpassword");
let checkbox = document.querySelector("#checkbox");
let checked = document.querySelector("#checked");
let yes = document.querySelector("#yes");
let no = document.querySelector("#no");
let now = document.querySelector("#now");
let btn = document.querySelector("#btn");

inputName.addEventListener("focus", function () {
  this.style.backgroundColor = "grey";
  this.style.color = "white";
});
inputName.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
  this.style.color = "black";
});
inputSurname.addEventListener("mouseover", function () {
  this.style.backgroundColor = "green";
});
inputSurname.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
});
inputEmail.addEventListener("contextmenu", function () {
  this.style.backgroundColor = "red";
});
inputEmail.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
});
inputPassword.addEventListener("focus", function (event) {
  event.target.value = "light57";
});

checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    checked.style.visibility = "visible";
  } else {
    checked.style.visibility = "hidden";
  }
});
yes.addEventListener("click", function () {
  alert("Thanks!");
});
no.addEventListener("click", function () {
  alert("Thanks!");
});
now.addEventListener("click", function () {
  alert("Thanks!");
});

////don't work, i didn't find, how do i do :(
btn.setAttribute("disabled", "");
if (
  inputName.value === value &&
  inputSurname.value === value &&
  checkbox === checked
) {
  btn.removeAttribute("disabled", "");
  btn.addEventListener("submit", function () {});
}
