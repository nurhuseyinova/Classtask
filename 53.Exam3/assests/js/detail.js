let API_URL=`http://localhost:8080/data`

let detailCard=document.querySelector(".detail-card")
let id=new URLSearchParams(window.location.search).get("id")

async function getDetail(){
    let res=await axios(`${API_URL}/${id}`)
    let data=await res.data
        detailCard.innerHTML=`
        <div class="col col-12 col-sm-12 col-md-6 col-lg-3">

                    <div class="card-img">

                        <img src=${data.photo} alt="">
                    </div><br>
                    <div class="card-note">
                        <h4>${data.title}</h4>
                        <p>${data.info}</p>
                        <p>${data.price}</p>
                          </div>
            </div>`
        
  
}
getDetail()