let formElement=document.createElement("form")
let labelName=document.createElement("label")
let nameElement=document.createElement("input")
let labelSurname=document.createElement("label")
let surnameElement=document.createElement("input")
let checkboxElement=document.createElement("input")
let radio1Element=document.createElement("input")
let radio2Element=document.createElement("input")
let submitElement=document.createElement("button")
let startElement=document.createElement("button")
let spanElement=document.createElement("p")
let nextPageElement=document.createElement("button")
let brElement=document.createElement("br")
let count=15



document.body.append(startElement);
document.body.append(spanElement);
document.body.append(formElement);
document.body.append(nextPageElement);
formElement.append(labelName);
formElement.append(nameElement);
formElement.append(labelSurname);
formElement.append(surnameElement);
formElement.append(checkboxElement);
formElement.append(radio1Element);
formElement.append(radio2Element);
formElement.append(submitElement);




labelName.innerHTML="<strong>Name</strong>";
labelSurname.innerHTML="<strong>Surname</strong>";
startElement.innerHTML="<strong>Let's start</strong>";
spanElement.innerHTML=`00:${count}`;
submitElement.innerHTML="<strong>Submit</strong>";
nextPageElement.innerHTML="<strong>Next Page</strong>";

formElement.style.display="flex";
formElement.style.alignItems="center";
formElement.style.justifyContent="center";
formElement.style.flexDirection="column";
formElement.style.border="1px dashed black";
formElement.style.height="70vh";
formElement.style.gap="10px";

checkboxElement.style.accentColor="red"
radio1Element.style.accentColor="green"
radio2Element.style.accentColor="green"


spanElement.style.border="1px solid black"
spanElement.style.padding="5px"
spanElement.style.width="40px"







nameElement.setAttribute("required","")
surnameElement.setAttribute("required","")
checkboxElement.setAttribute("required","")
radio1Element.setAttribute("required","")
radio2Element.setAttribute("required","")

checkboxElement.setAttribute("type","checkbox")
radio1Element.setAttribute("type","radio")
radio1Element.setAttribute("name","radio")
radio2Element.setAttribute("type","radio")
radio2Element.setAttribute("name","radio")




submitElement.setAttribute("disabled","")
nextPageElement.setAttribute("disabled","")

let interval;
startElement.addEventListener("click", function(){

    interval=setInterval(()=>{
       count--
        spanElement.innerText=`00:${count}`;
        startElement.setAttribute("disabled","")
        spanElement.style.color="blue";
        spanElement.style.border="1px solid blue"
        
        
        if(count>0 && count<6){
            spanElement.style.color="red"
            spanElement.style.border="1px solid red"

        }
        if(count===0){
            clearInterval(interval);
            spanElement.innerHTML=`You missed):`
            spanElement.style.color="red"
            spanElement.style.border="1px solid red"
            spanElement.style.width="90px"
         
            
        }
    },1000)
    
    
})
startElement.addEventListener("click",function(){
    submitElement.removeAttribute("disabled","")
    nextPageElement.removeAttribute("disabled","")
})

submitElement.addEventListener("click",function () {
    return prompt("","Finished!")
    
    
})










