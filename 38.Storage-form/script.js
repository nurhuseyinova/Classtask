let deleteBtn = document.querySelector("#delete")
let submit= document.querySelector("#submit")

 //1
submit.addEventListener("click",function(){
    localStorage.setItem("firstName","Nurlana");
    localStorage.setItem("lastName","Huseyinova");
    localStorage.setItem("age","19");
 


    console.log(localStorage.getItem("firstName"));
    console.log(localStorage.getItem("lastName"));
    console.log(localStorage.getItem("age"));

})    
//1.1+
// console.log(localStorage.length);
//2+
// for(let i=0; i<localStorage.length; i++){
//     console.log(localStorage.key(i));

// }
//3+
// for(let i=0; i<localStorage.length; i++){
//    let key=localStorage.key(i);
//    console.log(localStorage.getItem(key))

// }
//4+
// console.log(localStorage.key(0));
//4.1+
// let arr=[]
// for(let i=0; i<localStorage.length; i++){
//    arr.push(localStorage.key(i))
   
// }
// console.log(arr);

//5
// let keyEl=localStorage.key(0);
// console.log(localStorage.getItem(keyEl));


//5+
// let arr=[]
// for(let i=0; i<localStorage.length; i++){
//    let key=localStorage.key(i);
//    arr.push(localStorage.getItem(key))
   
// }
// console.log(arr);

// //6
// deleteBtn.addEventListener("click",function(){
// window.localStorage.removeItem('firstName'); 
// })
//6.1
// deleteBtn.addEventListener("click",function(){
//         window.localStorage.clear()

//  })








