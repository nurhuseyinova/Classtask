let FAV_URL=`http://localhost:8000/basket`
let card=document.querySelector(".basket");
async function getFavData(){
    card.innerHTML=""
    let res=await axios(FAV_URL)
    let data=await res.data;
   data.forEach(element => {
        card.innerHTML+=`
        <div class="col col-12 col-md-6 col-lg-4 my-5">
        <div class="teacherItem">
            <img src="${element.photo}" alt="">
        
            <div class="itemNote">
                <p class="item1">${element.firstName} ${element.lastName} ${element.age}</p>
            <p class="item2">${element.subject} Teacher</p>
            <p class="item3">
            ${element.info.slice(0,50)}...</p>
              <button class="delete" onclick=deleteBtn("${element.id}")><i class="fa-solid fa-trash"></i></button>
        
            </div>
        </div>

    </div>
        
        `
        
    });

}getFavData()


function deleteBtn(id,btn){
    axios.delete(`${FAV_URL}/${id}`)
    btn.closest("col").remove()
}