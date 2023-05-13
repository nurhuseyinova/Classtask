let API_URL = `http://localhost:8080/blogs`;

let blogTitle = document.querySelector("#title");
let blogBody = document.querySelector("#textarea");
let blogAuthor = document.querySelector("#author");
let addBtn = document.querySelector("#add");
let form = document.querySelector("#form");

let authorChange;
blogAuthor.addEventListener("change", function (e) {
  authorChange = e.target.value
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    title: blogTitle.value,
    body: blogBody.value,
    author: blogAuthor.value||"Ipsum"
  };
  axios.post(API_URL, obj);
  window.location = "index.html";
});











// function editBtn(id) {
//     editStatus = true;
//     editId = id;
//     axios(`${API_URL}/${id}`);
//     blogTitle.value = title.value;
//     blogBody.value = body.value;
//     blogAuthor = author.value;
  
//     window.location = "form.html";
//   }
