let API_URL = `https://restcountries.com/v3.1/name`;
let names = new URLSearchParams(window.location.search).get("name");
let detailEL = document.querySelector(".detail");
console.log(names);

async function detailData() {
  let res = await axios(`${API_URL}/${names}`);
  let data = await res.data;
  console.log(data);
  detailEL.innerHTML = `
        <div class="col col-12 col-md-6 col-sm-12 image">
        <img src="${data[0].flags.svg}" alt="">
    </div>
    <div class="col col-12 col-md-6 col-sm-12 information">
      <div class="info">
        <div class="information1">
            <h1>${data[0].name.common}</h1>
            <p>Population:${data[0].population} </p>
            <p>Region: ${data[0].region}</p>
            <p>Sub Region:${data[0].subregion} </p>
           <p>Capital: ${data[0].capital}</p>
           </div>
                   <div class="information2">
                   <p>Top Level Domain: ${data[0].tld[0]}</p>
                   <p>Domain: ${data[0].flag}</p>
                   </div>
                   </div>
                   <div class="information2 my-4">
                   
                   <p>Border countries
                   <button class="btn btn-info">${data[0].borders[0]}</button> 
                   <button class="btn btn-info">${data[0].borders[1]}</button> 
                   <button class="btn btn-info">${data[0].borders[2]}</button> 
                   </p>
                   </div>
                   </div>
                   `;
                  }
                  detailData();
               