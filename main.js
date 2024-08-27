const tBtn = document.querySelector("#buttonImg");
const nav = document.querySelector(".pcNav");

tBtn.addEventListener('click',toggleNavbar);

function toggleNavbar(){
    nav.classList.toggle("hidden");
}