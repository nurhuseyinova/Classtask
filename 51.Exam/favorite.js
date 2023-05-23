let API_URL=`http://localhost:8000/favorits`
let favCard=document.querySelector(".fav")
let favGoBack=document.querySelector(".favGoBack")


favGoBack.addEventListener("click",function(){
    window.location="index.html"
})


async function addFavData(){
    favCard.innerHTML=""
    let res=await axios(API_URL)
    let data=await res.data
    data.forEach(element => {
        favCard.innerHTML+=`
        <div class="col col-12 col-md-6 col-lg-4 my-4">
        <img src="${element.photo}" alt="">
        <p>${element.firstName}, <i>${element.age}.yrs old</i></p>
        <button onclick=removeFav(${element.id}) class="btn btn-danger">Remove Fav</button>
        
        </div>

        
        
        `
        
    });
}addFavData()


function removeFav(id,btn){
    axios.delete(`${API_URL}/${id}`)
    btn.closest("col").remove()
}
