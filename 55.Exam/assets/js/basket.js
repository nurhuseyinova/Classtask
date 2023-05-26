let FAV_URL=`http://localhost:8000/basket`

let favCard= document.querySelector(".fav")
let search= document.querySelector("#search")
let sortBtn= document.querySelector("#sort")


async function getFavData(){
    let res=await axios(FAV_URL)
    let data=await res.data
    data.forEach(element => {
        favCard.innerHTML+=`
        <div class="col col-12 col-md-6 col-lg-4 my-3">
        <img src=${element.photo} alt="">
         <h5>${element.title}</h5>
          <p>${element.info}</p>
          <p>${element.price}</p>

         <a href="./detail.html?id=${element.id}">Read More</a><br><br>
         <button onclick=removeFav("${element.id}") class="">Remove</button>
         </div>
        
        `
        
    });





}getFavData()

function removeFav(id,btn){
    axios.delete(`${FAV_URL}/${id}`)
    btn.closest("col").remove()
}
