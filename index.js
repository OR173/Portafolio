let btn_toggle = document.querySelector(".fa-bars");
let menuVisible = document.querySelector(".menu_visible");

btn_toggle.onclick = function (){
    if(menuVisible.classList.contains(".menu_visible")){
        menuVisible.classList.remplace (".menu_visible", ".menu_invisible");
        
    } 
    else {
        menuVisible.classList.remplace (".menu_invisible", ".menu_visible");
    }
}

console.log("hola javascript");