let API_URL = `https://restcountries.com/v2/all`;
let row = document.querySelector(".countries");
let search = document.querySelector("#search");
let select = document.querySelector("#select");
let loading = document.querySelector(".loading");
let name = new URLSearchParams(window.location.search).get("name");
let option;

loading.style.display = "none";
window.onload = function () {
  row.innerHTML = "";
  loading.style.display = "flex";
  async function getdata() {
    let res = await axios(API_URL);
    let data = await res.data;
    getAlldata(data);
    loading.style.display = "none";
  }
  getdata();
};

function getAlldata(arr) {
  row.innerHTML = "";
  arr.forEach((element) => {
    row.innerHTML += `
        <div class="col-12 col-md-6 col-sm-12 col-lg-3 my-2">
                    <div class="card" style="width: 15rem;">
                        <a href="./detail.html?name=${element.name}"><img src="${element.flags.svg}" class="card-img-top" alt="..." style="height: 160px;"></a>
                        <div class="card-body">
                          <h5 class="card-title">${element.name}</h5>
                          <p class="card-text">Population: ${element.population}</p>
                          <p class="card-text">Region: ${element.region}</p>
                          <p class="card-text">Capital: ${element.capital}</p>
                          
                        </div>
                      </div>
                </div>

        `;
  });
}

search.addEventListener("input", function (e) {
  console.log(e.target.value);
  axios(`${API_URL}`).then((res) => {
    let filtered = res.data.filter((el) => {
      return el.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });
    getAlldata(filtered);
    console.log(filtered);
  });
});
  select.addEventListener("change", function (e) {
    axios(`${API_URL}/${name}`).then((res) => {
      let selected = res.data.filter((el) => {
        return el.name == e.target.value;
      });
      getAlldata(selected);
      
    });
  });

