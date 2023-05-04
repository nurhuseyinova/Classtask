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
    id: Date.now(),
    name: userName.value,
    email: emailEl.value,
    password: passwordEl.value,
    check: check.checked,
  };
  if (obj.name && obj.email) {
    data.push(obj);
    localStorage.setItem("data", JSON.stringify(data));
  }
  window.location.href = "data.html";
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
