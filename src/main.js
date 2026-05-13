import './style.css'


const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.querySelector('#site-header');

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle('hidden');
});

window.addEventListener("scroll", ()=> {
  if (window.scrollY > 50){
    header.classList.remove("bg-transparent");
    header.classList.add("bg-black/80", "shadow-lg");
  } else {
    header.classList.remove ("bg-black/80","shadow-lg");
    header.classList.add ("bg-transparent")
  }
});