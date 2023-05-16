let bar = document.querySelector(".fa-bars");
let head = document.querySelector(".head");
let clickNav = document.querySelector(".headNav");
bar.addEventListener("click", function () {
  clickNav.classList.toggle("show");

  bar.classList = "fa-solid fa-bars"
    ? (bar.classList = "fa-solid fa-xmark")
    : (bar.classList = "fa-solid fa-bars");
});
