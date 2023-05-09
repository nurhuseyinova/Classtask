import { API } from "./data.js";

//1////sync
function getTodos() {
  fetch(`${API}todos`)
    .then((value) => value.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
getTodos();

//2
function getCompletedTodos() {
  fetch(`${API}todos`)
    .then((value) => value.json())
    .then((data) => {
      let filtered = data.filter((el) => el.completed);
      console.log(filtered);
    })

}
getCompletedTodos();

//3
function getUserIdTodos() {
  fetch(`${API}todos`)
    .then((value) => value.json())
    .then((data) => {
      let filtered = data.filter((el) => el.userId==2);
      console.log(filtered);
    })

}
getUserIdTodos();

//4
function getId(id) {
    fetch(`${API}todos/${id}`)
      .then((value) => value.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  getId(5);
