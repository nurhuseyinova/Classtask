let API_URL = `http://universities.hipolabs.com/search?country=azerbaijan&name=`;
let tbody = document.querySelector("#tbody");
let search = document.querySelector(".form-control");
let loading = document.querySelector(".loading");
async function data() {
  tbody.innerHTML = "";
  let res = await axios(API_URL);
  let data = await res.data;
  data.forEach((element) => {
    tbody.innerHTML += `
    <tr>
    <td>${element.name}</td>
    <td>${element.country}</td>
    <td>${element.domains[0]}</td>
    <td><a href="${element.web_pages[0]}">${element.web_pages[0]}</a></td>

    </tr>
    
    `;
  });
}
data();

window.onload = function () {
  tbody.innerHTML = "";
  loading.style.display = "flex";
  axios(`http://universities.hipolabs.com/search?country=Azerbaijan`);
};

search.addEventListener("input", function (e) {
  tbody.innerHTML = "";
  loading.style.display = "flex";
  axios(
    `http://universities.hipolabs.com/search?country=azerbaijan&name=${e.target.value}`
  )
    .then(() => (loading.style.display = "none"))
    .then((res) => data(res.data));
});
