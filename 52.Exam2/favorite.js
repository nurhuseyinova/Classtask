let API_URL = `http://localhost:8000/favorites`;
let favCard = document.querySelector(".fav");

async function addData() {
  let res = await axios(API_URL);
  let data = await res.data;
  data.forEach((element) => {
    favCard.innerHTML += `
        <div class="col col-12 col-sm-12 col-md-6 col-lg-3 my3">
        <div class="api-img">
        <img src="${element.photo}" alt="">
    </div>
        <h3>${element.title}</h3>
        <p>${element.info}</p>
        <p>${element.price}</p><br>
        <a href="#"> More Details</a><br>
        <button class="btn btn-danger my-3" onclick=removeBtn(${element.id})>Remove</button>
       
    </div>
        `;
  });
}
addData();

function removeBtn(id, btn) {
    axios.delete(`${API_URL}/${id}`);
    btn.closest("col").remove();
  }