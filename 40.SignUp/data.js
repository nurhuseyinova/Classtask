let card=document.querySelector(".card")
let userName = document.querySelector("#text");
let emailEl = document.querySelector("#email");
let passwordEl = document.querySelector("#password");
let check = document.querySelector("#checkbox");
let submitBtn = document.querySelector(".btn-primary");
let form = document.querySelector("form");



let data = JSON.parse(localStorage.getItem("data")) || [];

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let obj={
          name:userName.value,
          email:emailEl.value,
          password:passwordEl.value,
          id: Date.now(),
         
        }
      
        data.push(obj);
        localStorage.setItem("data",JSON.stringify(obj))
      
      
      
      });

function listData(){
data.forEach(item=>{
    card.innerHTML=""
    card.innerHTML+=`
    <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.email}</p>
              <button class="btn btn-danger" id=${item.id} onclick=deleteFun(${item.id})>Delete</button>
            </div>`
            card.innerHTML=''

            let deleteBtn=document.querySelectorAll("btn-delete")
            deleteBtn.forEach(el=>{
                el.addEventListener("click",function(){
                    data = JSON.parse(localStorage.getItem("data"))

                    let update=data.filter((elem)=>elem.id!=el.getAttribute("id"));
                    localStorage.setItem("product",JSON.stringify(update));
                    // this.closest(".card-body").remove();
                    this.parentElement.parentElement.parentElement.remove();

                })
            })


})
}
function deleteFun(id) {
    console.log(id);
    fav= fav.filter((obj) => obj.id != id);
    localStorage.setItem("data", JSON.stringify(fav));
    listData();
  }





