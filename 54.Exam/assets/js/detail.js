let API_URL = `http://localhost:8080/data`;
let detailCard = document.querySelector(".detail");
let id=new URLSearchParams(window.location.search).get("id")
axios(`${API_URL}/${id}`).then(res=>{
    detailCard.innerHTML += `
    <div class="col col-12 col-sm-12 col-md-6 col-lg-3  my-4"> </div>

   
    <div class="col col-12 col-sm-12 col-md-6 col-lg-6 item1 my-4">

        <p class="item1Note1">${res.data.title}</p>
        <p class="item1Note3">Say hello: ${res.data.email}</p>
        <p class="item1Note3">Phone: ${res.data.phone}</p>
        <p class="item1Note3">Address: ${res.data.adddress}</p>
        <p class="item1Note3">Price: ${res.data.price}</p><br>

        
      </div>
      <div class="col col-12 col-sm-12 col-md-6 col-lg-3  my-4"> </div>

   
    `;
});

