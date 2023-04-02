// const hamburger = document.querySelector(".hamburger");
// const nav = document.querySelector(".nav__menu");
// const header = document.querySelector(".nav__brending");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     nav.classList.toggle("active");
//     header.classList.toggle("active");
// })
// document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     nav.classList.remove("active");
// }))
function enableBurger() {
    document.body.dataset.hamburger = "enabled";
}
function disableBurger() {
    document.body.dataset.hamburger = "disabled";
}