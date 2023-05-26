let API_URL = `http://localhost:8080/data`;
let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let formNote = document.querySelector(".formNote");
let submitBtn = document.querySelector(".submit");
let id=new URLSearchParams(window.location.search).get("id")

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    title: input[0].value,
    adddress: input[1].value,
    email: input[2].value,
    phone: input[3].value,
    price: input[4].value,
  };
  if (
    input[0].value &&
    input[1].value &&
    input[2].value &&
    input[3].value &&
    input[4].value
  ){
    if(!id){
        

    axios.post(API_URL, obj);
    }
    else{
        axios.patch(`${API_URL}/${id}`, obj);
    submitBtn.innerHTML="Submit"
    formNote.innerHTML="ADD USERS"

    }
    window.location="index.html"
  }
});

axios(`${API_URL}/${id}`).then(res=>{
    (input[0].value=res.data.title),
    (input[1].value=res.data.adddress),
    (input[2].value=res.data.email),
    (input[3].value=res.data.phone),
    (input[4].value=res.data.price),
    submitBtn.innerHTML="Edit"
    formNote.innerHTML="EDIT USERS"
})
