// const main_btn = document.querySelector('.main_btn');
// console.log(main_btn);

// main_btn.addEventListener('mouseover', funcionPrueba);

// function funcionPrueba(){
//     console.log('lograste llegar a la funcion');
// }


const menu = document.querySelector('.fa-bars');

menu.addEventListener('click', () => {
    console.log('click');
    const nav_items = document.querySelector('.nav-items');
    nav_items.classList.add('active');
    
    
});

const menu_active = document.querySelector('.fa-bars. active');
console.log(menu_active);

// menu_active.addEventListener('click', () => {
//     console.log('regreso');
    
// });

