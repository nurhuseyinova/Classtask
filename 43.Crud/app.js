let API_URL = `http://localhost:8080/users`;

let form = document.querySelector("#userForm");
let firsName = document.querySelector("#firsName");
let lastName = document.querySelector("#lastName");
let emailInput = document.querySelector("#email");
let submitBtn = document.querySelector("#submit");
let search = document.querySelector("#searchInput");
let firstNameClick = document.querySelector("#thFirstName");
let arrowUp = document.querySelector(".fa-arrow-up");
let arrowDown = document.querySelector(".fa-arrow-down");


let editId = null;
let arr = [];
let editStatus = false;
let copyData = [];

let tbody = document.querySelector("#tBody");
async function getData() {
  tbody.innerHTML = "";
  let res = await axios(API_URL);
  let data = await res.data;
  arr = data;
  copyData = data;

  arr.forEach((el) => {
    tbody.innerHTML += `
    <tr>
    <td>${el.firstName}</td>
    <td>${el.lastName}</td>
    <td>${el.email}</td>
    <td><a href="" id="${el.id} "onclick=editBtn("${el.id}") class="btn btn-success">Edit</a>
    <a href="" id="${el.id}" onclick=deleteBtn("${el.id}") class="btn btn-danger">Delete</a></td>
   
    </tr>
    `;
  });

  // console.log(arr);
}
getData();

function deleteBtn(id, btn) {
  axios.delete(`${API_URL}/${id}`);
  btn.closest("tr").remove();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!editStatus) {
    let obj = {
      firstName: firsName.value,
      lastName: lastName.value,
      email: emailInput.value,
    };
    axios.post(`${API_URL}`, obj);
  } else {
    let obj = {
      firstName: firsName.value,
      lastName: lastName.value,
      email: emailInput.value,
    };
    axios.patch(`${API_URL}/${id}`, obj);
    editStatus = false;
  }
});

// function editBtn(id) {
//   editId = id;
//   editStatus = true;
//   let edit = copyData.filter((el) => el.id == editId);
//   edit.forEach((item) => {
//     firsName.value = item.firsName
//       lastName.value = item.lastName
//       emailInput.value = item.email
//   });

  // getData()
  // console.log(editId);
  // submitBtn.value="Edit"
// }

/////////////?
// search.addEventListener("input", function (event) {
//   axios(API_URL).then((res) => {
//   let filtered=arr
// filtered.filter((item) =>{
//     `${item.firstName},${item.lastName}`.toLocaleLowerCase().includes(
//       event.target.value.toLocaleLowerCase()
//     );
//   });
//   getData(filtered)
//   console.log(filtered);
// })
// });


arrowUp.style.display="none"
arrowDown.style.display="none"
// let asc="asc"
// firstNameClick.addEventListener("click",function(){
//   let sortedName;
//   asc=!asc
//   if(asc){
//     sortedName=copyData.sort((a,b)=>b.firsName.localeCompare(a.firsName))
//   arrowUp.style.display="none"
//   arrowDown.style.display="inline"
  
//   }

//   else{
//     sortedName=copyData.sort((a,b)=>a.firsName.localeCompare(b.firsName))
//     arrowUp.style.display="inline"
//   arrowDown.style.display="none"
//   }
//   getData(sortedName)

// })
