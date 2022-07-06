
const menu = document.querySelector('.fa-bars');
menu.addEventListener('click', () => {

    const nav_items = document.querySelector('.nav-items');
    nav_items.classList.toggle('active_bars');

    const seccion_principal = document.querySelector('.seccion_A ');
    seccion_principal.classList.toggle('active_barss');

    const logo = document.querySelector('.logo');
    logo.classList.toggle('borrar_logo');
        
});

