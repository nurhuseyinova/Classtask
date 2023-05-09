let API_URL = `http://localhost:8000/users`;
let form = document.querySelector("#form");
let submitBtn = document.querySelector("#submit");
let input = document.querySelectorAll("input");

let info = JSON.parse(localStorage.getItem("info")) || [];

function disabledEl() {
  if (country.value && city.value) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

country.addEventListener("input", disabledEl);
city.addEventListener("input", disabledEl);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    country: input[0].value,
    city: input[1].value,
  };
  if (obj.country && obj.city) {
    info.push(obj);
    localStorage.setItem("info", JSON.stringify(info));
  

   
      fetch(`API_URL`,{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(obj)

      }).then(()=>{
        myFun();
      });
    }
  window.location.href = "index.html";
});
