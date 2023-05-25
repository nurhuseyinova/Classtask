let API_URL=`http://localhost:8080/data`
let bar=document.querySelector(".fa-bars")
let nav=document.querySelector("nav")
let card=document.querySelector(".api")
let search=document.querySelector("#search")
let sortBtn=document.querySelector("#sort")

let sorted=[]
let filtered=[]

bar.addEventListener("click",function(){
    nav.classList.toggle("show")
    // console.log("bar")
})


async function getData(){
    card.innerHTML=``
    let res=await axios(API_URL)
    let data=await res.data
    sorted=data
    filtered=(filtered.length||search.value)?filtered:data;

    filtered.forEach(element => {
        card.innerHTML+=`
        <div class="col col-12 col-sm-12 col-md-6 col-lg-3 my-4">

                    <div class="card-img">

                        <img src=${element.photo} alt="">
                    </div><br>

                    <div class="card-note">
                        <h4>${element.title}</h4>
                        <p>${element.info}</p>
                        <p>${element.price}</p>
                    
                        <a href="./deatail.html?id=${element.id}">VIEW DETAIL</a><br><br>
                        <button onclick=deleteBtn("${element.id}") class="btn btn-danger" >Delete</button>
                        <button onclick=addFavData("${element.id}") class="btn btn-warning" >Basket</button><br><br>
                        <a href="./deatail.html?id=${element.id}">Detail</a>
                        <a href="./form.html?id=${element.id}">Edit Info</a>
          
                    </div>
            </div>`
        
    });
}
getData()

function deleteBtn(id,btn){
    axios.delete(`${API_URL}/${id}`)
    btn.closest("col").remove()
}


search.addEventListener("input", function (e) {
    filtered=sorted.filter(el=>{
        return el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    })
    getData(filtered)
})

let asc=true
sortBtn.addEventListener("click", function () {
    asc=!asc
    if(!asc){
        sorted=sorted.sort((a,b)=>a.price-b.price)
        sortBtn.innerHTML="Dec"
        filtered=sorted
    }
    else{
        sorted=sorted.sort((a,b)=>b.price-a.price)
        sortBtn.innerHTML="Asc"
        filtered=sorted

    }
    getData(filtered)
    
})


async function addFavData(id){

    let res=await axios(`${API_URL}/${id}`)
    let obj=await res.data
    await axios.post(`http://localhost:8000/favorites`,obj)
}