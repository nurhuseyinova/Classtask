let API_URL = `https://restcountries.com/v3.1/name`;
let names = new URLSearchParams(window.location.search).get("name");
let detailEL = document.querySelector(".detail");

async function detailData() {
  let res = await axios(`${API_URL}/${names}`);
  let data = await res.data;
  detailEL.innerHTML = `
        <div class="col col-12 col-md-6 col-sm-12 image">
        <img src="${data.flags.svg}" alt="">
    </div>
    <div class="col col-12 col-md-6 col-sm-12 information">
      <div class="info">
        <div class="information1">
            <h1>${data.name}</h1>
            <p>Nativa Name: ${data.nativeName} </p>
            <p>Population: ${data.population}</p>
            <p>Region: ${data.region}</p>
            <p>Sub Region: ${data.subregion}</p>
            <p>Capital: ${data.capital}</p>
           </div>
           <div class="information2">
            <p>Top Level Domain: ${data.topLevelDomain}</p>
            <p>Currencies: ${data.currencies.name}</p>
            <p>Languages: ${data.languages.languages[0].name},${element.languages.languages[1].name},${element.languages.languages[2].name}</p>
           </div>
      </div>
       <div class="information2 my-4">
        <p>Border countries
            <button>${data.borders.borders[0]}</button> 
            <button>${data.borders.borders[1]}</button> 
            
        </p>
        
        
       </div>


    </div>
        
        
        `
}
detailData();
