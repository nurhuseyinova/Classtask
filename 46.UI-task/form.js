let API_URL = `http://localhost:8000/data`;

let userForm = document.querySelector("#userForm");
let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let emailAddres = document.querySelector("#email");
let file = document.querySelector("#file");
let submitBtn = document.querySelector("#submit");
 let editStatus=true
 let editId; 
 let id=new URLSearchParams(window.location.search).get("id")

let dateBtn= new Date()
userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {

      firstName: firstName.value,
      lastName: lastName.value,
      email: emailAddres.value,
      photo: `./image/${file.value.split("\\")[2]}`,
      date: dateBtn.toLocaleString()
  };
  if (firstName.value && lastName.value && emailAddres.value&&file.value) {
    if(!editStatus){
    axios.post(`${API_URL}`, obj);
    }else{
        axios.patch(`${API_URL}/${id}`,obj)
        submitBtn.innerHTML="Submit"
        editStatus=false
    }
    window.location="./index.html"
  }
  console.log('error');
});
     axios(`${API_URL}/${id}`).then(res=>{
        firstName.value=res.data.firstName 
        lastName.value=res.data.lastName 
        emailAddres.value=res.data.email 
        submitBtn.innerHTML="Edit"
        file.value=res.data.photo 
        editStatus=true
     })



