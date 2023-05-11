let API_URL = `http://localhost:8080/blogs`;

let row = document.querySelector(".row");
let blogTitle = document.querySelector("#title");
let blogBody = document.querySelector("#textarea");
let blogAuthor = document.querySelector("#author");
let editId;
let editStatus = false;

async function getData() {
  row.innerHTML = "";
  let res = await axios(API_URL);
  let data = await res.data;
  data.forEach((element) => {
    row.innerHTML += `
        <div class="col col-2 m-3"></div>
         <span class="col col-8 m-3">
            <div class="card" >
                <div class="card-body">
                 <h5 class="card-title">${element.title}</h5>
                 <p class="card-text">${element.body}</p>
                 <p>written by ${element.author}</p>
                 <a  href="detail.html?id=${element.id}" class="text-success">Read More</a><br><br>

                 <button onclick=deleteBtn(${element.id}) class="btn btn-danger">Delete</button>
                 <a onclick=editBtn(${element.id}) href="#" class="btn btn-warning">Edit</a>
               </div>
             </div>
             <div class="col col-2 m-3"></div>
             </span>
             `;
  });
}
getData();

function deleteBtn(id, btn) {
  axios.delete(`${API_URL}/${id}`);
  btn.closest("span").remove();
}

function editBtn(id) {
  editStatus = true;
  editId = id;
  axios(`${API_URL}/${id}`);
  blogTitle.value = title.value;
  blogBody.value = body.value;
  blogAuthor = author.value;

  window.location = "form.html";
}
