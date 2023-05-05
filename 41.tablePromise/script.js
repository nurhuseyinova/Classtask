//  import { API } from "./data.js";
let API=`https://northwind.vercel.app/api/orders`
 let idEl=document.querySelector("#id");
 let companyName=document.querySelector("#companyname");
 let cityEl=document.querySelector("#city");
 let countryEl=document.querySelector("#country");
 let phoneEl=document.querySelector("#phone");
 let btnEl=document.querySelector("#button");
 let tbody=document.querySelector("#tbody");

//  function getSuppliers() {
//     fetch(`${API}`)
//       .then((value) => value.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   }
//   getSuppliers();














 function getSuppliers() {
    tbody.innerHTML = "";
    fetch(`https://northwind.vercel.app/api/orders`)
    .then((value) => value.json())
    .then((data) => data.forEach((element) => {
      let trEl = document.createElement("tr");
      trEl.innerHTML = `
          <td>${element.id}</td>
          <td>${element.shipName}</td>
          <td>${element.shipAddress.city}</td>
          <td>${element.shipAddress.country}</td>
          <td>${element.shipAddress.postalCode}</td>
          <td><button onclick=getDelete(${element.id})>Delete</button></td>
          `;
  
          tbody.append(trEl);
        })
    )
  }
 getSuppliers()

 function getDelete(id){
    fetch(`https://northwind.vercel.app/api/orders/${id}`,{
        method:"DELETE"
    }).then(()=>{
        getSuppliers()
    })
    


 }
 