let API_URL = `http://localhost:8080/blogs`;
let form = document.querySelector("#form");
let blogTitle = document.querySelector("#title");
let blogBody = document.querySelector("#textarea");
let blogAuthor = document.querySelector("#author");
let addBtn = document.querySelector("#add");
let editStatus=false

let authorChange;
blogAuthor.addEventListener("change", function (e) {
  authorChange = e.target.value
});
let id=new URLSearchParams(window.location.search).get("id");
async function editData(){
    editStatus=true
let res=await axios(`${API_URL}${id}`)
let data=await res.data
blogTitle.value=data.title;
blogBody.value=data.body;
blogAuthor.value=data.author;
}
form.addEventListener("submit",function(e){
    e.preventDefault();
    let editObj={
        title:blogTitle.value,
        body:blogBody.value,
        author:blogAuthor.value
    }
    
    axios.patch(`${API_URL}/${id}`,editObj)
    window.location = "index.html";
    editStatus=false
})
