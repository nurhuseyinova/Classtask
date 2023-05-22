let API_URL=`http://localhost:8000/data`
let input=document.querySelectorAll(".form-control")
let form=document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault()
    let obj={
        title:input[0].value,
        information:input[1].value,
        photo:`./assets/image/${input[3].value.split("\\")[2]}`,
         price:input[2].value

    }
    if(input[0].value&&input[1].value&&input[2].value&&input[3].value){
    axios.post(API_URL,obj)}
    window.location="index.html"
})