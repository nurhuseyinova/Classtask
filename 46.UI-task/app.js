let bar = document.querySelector(".fa-bars");
let head = document.querySelector(".head");
let clickNav = document.querySelector(".headNav");
bar.addEventListener("click", function () {
  clickNav.classList.toggle("show");

  bar.classList = "fa-solid fa-bars"
    ? (bar.classList = "fa-solid fa-xmark")
    : (bar.classList = "fa-solid fa-bars");
});

let API_URL=`http://localhost:8000/data`
let tbody=document.querySelector("#tbody")
let mainCard=document.querySelector("#mainCard")

 async function getData(){
  let res=await axios(API_URL)
  let data=await res.data

  tbody.innerHTML=""
  data.forEach(element => {
    tbody.innerHTML+=`
    <tr>
    <td>${element.id}</td>
    <td><img src="${element.photo}" alt=""></td>
    <td>${element.firstName}</td>
    <td>${element.lastName}</td>
    <td>${element.email}</td>
    <td>${element.date}</td>
    <td>
    <a  class="btn btn-success"  href="./form.html?id=${element.id}">Edit</a>
    <a href="#" class="btn btn-danger" onclick=deleteBtn(${element.id},this)>Delete</a>
    <a href="#" class="btn btn-primary addfav" onclick=addBtn("${element.id}") >Add Fav</a>
    </td>
    
    </tr>`
    mainCard.innerHTML+=`
    <span class="commoncard">
    <div class="card d-flex">
      <div class="iddate">
        <div class="id">Id: ${element.id}</div>
        <div class="date">Date: ${element.date}</div>
      </div>
      <div class="idimg">
        <div class="imgnote">
          <img src="${element.photo}" alt="" />
          <div class="name">
            <h3>${element.firstName} ${element.lastName} Anton</h3>
            <p>${element.email}</p>
          </div>
        </div>
        <div class="btndiv">
          <a class="btn btn-success" href="./form.html?id=${element.id}" >Edit</a>
          <button class="btn btn-danger"  onclick=deleteBtn(${element.id},this)>Delete</button>
          <a href="#" class="btn btn-primary addfav" onclick=addBtn("${element.id}")
          
             >Add Fav</a>
        </div>
      </div>
    </div>
  </span>`

  });

}getData()

 function deleteBtn(id){
  axios.delete(`${API_URL}/${id}`)
  btn.closest("tr").remove()
  btn.closest("span").remove()
  getData(id)


}
let choosied
let info=JSON.parse(localStorage.getItem(`info`))||[]
async function addBtn(id){
  let res= await axios(`${API_URL}/${id}`)
  let data=res.data
  choosied=info.find(item=>item.id===data.id)
  if(!choosied){
    info.push(data)
    localStorage.setItem(`info`,JSON.stringify(info))
  }else{
    alert("This card already alive!")
  }
  window.location="favorite.html"
}



