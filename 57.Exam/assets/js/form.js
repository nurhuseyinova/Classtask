let API_URL = `http://localhost:8000/data`;
let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let submitBtn = document.querySelector(".submit");
let formNote = document.querySelector(".formNote");
let id = new URLSearchParams(window.location.search).get("id");
let time=new Date()
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    title: input[0].value,
    info: input[1].value,
    price: input[2].value,
    photo: `./assets/scss/image/${input[3].value.split("\\")[2]}`,  
    date:time.toLocaleString()
};

  if (input[0].value && input[1].value && input[2].value && input[3].value) {
    if (id) {
      axios.patch(`${API_URL}/${id}`,obj);
      submitBtn.innerHTML = "Submit";
      formNote.innerHTML = "Add Users";
    } else {
      axios.post(`${API_URL}`,obj);
    }
    window.location="index.html"
  }
});

axios(`${API_URL}/${id}`).then(res=>{
    ( input[0].value=res.data.title),
    ( input[1].value=res.data.info),
    ( input[2].value=res.data.price),
    submitBtn.innerHTML = "Edit";
      formNote.innerHTML = "Edit Users";
})