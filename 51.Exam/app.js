let API_URL=`http://localhost:8000/data`
let card=document.querySelector(".api")
let addUserBtn=document.querySelector(".addUser")
let search=document.querySelector("#search")
let sort=document.querySelector(".sort")
let filtered=[]
let sorted=[]




addUserBtn.addEventListener("click",function(){
    window.location="form.html"
})


async function getData(){
    let res=await axios(API_URL)
    let data=await res.data

    card.innerHTML=""
    sorted=data
    filtered=(filtered.length||search.value)? filtered:data;

    filtered.forEach(element => {
        card.innerHTML+=`
        <div class="col col-12 col-md-6 col-lg-4 my-4">
        <img src="${element.photo}" alt="">
        <p>${element.firstName}, <i>${element.age}.yrs old</i></p>
        <button onclick=deleteBtn(${element.id}) class="btn btn-danger">Delete</button>
        <button onclick=favBtn(${element.id}) class="btn btn-warning">Add Fav</button>
        <a href="./form.html?id=${element.id}" class="btn btn-success">Edit</a>
    
        </div>
        
        `

        
    });
}
getData()


function deleteBtn(id,btn){
    axios.delete(`${API_URL}/${id}`)
    btn.closest("col").remove()
}


async function favBtn(id){
    let res=await axios(`${API_URL}/${id}`)
    let obj=await res.data
    await axios.post(`http://localhost:8000/favorits`,obj)

    window.location="favorite.html"
}

search.addEventListener("input",async function(e){
    let res=await axios(API_URL)
    let data=await res.data
    filtered=data.filter(el=>{
       return el.firstName.toLowerCase()
       .includes(e.target.value.toLocaleLowerCase())
    })
    getData(filtered)
    console.log(filtered);

})
let asc=true
sort.addEventListener("click",async function(e){
    asc=!asc
    let res=await axios(API_URL)
    let data=await res.data
    if(!asc){
        sorted=data.sort((a,b)=>a.age-b.age)
        sort.innerHTML="Dec"
        filtered=sorted
    }else{
        sorted=data.sort((a,b)=>b.age-a.age)
        sort.innerHTML="Asc"
        filtered=sorted
    }
    
    getData(sorted)
    console.log(sorted);

})

