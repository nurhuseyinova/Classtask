let API_URL = `http://localhost:8080/blogs`;
let row = document.querySelector(".row");
let id = new URLSearchParams(window.location.search).get("id");
let obj;
function detailData() {
  axios(`${API_URL}/${id}`).then((res) => {
    obj = res.data;
    obj.array.forEach((element) => {
      row.innerHTML += `
<div class="col col-2 m-3"></div>
<span class="col col-8 m-3">
   <div class="card">
       <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p>written by ${element.author}</p>
   <button onclick=goBack()  class="text-success btn btn-primary">Go Back</button>
      </div>
    </div>
    <div class="col col-2 m-3"></div>
    </span>


`;
    });
  });
}
detailData();

function goBack() {
  window.location = "index.html";
}
