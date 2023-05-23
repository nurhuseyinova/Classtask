let API_URL=`http://localhost:8080/favorits`
let favCard=document.querySelector(".favorite")

async function favData(){
    let res=await axios(API_URL)
    let data=await res.data
    data.forEach(element => {
        favCard.innerHTML+=`
        <div class="col col-12 col-md-6 col-lg-4 my-2">
                    <img src="${element.photo}" alt="">
                    <p>${element.title}</p>
                   <p>${element.information}</p>
                   <p>Price: ${element.price}</p>
                   <button class="btn btn-danger" onclick=removeBtn(${element.id})>Remove</button>
                </div> 
        
        `
        
    });

}favData()

function removeBtn(id,btn){
    axios.delete(`${API_URL}/${id}`)
    btn.closest("col").remove()
    
}


