
const menu = document.querySelector('.fa-bars');
menu.addEventListener('click', () => {

    const nav_items = document.querySelector('.nav-items');
    nav_items.classList.toggle('active');

    const logo = document.querySelector('.logo');
    logo.classList.toggle('borrar_logo');
        
});

 