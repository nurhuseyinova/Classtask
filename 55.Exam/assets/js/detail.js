let API_URL=`http://localhost:8000/data`
let detailCard=document.querySelector(".detail")
let id=new URLSearchParams(window.location.search).get("id")
axios(`${API_URL}/${id}`).then(res=>{
    detailCard.innerHTML=`
    <div class="col col-12 col-md-6 col-lg-4 my-3">
        <img src=${res.data.photo} alt="">
         <h5>Title:) ${res.data.title}</h5>
          <p>Information: ${res.data.info}</p>
          <p>Price: ${res.data.price}</p>
          <a href="./index.html" >Go Back</a>
      
  </div>
    `

})

