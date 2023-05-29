let API_URL = `http://localhost:8000/data`;
let card = document.querySelector(".api");
let search = document.querySelector("#search");
let sortBtn = document.querySelector("#sort");
let showMore = document.querySelector("#more");
let bar = document.querySelector(".fa-bars");
let nav = document.querySelector(".openMenu");
let count = 4;
let arr = [];
let sorted = [];
let filtered = [];

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
  filtered.slice(0,count).forEach((element) => {
    card.innerHTML += `
        <div class="col col-12 col-md-6 col-lg-3 my-3">
            
        <div class="product">
        <img class="img-fluid" src="${element.photo}" alt="">
       
        <ul>
          <li>
            <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-regular fa-heart"></i></a>
          </li>
        </ul>
      </div> 
          <br><br>
            <div class="productNote">
              <p class="note1">${element.info.slice(0,20)}...</p>
              <p class="note2">${element.title}</p>
              <p class="note3">$${element.price}</p>
              <a class="text-success" href="./form.html?id=${element.id}"><i class="fa-solid fa-pen"></i></a>
              <a class="text-primary" href="./detail.html?id=${element.id}"><i class="fa-solid fa-file-pen"></i></i></a><br><br>
              <button onclick=deleteBtn("${element.id}") class="bg-danger"><i class="fa-solid fa-trash "></i></button><br>
              <button onclick=addBasket("${element.id}") ><i class="fa-solid fa-basket-shopping "></i></button><br>
             
            </div>
          
          </div>
        `;
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
    await axios.post(`http://localhost:8000/basket`,obj)
}

search.addEventListener("input", function (e) {
  filtered = sorted.filter((el) => {
    return el.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  getData(filtered);
});

// let asc = true;
// sortBtn.addEventListener("click", function () {
//   asc = !asc;
//   if (!asc) {
//     sorted = filtered.sort((a, b) => a.price - b.price);
//     sortBtn.innerHTML = "Ascending";
//   } else {
//     sorted = filtered.sort((a, b) => b.price - a.price);
//     sortBtn.innerHTML = "Descending";
//   }
//   getData(sorted);
//   console.log(sorted);
// });


sortBtn.addEventListener("click", function () {
  
  if (sortBtn.innerHTML === "Sort") {
    sorted = filtered.sort((a, b) => a.price - b.price);
    sortBtn.innerHTML = "Ascending";
  } else if (sortBtn.innerHTML === "Ascending") {
    sorted = filtered.sort((a, b) => b.price - a.price);
    sortBtn.innerHTML = "Descending";
      }
  else {
    sorted=filtered
    sortBtn.innerHTML = "Sort";

  }
  getData(sorted.slice(0,count));
  console.log(sorted);
});

showMore.addEventListener("click", function () {
  count += 1;
  if (count > filtered.length) {
    showMore.style.display = "none";
  } else if (filtered.length) {
    getData(filtered.slice(0, count));
  } else {
    getData(filtered);
  }
});
