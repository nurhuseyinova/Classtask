let API_URL = `http://localhost:8000/data`;
let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let headNote = document.querySelectorAll(".head");
let submitBtn = document.querySelector("#submit");
let id = new URLSearchParams(window.location.search).get("id");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    title: input[0].value,
    info: input[1].value,
    price: input[2].value,
    photo: `./assets/image/${input[3].value.split("\\")[2]}`,
  };

  if (id) {
    axios.patch(`${API_URL}/${id}`, obj);
    submitBtn.innerHTML = "Submit";
   
    console.log("patch");
  } else {
    axios.post(API_URL, obj);
    console.log("post");

  }
  window.location = "index.html";
});

if (id) {
  let res = axios(`${API_URL}/${id}`);
  let obj = res.data;
  console.log("obj", obj);
  (input[0].value = obj.title),
    (input[1].value = obj.info),
    (input[2].value = obj.price);
  submitBtn.innerHTML = "Edit";
  
}
