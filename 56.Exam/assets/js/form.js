let API_URL = `http://localhost:8000/data`;
let form = document.querySelector("form");
let submitBtn = document.querySelector("#submit");
let input = document.querySelectorAll("input");
let formNote = document.querySelectorAll(".formNote");
let id=new URLSearchParams(window.location.search).get("id")

form.addEventListener("submit",function(e){
    e.preventDefault()
    let obj={
        firstName:input[0].value,
        age:input[1].value,
        photo:`./assets/scss/image/${input[2].value.split("\\")[2]}`

    }
    if(input[0].value&&input[1].value&&input[2].value){
        if(id){
            axios.patch(`${API_URL}/${id}`,obj);
            submitBtn.innerHTML="Submit";
            formNote.innerHTML="Add Users";

        }else{

            axios.post(API_URL,obj)
        }
        window.location="index.html";
    }
})

axios(`${API_URL}/${id}`).then(res=>{
    (input[0].value=res.data.firstName);
    (input[1].value=res.data.age);
     submitBtn.innerHTML="Edit"
    formNote.innerHTML="Edit Users"

})