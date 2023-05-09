let API_URL = `http://localhost:8080/users`;
let form = document.querySelector("#form");
let submitBtn = document.querySelector("#submit");
let input = document.querySelectorAll("input");

let info = JSON.parse(localStorage.getItem("info")) || [];

let editStatus = false;
let editId = null;

function disabledEl() {
  if (country.value && city.value) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
country.addEventListener("input", disabledEl);
city.addEventListener("input", disabledEl);

input[0].value = info.country;
input[1].value = info.city;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    country: input[0].value,
    city: input[1].value,
  };
  if (!editStatus) {
    fetch(`API_URL`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
   
    }).then(()=>{myFun()})

   
    
  } else {
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(obj)
    }).then(()=>{myFun()})
   
    editStatus=false
  }


  window.location.href = "index.html";
});
