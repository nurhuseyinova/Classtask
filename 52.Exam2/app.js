let API_URL = `http://localhost:8000/data`;
let card = document.querySelector(".api");
let search = document.querySelector("#search");
let sort = document.querySelector("#sort");
let bar=document.querySelector(".fa-bars")
let nav=document.querySelector("nav")
let sorted = [];
let filtered = [];

bar.addEventListener("click",function(){
nav.classList.toggle("show")
})

async function getData() {
  card.innerHTML = "";
  let res = await axios(API_URL);
  let data = await res.data;
  sorted = data;
  filtered = filtered.length || search.value ? filtered : data;

  filtered.forEach((element) => {
    card.innerHTML += `
        <div class="col col-12 col-sm-12 col-md-6 col-lg-3 my3">
        <div class="api-img">
        <img src="${element.photo}" alt="">
    </div>
        <h3>${element.title}</h3>
        <p>${element.info}</p>
        <p>${element.price}</p>
        <a href="./deatail.html?id=${element.id}"> More Details</a><br>
        <button class="btn btn-danger my-3" onclick=deleteBtn(${element.id})>Delete</button>
        <a href="./form.html?id=${element.id}" class="btn btn-success my-3 edit">Edit</a>
        <button class="btn btn-warning my-3" onclick=addFavData(${element.id})>Add Fav</button>
   
    </div>
        `;
  });
}
getData();

function deleteBtn(id, btn) {
  axios.delete(`${API_URL}/${id}`);
  btn.closest("col").remove();
}

search.addEventListener("input", async function (e) {
  let res = await axios(API_URL);
  let data = await res.data;
  filtered = data.filter((el) => {
    return el.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  getData(filtered)
  console.log(filtered);
});

let asc=true
sort.addEventListener("click", async function (e) {
    asc=!asc
  let res = await axios(API_URL);
  let data = await res.data;
  if(!asc){
    sorted=data.sort((a,b)=>a.price-b.price)
    sort.innerHTML="Dec"
    filtered=sorted;
  }else{
    sorted=data.sort((a,b)=>b.price-a.price)
    sort.innerHTML="Asc"
    filtered=sorted;
  }
  
  getData(sorted)
  console.log(sorted);
});

async function addFavData(id){
      let res = await axios(`${API_URL}/${id}`);
  let obj = await res.data;
  await axios.post(`http://localhost:8000/favorites`,obj)

}




