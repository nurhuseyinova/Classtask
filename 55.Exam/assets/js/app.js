let API_URL=`http://localhost:8000/data`

let card= document.querySelector(".api")
let search= document.querySelector("#search")
let sortBtn= document.querySelector("#sort")
let showMore= document.querySelector("#showMore")
let bar= document.querySelector(".fa-bars")
let headerBottum= document.querySelector(".headerBottum")

let arr=[]
let sorted=[]
let filtered=[]
let count=3

bar.addEventListener("click",function(){
    headerBottum.classList.toggle("show")
})
async function getData(){
    card.innerHTML=""
    let res=await axios(API_URL)
    let data=await res.data
    arr=data
    sorted=data
    filtered=(filtered.length||search.value)?filtered:data;

    filtered.slice(0,count).forEach(element => {
        card.innerHTML+=`
        <div class="col col-12 col-md-6 col-lg-4 my-3">
        <img src=${element.photo} alt="">
         <h5>${element.title}</h5>
          <p>${element.info.slice(0,20)}...</p>
          <p>${element.price}</p>

         <a href="./detail.html?id=${element.id}">Read More</a>
         <a href="./form.html?id=${element.id}" class="">Edit</a><br><br>
         <button onclick=deleteBtn("${element.id}") class="">Delete</button>
         <button onclick=addBasket("${element.id}") class="">Basket</button>
        </div>
        
        `
        
    });





}getData()

function deleteBtn(id,btn){
    axios.delete(`${API_URL}/${id}`)
    btn.closest("col").remove()
}


search.addEventListener("input",function(e){
    filtered=sorted.filter(el=>{
        return el.title.toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    })
    getData(filtered)
})

let asc=true
sortBtn.addEventListener("click",function(e){
    asc=!asc
    if(!asc){
        sorted=filtered.sort((a,b)=>a.price-b.price)
    sortBtn.innerHTML="Dec"
    }
    else{
        sorted=filtered.sort((a,b)=>b.price-a.price)
        sortBtn.innerHTML="Asc"

    }


      
    getData(filtered)
})


async function addBasket(id){
    let res=await axios(`${API_URL}/${id}`)
    let obj=await res.data
    await axios.post(`http://localhost:8000/basket`,obj)
}


showMore.addEventListener("click",function(){
    count+=3
    if(count>filtered.length){
        showMore.style.displya="none"

    }
    if(filtered.length){
        getData(filtered.slice(0,count))
    }else{
        getData()
    }
})