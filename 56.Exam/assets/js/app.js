let API_URL = `http://localhost:8000/data`;
let card = document.querySelector(".api");
let sortBtn = document.querySelector("#sort");
let showMore = document.querySelector("#more");
let search = document.querySelector("#search");
let bar = document.querySelector(".fa-bars");
let nav = document.querySelector(".menuClick");
let arr = [];
let filtered = [];
let sorted = [];
let count = 3;
bar.addEventListener("click",function(){
    nav.classList.toggle("show")
})

async function getData() {
  card.innerHTML = "";
  let res = await axios(API_URL);
  let data = await res.data;
  arr = data;
  sorted = data;
  filtered = filtered.length || search.value ? filtered : data;
  filtered.slice(0, count).forEach((element) => {
    card.innerHTML += `
        <div class="col col-12 col-md-6 col-lg-3 my-3">
        <div class="childrenImg">
            <div class="imageItem">
            <img src="${element.photo}" alt="">
            </div>
        </div>
        <div class="cardNote">
            <p>${element.firstName}, <span>${element.age} yrs.old</span></p>
        
            <button class="btn btn-danger" onclick=deleteBtn("${element.id}")>Delete</button>
            <button class="btn btn-dark" onclick=addBasket("${element.id}")>Add Basket</button><br><br>
           <a class="btn btn-warning" href="./detail.html?id=${element.id}">Read More</a>
           <a class="btn btn-success" href="./form.html?id=${element.id}">  Edit </a>          
            </div>
    </div>`;
  });
}
getData();

function deleteBtn(id, btn) {
  axios.delete(`${API_URL}/${id}`);
  btn.closest("col").remove();
}

async function addBasket(id) {
  let res = await axios(`${API_URL}/${id}`);
  let obj = await res.data;
  await axios.post(`http://localhost:8000/basket`, obj);
  window.location = "basket.html";
}

search.addEventListener("input", function (e) {
  filtered = arr.filter((el) => {
    return el.firstName
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  getData(filtered);
});

// sortBtn.innerHTML="Sort"
sortBtn.addEventListener("click", function (e) {
  if (sortBtn.innerHTML === "Sort") {
    sorted = filtered.sort((a, b) => a.age - b.age);
    sortBtn.innerHTML = "Ascending";
    
  } else if (sortBtn.innerHTML === "Ascending") {
    sorted = filtered.sort((a, b) => b.age - a.age);
    sortBtn.innerHTML = "Descending";
  } else {
    sorted = filtered;
    sortBtn.innerHTML = "Sort";
  }
  getData(sorted);
});



showMore.addEventListener("click", function () {
  count += 3;
  if (count > filtered.length) {
    showMore.style.display = "none";
  } else if (filtered.length) {
    getData(filtered.slice(0, count));
  } else {
    getData(filtered);
  }
});
