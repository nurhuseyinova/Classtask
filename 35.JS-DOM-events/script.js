let firstname=document.querySelector("#name");
let inputName=document.querySelector("#inputname");
let surname=document.querySelector("#surname");
let inputSurname=document.querySelector("#inputsurname");
let email=document.querySelector("#email");
let inputEmail=document.querySelector("#inputemail");
let password=document.querySelector("#pasword");
let inputPassword=document.querySelector("#inputpasword");
let checkbox=document.querySelector("#checkbox");
let checked=document.querySelector("#checked");
let yes=document.querySelector("#yes");
let no=document.querySelector("#no");
let now=document.querySelector("#now");
let btn=document.querySelector("#btn");


inputName.addEventListener("focus",function(){
    this.style.backgroundColor="grey"
    this.style.color="white"

})
inputName.addEventListener("mouseout",function(){
    this.style.backgroundColor="transparent"
    
    
})
inputSurname.addEventListener("mouseover",function(){
    this.style.backgroundColor="green"
    
    
})
inputSurname.addEventListener("mouseout",function(){
    this.style.backgroundColor="transparent"
    
    
})
inputEmail.addEventListener("contextmenu",function(){
    this.style.backgroundColor="red"
    
    
})
inputEmail.addEventListener("mouseout",function(){
    this.style.backgroundColor="transparent"
    
    
})
// inputPassword.addEventListener("click",function(event){
//     event.target.value="3jne3wiiw"
    
    
// })
checked.setAttribute("hidden","")
checkbox.addEventListener("click",function(){
    this.removeAttribute("hidden","");


})
yes.addEventListener("click",function(){
    alert("Thanks!")
    
    
})
no.addEventListener("click",function(){
    alert("Thanks!")
    
    
})
now.addEventListener("click",function(){
    alert("Thanks!")
    
    
})
btn.setAttribute("disabled","")
btn.addEventListener("change",function(){
    if(inputName.value&&inputSurname.value&&checked){
        btn.removeAttribute("disabled","")
    }

    
    
    
})
