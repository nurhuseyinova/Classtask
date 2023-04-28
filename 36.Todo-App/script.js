let ul=document.querySelector(".ul")
let input=document.querySelector(".input")
let btn=document.querySelector(".btn")

btn.addEventListener("click",function(){

    if(input.value){
    let li=document.createElement("li")
    li.innerText=input.value
    ul.append(li)
    }
  
input.value="";edkool
  
})



