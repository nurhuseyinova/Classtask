let API_URL = `http://localhost:8000/data`;
let detailCard = document.querySelector(".detail");
let id=new URLSearchParams(window.location.search).get("id")

axios(`${API_URL}/${id}`).then(res=>{
    detailCard.innerHTML = `
          <div class="col col-12 col-md-6 col-lg-3 my-3">
          <div class="childrenImg">
              <div class="imageItem">
              
  
              </div>
          </div>
          <div class="cardNote">
              <p>Name: ${res.data.firstName} </p>
              <span>Age: ${res.data.age} yrs.old</span>
          
                     </div>
      </div>`;

})