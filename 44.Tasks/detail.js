let API_URL = `http://localhost:8080/blogs`;
let detail = document.querySelector(".homecard");
let id = new URLSearchParams(window.location.search).get("id");

async function detailData() {
  let res =await axios(`${API_URL}/${id}`);
 let data=await res.data
  detail.innerHTML += `
        <h5 class="card-title">Card Title: ${data.title}</h5>
        <p class="card-text">Body info: ${data.body}</p>
               
        <p>Author:  ${data.author}</p>
   <button onclick=goBack()  class="text-success btn btn-primary">Go Back</button>
      

`;
}
detailData();

function goBack() {
  window.location = "index.html";
}
