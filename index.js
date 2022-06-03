const navToggle = document.querySelector("fa-bars")
const navMenu = document.querySelector("menu_visible")

navToggle.addEventListener("click",() =>{
    navMenu.classList.toggle("menu_visible")
})