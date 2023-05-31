let id=new URLSearchParams(window.location.search).get("id")
let API_URL=`http://localhost:8000/data`
let detailCard=document.querySelector(".detail");


axios(`${API_URL}/${id}`).then(res=>{
    detailCard.innerHTML=`
        <div class="col col-12 col-md-6 col-lg-4 my-5">
        <div class="teacherItem">
            <img src="${res.data.photo}" alt="">
        
            <div class="itemNote">
                <p class="item1">Full Name:) ${res.data.firstName} </p>
                <p>Age: ${res.data.age}</p>
            <p class="item2">${res.data.subject} Teacher</p>
            <p class="item3">
            ${res.data.info}</p>
            
            </div>
        
        </div>

    </div>
   
        
        `
        
})




