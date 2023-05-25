let FAV_URL=`http://localhost:8080/favorites`
let favCard=document.querySelector(".fav")



async function getFavData(){
    favCard.innerHTML=``
    let res=await axios(FAV_URL)
    let data=await res.data
    data.forEach(element => {
        favCard.innerHTML+=`
        <div class="col col-12 col-sm-12 col-md-6 col-lg-3">

                    <div class="card-img">

                        <img src=${element.photo} alt="">
                    </div><br>

                    <div class="card-note">
                        <h4>${element.title}</h4>
                        <p>${element.info}</p>
                        <p>${element.price}</p>
                    
                        <a href="#">VIEW DETAIL</a><br><br>
                        <button onclick=removeBtn("${element.id}") class="btn btn-danger" >Remove</button>
          
                    </div>
            </div>`
        
    });
}
getFavData()

function removeBtn(id,btn){
    axios.delete(`${FAV_URL}/${id}`)
    btn.closest("col").remove()
}