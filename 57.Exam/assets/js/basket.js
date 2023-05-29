let API_URL = `http://localhost:8000/basket`;
let card = document.querySelector(".fav");
async function getFavData() {
  card.innerHTML = "";
  let res = await axios(API_URL);
  let data = await res.data;
  data.forEach((element) => {
    card.innerHTML += `
          <div class="col col-12 col-md-6 col-lg-3 my-3">
              
              <img src="${element.photo}" alt="">
            <br><br>
              <div class="productNote">
                <p class="note1">${element.info}</p>
                <p class="note2">${element.title}</p>
                <p class="note3">$${element.price}</p>
                <a class="text-primary" href=".detail.html?id=${element.id}"><i class="fa-solid fa-file-pen"></i></i></a><br><br>
                <button onclick=removeBtn("${element.id}") class="bg-danger"><i class="fa-solid fa-trash "></i></button><br>
                  
              </div>
            
            </div>
          `;
  });
}
getFavData();

function removeBtn(id, btn) {
  axios.delete(`${API_URL}/${id}`);
  btn.closest("col").remove();
}
