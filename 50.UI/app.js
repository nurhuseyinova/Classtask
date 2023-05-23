let API_URL=`http://localhost:8080/data`
let card=document.querySelector(".api");
let search=document.querySelector("#search");
let sortBtn=document.querySelector("#sorted");
let sorted=[]
let filtered=[]

async function getData(){
    let res=await axios(API_URL)
    let data =await res.data
    card.innerHTML=""
    sorted=data
    filtered=(filtered.length || search.value) ? filtered : data
    filtered.forEach(element => {
        card.innerHTML+=`
        <div class="col col-12 col-md-6 col-lg-4 my-2">
                <img src="${element.photo}" alt="">
                <p>${element.title}</p>
                <p>${element.information}</p>
                <p>${element.price}</p>
                <button onclick=addFavData("${element.id}")  class="btn btn-info" >Add Fav</button>
                <button class="btn btn-danger" onclick=deleteBtn("${element.id}")>Delete</button>
            </div>
        `
        
    });
}
getData()

function deleteBtn(id,btn){
    axios.delete(`${API_URL}/${id}`)
    btn.closest("col").remove()

}
search.addEventListener("input",async function(e){
   

    let res=await axios(API_URL)
    let data= await res.data
    filtered=data.filter(el=>{
      return  el.title
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
    })

    console.log(filtered);
    getData(filtered)

})

let asc=true
sortBtn.addEventListener("click",function(){
    asc=!asc
    axios(`${API_URL}`).then((res)=>{
       
        if(!asc){
            sorted=res.data.sort((a,b)=>a.price-b.price);
            filtered=sorted
        }else{
            sorted=res.data.sort((a,b)=>b.price-a.price)
            filtered=sorted
        }
        getData(sorted)
        console.log(sorted);
    })

})

async function addFavData(id){
    let res=await axios(`${API_URL}/${id}`)
    let obj=await res.data
    await axios.post(`http://localhost:8080/favorits`,obj)
    
}
