let row = document.querySelector(".row");
let input = document.querySelector(".form-control");
let add = document.querySelector(".btn-primary");
let ulEl = document.querySelector(".list-group");
add.disabled = true;

let fav = JSON.parse(localStorage.getItem("input")) || [];

input.addEventListener("input", function (event) {
  if (event.target.value) {
    add.disabled = false;
  } else {
    add.disabled = true;
  }
});

add.addEventListener("click", function () {
  let obj = {
    text: input.value,
    id: Date.now(),
  };

  fav.push(obj);

  localStorage.setItem("input", JSON.stringify(fav));

  input.value = "";
  add.disabled = true;

  listFav();
});

function listFav() {
  ulEl.innerHTML = "";
  fav.forEach((element) => {
    ulEl.innerHTML += `
        <li class="list-group-item list-group-item-danger d-flex align-items-center justify-content-between my-2">
                     <div><input type="checkbox" checked class="checkbox "><br>
                         <span>${element.text}</span></div>
                     <div>
                         <button class="edit btn btn-success " id=${element.id} onclick=removeTodo(${element.id})>Edit</button>
                         <button type="button" class="delete btn btn-danger " id=${element.id} onclick=removeTodo(${element.id})>Delete</button>
                     </div>
                 </li>`;
  });
  input.value = "";
  add.disabled = true;
}

function removeTodo(id) {
  console.log(id);
  fav= fav.filter((obj) => obj.id != id);
  localStorage.setItem("input", JSON.stringify(fav));
  listFav();
}
function editTodo(id) {
  console.log(id);
  fav = fav.filter((item) => item.id != id);
  localStorage.setItem("input", JSON.stringify(fav));
  listFav();
}

listFav();
