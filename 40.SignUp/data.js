let card = document.querySelector(".card");
let userName = document.querySelector("#text");
let emailEl = document.querySelector("#email");
let passwordEl = document.querySelector("#password");
let check = document.querySelector("#checkbox");
let submitBtn = document.querySelector(".btn-primary");
let form = document.querySelector("form");
let addBtn = document.querySelector("#addBtn");
let deleteBtn = document.querySelectorAll("btn-delete");

addBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

let data = JSON.parse(localStorage.getItem("data")) || [];

function listData() {
  card.innerHTML = "";
  data.forEach((item) => {
    card.innerHTML += `
    <div class="card-body flex-wrap">
              <h5 class="card-title">username: ${item.name}</h5>
              <p class="card-text">email :${item.email}</p>
              <button class="btn btn-danger" id=${item.id} onclick=deleteFun(${item.id})>Delete</button>
            </div>`;
  });
}

listData();
function deleteFun(id) {
  fav = data.filter((obj) => obj.id != id);
  localStorage.setItem("data", JSON.stringify(fav));
  listData();
  // this.parentElement.parentElement.parentElement.remove();
  this.closest(".card").remove();

  console.log(id);
}
