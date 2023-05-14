let API_URL = `http://localhost:8080/users`;

let form = document.querySelector("#userForm");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let emailInput = document.querySelector("#email");
let numberInput = document.querySelector("#number");
let submitBtn = document.querySelector("#submit");
let search = document.querySelector("#searchInput");
let firstNameClick = document.querySelector("#thFirstName");
let arrowUp = document.querySelector(".fa-arrow-up");
let arrowDown = document.querySelector(".fa-arrow-down");
let alertBtn = document.querySelector("#notification");

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
  copyData = search.value ? copyData : data;

  copyData.forEach((el) => {
    tbody.innerHTML += `
    <tr>
    <td>${el.firstName}</td>
    <td>${el.lastName}</td>
    <td>${el.email}</td>
    <td>${el.number.slice(-4).padStart(el.number.length, "*")}</td>
    <td><a href="#" id="${el.id} "onclick=editBtn("${
      el.id
    }") class="btn btn-success">Edit</a>
    <a href="" id="${el.id}" onclick=deleteBtn("${
      el.id
    }") class="btn btn-danger">Delete</a>
    <a href="" id="${el.id}" onclick=detailBtn("${
      el.id
    }") class="btn btn-primary">Detail</a></td>
   
    </tr>
    `;
  });

  // console.log(arr);
}
getData();

function showAlert(message, className) {
  alertBtn.innerHTML = message;
  alertBtn.className = `alert alert-${className}`;
  alertBtn.removeAttribute("hidden");
  setTimeout(() => {
    alertBtn.setAttribute('hidden','')
  }, 2000);
}

function deleteBtn(id, btn) {
  showAlert("DeletedUser", "danger");
  axios.delete(`${API_URL}/${id}`);
  btn.closest("tr").remove();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const date = new Date();
  let obj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: emailInput.value,
    number: numberInput.value,
    date: date.toLocaleDateString,
  };
  if (
    firstName.value &&
    lastName.value &&
    emailInput.value &&
    numberInput.value
  ) {
    if (!editStatus) {
      axios.post(`${API_URL}`, obj);
      showAlert("Add User succesfully!", `info`);
    } else {
      axios.patch(`${API_URL}/${editId}`, obj);
      editStatus = false;
      showAlert("Edit User succesfully!", `success`);
    }
  }
});

function editBtn(id) {
  editId = id;
  editStatus = true;
  let edit = arr.filter((el) => el.id == editId);
  edit.forEach((item) => {
    firstName.value = item.firstName;
    lastName.value = item.lastName;
    emailInput.value = item.email;
  });
  submitBtn.innerText = "Edit";
}
search.addEventListener("input", function (e) {
  copyData = arr;
  copyData = copyData.filter((item) =>
    item.firstName.toLowerCase().includes(search.value.toLowerCase())
  );
  getData();
});
arrowUp.style.display = "none";
arrowDown.style.display = "none";
let asc = true;
firstNameClick.addEventListener("click", function () {
  asc = !asc;
  if (!asc) {
    copyData = arr;
    copyData.sort((a, b) => b.firstName.localeCompare(a.firstName));
    arrowUp.style.display = "none";
    arrowDown.style.display = "inline";
    getData();
  } else {
    copyData.sort((a, b) => a.firstName.localeCompare(b.firstName));
    arrowUp.style.display = "inline";
    arrowDown.style.display = "none";
    getData();
  }
});
async function getUserDetail(userId, username, userDate) {
  await axios.get(`${API_URL}/${userId}`);
  showAlert(`User: ${username}  created-${userDate}`, `info`);
}
