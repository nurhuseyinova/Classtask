let API_URL = `http://localhost:8000/data`;
let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let submitBtn = document.querySelectorAll(".submit");
let id = new URLSearchParams(window.location.search).get("id");
let editStatus = true;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    firstName: input[0].value,
    age: input[1].value,
    photo: `./assets/image/${input[2].value.split("\\")[2]}`,
  };
  if (input[0].value && input[1].value && input[2].value) {
    if (!editStatus) {
      axios.post(`${API_URL}`, obj);
      
    }else{
        axios.patch(`${API_URL}/${id}`, obj);
        editStatus= false
        submitBtn.innerHtml="Submit"

    

    }
    window.location = "form.html";
  }
});

// async function editData() {
//   let res = await axios(`${API_URL}.${id}`);
//   let data = await res.data;
//   input[0].value = data.firstName;
//   input[1].value = data.age;
//   input[2].value = data.photo;
//   editStatus = true;
//   submitBtn.innerHtml="Edit"
// }
// editData();

axios(`${API_URL}.${id}`).then(res=>{
    input[0].value =res.data.firstName;
  input[1].value = res.data.age;
  input[2].value = res.data.photo;
  editStatus = true;
  submitBtn.innerHtml="Edit"

})
