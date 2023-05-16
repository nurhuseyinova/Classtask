let bar = document.querySelector(".menu");
let header = document.querySelector(".header");
let xmark=document.querySelector(".fa-xmark")

bar.addEventListener("click", function () {
  header.classList.toggle("show");
  xmark.classList="white"
 if(bar.classList = "fa-bars"){
    (bar.classList = "fa-solid fa-xmark")}
    if(bar.classList = "fa-solid fa-xmark")
    { (bar.classList = "fa-solid fa-bars")}
});
