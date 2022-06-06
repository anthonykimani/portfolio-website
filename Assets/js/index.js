const navButton = document.querySelector('.nav-button');
const navMenu = document.querySelector('.nav-menu-mobile');

navButton.addEventListener('click',()=>{
    navMenu.classList.toggle("display");
    console.log("hello");
})