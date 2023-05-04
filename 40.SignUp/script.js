let userName = document.querySelector("#text");
let emailEl = document.querySelector("#email");
let passwordEl = document.querySelector("#password");
let check = document.querySelector("#checkbox");
let submitBtn = document.querySelector(".btn-primary");
let form = document.querySelector("form");

let data = JSON.parse(localStorage.getItem("data")) || [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    name: userName.value,
    email: emailEl.value,
    password: passwordEl.value,
  };

  data.push(obj);
  localStorage.setItem("data", JSON.stringify(data));
 
});

function disabledEl() {
  if (userName.value && emailEl.value && passwordEl.value && check.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

userName.addEventListener("input", disabledEl);
passwordEl.addEventListener("input", disabledEl);
emailEl.addEventListener("input", disabledEl);
check.addEventListener("input", disabledEl);
