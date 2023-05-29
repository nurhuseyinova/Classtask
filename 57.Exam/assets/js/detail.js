let API_URL = `http://localhost:8000/data`;
let card = document.querySelector(".detail");
let id=new URLSearchParams(window.location.search).get("id")

axios(`${API_URL}/${id}`).then(res=>{
    card.innerHTML = `
        <div class="col col-12 col-md-6 col-lg-3 my-3">
            
            <img src="${res.data.photo}" alt="">
          <br><br>
            <div class="productNote">
              <p class="note1">Info: ${res.data.info}</p>
              <p class="note2">Title:) ${res.data.title}</p>
              <p class="note3">Price: $${res.data.price}</p>
              <p class="note3">Date: $${res.data.date}</p>
            </div>
          
          </div>
        `;

})