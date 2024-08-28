const tBtn = document.querySelector("#buttonImg");
const nav = document.querySelector(".pcNav");
const links = document.querySelectorAll("li");
tBtn.addEventListener('click', toggleNavbar);

function toggleNavbar() {
    nav.classList.toggle("hidden");
}


links.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.toggle('hidden');
    })
});