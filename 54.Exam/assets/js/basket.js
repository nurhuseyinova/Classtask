let FAV_URL = `http://localhost:8080/basket`;
let basketCard = document.querySelector(".fav");

async function getBasketData() {
  let res = await axios(FAV_URL);
  let data = await res.data;

  data.forEach((element) => {
    basketCard.innerHTML += `
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

          <button class="btn btn-danger " onclick=removeBtn("${element.id}")>Remove</button>
            
          </div>
        `;
  });
}
getBasketData();

function removeBtn(id, btn) {
  axios.delete(`${FAV_URL}/${id}`);
  btn.closest("col").remove();
}
