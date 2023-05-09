// let getCustomer=async()=>{
//     try{
//         let response=await fetch(`https://northwind.vercel.app/api/suppliers`)
//         let data =await response.json()
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }

// }
// getCustomer()

// let getCustomerById=async(id)=>{
//     try{
//         let response=await fetch(`https://northwind.vercel.app/api/suppliers/${id}`)
//         let data =await response.json()
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }

// }
// getCustomerById(5)

// let getCustomerByIdAxios=async()=>{
//     axios(`https://northwind.vercel.app/api/suppliers`).then((rest)=>rest.data).catch((err)=>console.log(err))

// }
// getCustomerByIdAxios()

// async function getAllData() {
//   await axios(`http://localhost:3000/users`)
//     .then((rest) =>console.log(rest.data))
//     .catch((err) => console.log(err));
// }
// getAllData();

let API_URL = `http://localhost:8000/users`;
let col = document.querySelector(".col");
let row = document.querySelector(".row");
let country = document.querySelector("#country");
let city = document.querySelector("#city");
let form = document.querySelector("#form");
let submitBtn = document.querySelector("#submit");
let input = document.querySelectorAll("input");
let addBtn = document.querySelector("#add");
let ulEl = document.querySelector("#list-group");

let editStatus = false;
let editId = null;

addBtn.addEventListener("click", function () {
  window.location.href = "app.html";
});
function myFun() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) =>
      data.forEach((el) => {
        let card = document.createElement("div");
        card.innerHTML += `<div class="col col-6 my-2">
        <ul class="list-group">
          <li class="list-group-item d-flex align-items-center justify-content-between">
              <div><h2>${el.country}</h2>
                  <p>${el.city}</p></div>
              <div class="div">
                 <i onclick=editBtn(${el.id}) class="fa-solid fa-pen"></i>
                 <i onclick=deleteBtn('${el.id}')  class="fa-solid fa-trash"></i>
              </div>
          </li>
        </ul>
      </div>`;

        row.append(card);
      })
    );
}
myFun();

async function deleteBtn(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  myFun();
  // console.log(id);
}

// })
// async function editBtn(obj) {
//   await fetch(`${API_URL}/${id}`, {
//     method: "PUT",
//     headers:{
//       "Content-type": "application/json"
//     },
//     body:JSON.stringify(obj)
//   })
//   myFun()

// }

function editBtn(id) {
  editId = id;
  editStatus = true;
  fetch(`${API_URL}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      input[0].value = data.country;
      input[1].value = data.city;
    })
    .catch((err) => console.log(err));
  window.location.href = "app.html";
}
