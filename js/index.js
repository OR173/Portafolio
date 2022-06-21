
const menu = document.querySelector('.fa-bars');
menu.addEventListener('click', () => {
    console.log('click');
    const nav_items = document.querySelector('.nav-items');
    nav_items.classList.toggle('active');
});

