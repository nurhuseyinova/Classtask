let userName = document.querySelector("#username");
let emailName = document.querySelector("#email");
let passwordName = document.querySelector("#password");
let checkboxName = document.querySelector("#checkbox");
let form = document.querySelector("#form");


let userData = JSON.parse(localStorage.getItem("usersData")) ?? [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let userObj = {
    username: userName.value,
    email: emailName.value,
    password: passwordName.value,
    check: checkboxName.checked
  };
  if (userName.value && emailName.value) {userData.push(userObj);
  localStorage.setItem("userData", JSON.stringify(userData));
  }
});

