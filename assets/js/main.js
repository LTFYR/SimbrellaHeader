const bars = document.querySelector(".bars");
const navBar = document.querySelector(".nav-bar");

bars.addEventListener("click", () => {
    bars.classList.toggle("show")
})





window.addEventListener("scroll",function(){
    var head = document.querySelector("header");
    head.classList.toggle("sticky",window.scrollY>0);
})