let API_URL=`http://localhost:8080/data`
let input=document.querySelectorAll("input")
let form=document.querySelector("form")
let submitBtn=document.querySelector("#submit")
// let bar=document.querySelector("#title")
// let id =new URLSearchParams(window.location.search).get("id")

form.addEventListener("submit",function(e){
    e.preventDefault()
    let obj={
        title:input[0].value,
        info:input[1].value,
        price:input[2].value,
        photo:`./assests/scss/image/${input[3].value.split("\\")[2]}`
    }
    if(input[0].value&&input[1].value&&input[2].value&&input[3].value){

        axios.post(API_URL,obj)
        window.location="index.html"



    }
})

















