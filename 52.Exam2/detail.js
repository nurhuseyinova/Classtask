let id=new URLSearchParams(window.location.search).get("id")
let API_URL = `http://localhost:8000/data`;
let detailCard = document.querySelector(".detail");

async function detailData() {
  let res = await axios(`${API_URL}/${id}`);
  let data = await res.data;
    detailCard.innerHTML = `
        <div class="col col-12 col-sm-12 col-md-6 col-lg-3 my3">
        <div class="api-img">
        <img src="${data.photo}" alt="">
    </div>
        <h3>${data.title}</h3>
        <p>${data.info}</p>
        <p>${data.price}</p>
        <a href="./index.html" class="btn btn-primary my-3 edit">Go Back</a>
    </div>
        `;
 
}
detailData();










