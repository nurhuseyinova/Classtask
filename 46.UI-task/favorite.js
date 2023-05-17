let API_URL = `http://localhost:8000/data`;
let favRow = document.querySelector(".favRow");
let info=JSON.parse(localStorage.getItem("info"))

function favData(){
    favRow.innerHTML=""
    info.forEach(el => { 
favRow.innerHTML+=`
<div class="col col-3 my-5">
<div class="card" style="width: 10rem;">
  <img src="${el.photo}" class="card-img-top" alt="..." style="height: 100px;">
  <div class="card-body">
    <h5 class="card-title">${el.firstName} ${el.lastName} </h5>
    <p class="card-text">Email: ${el.email}</p>
    <p class="card-text">Date: ${el.date}</p>
    <a href="#" class="btn btn-primary" onclick=removeBtn("${el.id}")>Remove fav</a>
  </div>
</div>
</div>

`
});
}favData()

function removeBtn(id){
    info=info.filter(item=>item.id!=id)
    localStorage.setItem(`info`,JSON.stringify(info))
    favData()

}

