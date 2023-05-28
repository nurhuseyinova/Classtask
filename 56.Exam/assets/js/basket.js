let BASKET_URL = `http://localhost:8000/basket`;
let basketCard = document.querySelector(".basket");

async function getBasketData() {
    basketCard.innerHTML = "";
    let res = await axios(BASKET_URL);
    let data = await res.data;
  
    data.forEach((element) => {
      basketCard.innerHTML += `
          <div class="col col-12 col-md-6 col-lg-3 my-3">
          <div class="childrenImg">
              <div class="imageItem">
              
  
              </div>
          </div>
          <div class="cardNote">
              <p>${element.firstName}, <span>${element.age} yrs.old</span></p>
          
              <button class="btn btn-danger" onclick=removeBtn("${element.id}")>Remove</button>
                  </div>
      </div>`;
    });
  }
  getBasketData();

  function removeBtn(id, btn) {
    axios.delete(`${BASKET_URL}/${id}`);
    btn.closest("col").remove();
  }
  


