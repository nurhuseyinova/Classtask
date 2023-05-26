let API_URL = `http://localhost:8080/data`;
let card = document.querySelector(".api");
let search = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let bar = document.querySelector(".fa-bars");
let nav = document.querySelector("nav");

bar.addEventListener("click",function(){
    nav.classList.toggle("show")
    
})

let sorted = [];
let filtered = [];

async function getData() {
  card.innerHTML = "";
  let res = await axios(API_URL);
  let data = await res.data;
  sorted = data;
  filtered = filtered.length || search.value ? filtered : data;
  filtered.forEach((element) => {
    card.innerHTML += `
        <div class="col col-12 col-sm-12 col-md-6 col-lg-4 item1 my-4">

            <p class="item1Note1">${element.title}</p>
            <p class="item1Note2">Say hello</p>
            <p class="item1Note3">${element.email}</p>
            <p class="item1Note2">Phone</p>
            <p class="item1Note3">${element.phone}</p>
            <p class="item1Note2">Address</p>
            <p class="item1Note3">${element.adddress}</p>
            <p class="item1Note2">Price</p>
            <p class="item1Note3">${element.price}</p><br>

          <button class="btn btn-danger " onclick=deleteBtn("${element.id}")>Delete</button>
          <button class="btn btn-warning " onclick=addBasket("${element.id}")>Basket</button>
          <a href="./form.html?id=${element.id}" class="btn btn-success" >Edit</a><br><br>
          <a href="./detail.html?id=${element.id}" class="btn btn-dark" >Detail</a>
            
          </div>
        `;
  });
}
getData();

function deleteBtn(id, btn) {
  axios.delete(`${API_URL}/${id}`);
  btn.closest("col").remove();
}

search.addEventListener("input", function (e) {
  filtered = sorted.filter((el) => {
    return el.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  getData(filtered);
});

let asc = true;
sortBtn.addEventListener("click", function () {
  asc = !asc;
  if (!asc) {
    sorted = filtered.sort((a, b) => a.price - b.price);
 sortBtn.innerHTML="Dec"
}else{
    sorted = filtered.sort((a, b) => b.price - a.price);
    sortBtn.innerHTML="Asc"
  }
  getData(sorted);
});


async function addBasket(id){
    let res = await axios(`${API_URL}/${id}`);
    let obj = await res.data;
    await axios.post(`http://localhost:8080/basket`,obj)
}


