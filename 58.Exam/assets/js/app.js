let API_URL = `http://localhost:8000/data`;
let card = document.querySelector(".api");
let sortBtn = document.querySelector(".sort");
let search = document.querySelector(".search");
let showMore = document.querySelector(".more");
let bar = document.querySelector(".fa-bars");
let form = document.querySelector("form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let subject = document.querySelector("#subject");
let age = document.querySelector("#age");
let file = document.querySelector("#file");
let info = document.querySelector("#info");
let submitBtn = document.querySelector("#submit");
let editStatus = false;
let editId = null;
let arr = [];
let sorted = [];
let filtered = [];
let count = 3;

async function getData() {
  card.innerHTML = "";
  let res = await axios(API_URL);
  let data = await res.data;
  arr = data;
  sorted = data;
  filtered = filtered.length || search.value ? filtered : data;

  filtered.forEach((element) => {
    card.innerHTML += `
        <div class="col col-12 col-md-6 col-lg-4 my-5">
        <div class="teacherItem">
            <img src="${element.photo}" alt="">
        
            <div class="itemNote">
                <p class="item1">${element.firstName} ${element.lastName} ${
      element.age
    }</p>
            <p class="item2">${element.subject} Teacher</p>
            <p class="item3">
            ${element.info.slice(0, 50)}...</p>
            <button onclick=editBtn("${
              element.id
            }") class="edit"><i class="fa-solid fa-pen"></i></button>
            <button class="basket" onclick=addBasketBtn("${
              element.id
            }")><i class="fa-solid fa-basket-shopping"></i></button>
            <a href="./detail.html?id=${
              element.id
            }" class="detail"><i class="fa-solid fa-file-pen"></i></a>
            <button class="delete" onclick=deleteBtn("${
              element.id
            }")><i class="fa-solid fa-trash"></i></button>
        
            </div>
        </div>

    </div>
        
        `;
  });
}
getData();

function deleteBtn(id, btn) {
  axios.delete(`${API_URL}/${id}`);
  btn.closest("col").remove();
}

search.addEventListener("input", function (e) {
  filtered = sorted.filter((el) => {
    return el.subject
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  getData(filtered);
});
sortBtn.addEventListener("click", function () {
  if (sortBtn.innerHTML == "Sort") {
    sorted = filtered.sort((a, b) => a.age - b.age);
    sortBtn.innerHTML = "Ascending";
    getData(sorted);
  } else if (sortBtn.innerHTML == "Ascending") {
    sorted = filtered.sort((a, b) => b.age - a.age);
    sortBtn.innerHTML = "Descending";
    getData(sorted);
  } else {
    filtered = arr;
    sortBtn.innerHTML = "Sort";
    getData(filtered);
  }
});
// showMore.addEventListener("click",function(){
//     count+=1
//     if(count>filtered.length){
//         showMore.style.display="none"
//     }
//     else if(filtered.length){
//         getData(filtered)
//     }
// })

async function addBasketBtn(id) {
  let res = await axios(`${API_URL}/${id}`);
  let obj = await res.data;
  await axios.post(`http://localhost:8000/basket`, obj);
}

// form.addEventListener("submit",function(e){
//     e.preventDefault()
//     let obj={
//         firstName:firstName.value,
//         lastName:lastName.value,
//         age:age.value,
//         subject:subject.value,
//         photo:file.value,
//         info:info.value
//     }
//     if(editStatus){
//         axios.patch(`${API_URL}/${editId}`,obj)
//     submitBtn.innerHTML="Submit"

//     editStatus=false
//     getData(filtered)
//     }
//     else{
//         axios.post(`${API_URL}`,obj)
//         getData(filtered)

//     }

// })

// function editBtn(id){

//     editId=id
//     axios(`${API_URL}/${id}`).then(res=>{
//         firstName.value=res.data.firstName;
//         lastName.value=res.data.lastName;
//         age.value=res.data.age;
//         info.value=res.data.info;
//         subject.value=res.data.subject;
//         editStatus=true;
//     submitBtn.innerHTML="Edit"

//     })
// }

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    subject: subject.value,
    photo: file.value,
    info: info.value,
  };
  if (!editStatus) {
    await axios.post(`${API_URL}`, obj);
    getData();
  } else {
    await axios.patch(`${API_URL}/${editId}`, obj);
    getData();
    editStatus = false;
    submitBtn.innerHTML = "Submit";
    firstName.innerHTML = "";
    lastName.innerHTML = "";
    emailEl.innerHTML = "";
    numberInput.innerHTML = "";
  }
});

async function editBtn(id) {
  editId = id;
  let res = await axios(`${API_URL}/${id}`);
  let data = await res.data;
  firstName.value = data.firstName;
  lastName.value = data.lastName;
  age.value = data.age;
  info.value = data.info;
  subject.value = data.subject;
  submitBtn.innerHTML = "Edit";
  editStatus = true;
}
