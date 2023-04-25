const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
const home = document.createElement("li");
const about = document.createElement("li");
const blog = document.createElement("li");
const contact = document.createElement("li");


document.body.append(header);
header.append(nav);
nav.append(ul);
ul.append(home);
ul.append(about);
ul.append(blog);
ul.append(contact);

ul.style.backgroundColor = "black";
ul.style.height = "10vh";
ul.style.display = "flex";
ul.style.justifyContent = "space-around";
ul.style.alignItems = "center";
home.innerHTML = "<strong>Home</strong>";
home.style.color = "white";
home.style.listStyle = "none";
home.style.cursor='pointer';
home.onclick=function () {
    window.location="#sec1";
    
}


about.innerHTML = "<strong>About</strong>";
about.style.color = "white";
about.style.listStyle = "none";
about.style.cursor='pointer';
about.onclick=function () {
    window.location="#sec2";
    
}

blog.innerHTML = "<strong>Blog</strong>";
blog.style.color = "white";
blog.style.listStyle = "none";
blog.style.cursor='pointer';
blog.onclick=function () {
    window.location="#sec3";
    
}

contact.innerHTML = "<strong>Contact</strong>";
contact.style.color = "white";
contact.style.listStyle = "none";
contact.style.cursor='pointer';
contact.onclick=function () {
    window.location="#sec4";
    
}


const section1 = document.createElement("section");
const sec1h1 = document.createElement("h1");
section1.id="sec1";
document.body.append(section1);
section1.append(sec1h1);
sec1h1.innerHTML = "<strong>Home</strong>";
section1.style.border = "1px dashed black";
section1.style.height = "100vh";
section1.style.display = "flex";

section1.style.justifyContent = "center";
section1.style.alignItems = "center";
section1.style.fontSize = "20px";
section1.style.fontWeight = "bolder";


const section2 = document.createElement("section");
const sec2h1 = document.createElement("h1");
section2.id="sec2";
document.body.append(section2);
section2.append(sec2h1);
sec2h1.innerHTML = "<strong>About</strong>";
section2.style.border = "1px dashed black";
section2.style.height = "100vh";
section2.style.display = "flex";

section2.style.justifyContent = "center";
section2.style.alignItems = "center";
section2.style.fontSize = "20px";
section2.style.fontWeight = "bolder";


const section3 = document.createElement("section");
const sec3h1 = document.createElement("h1");
section3.id="sec3";
document.body.append(section3);
section3.append(sec3h1);
sec3h1.innerHTML = "<strong>Blog</strong>";
section3.style.border = "1px dashed black";
section3.style.height = "100vh";
section3.style.display = "flex";

section3.style.justifyContent = "center";
section3.style.alignItems = "center";
section3.style.fontSize = "20px";
section3.style.fontWeight = "bolder";


const section4 = document.createElement("section");
const sec4h1 = document.createElement("h1");
section4.id="sec4";
document.body.append(section4);
section4.append(sec4h1);
sec4h1.innerHTML = "<strong>Contact</strong>";
section4.style.border = "1px dashed black";
section4.style.height = "100vh";
section4.style.display = "flex";

section4.style.justifyContent = "center";
section4.style.alignItems = "center";
section4.style.fontSize = "20px";
section4.style.fontWeight = "bolder";







console.log(window.location)











