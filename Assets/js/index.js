const navButton = document.querySelector('.nav-button');
const navMenu = document.querySelector('.nav-menu-mobile');
const contactButton = document.querySelector('.contact-button');
const aboutScroll = document.querySelector('.aboutscroll');
const skillScroll = document.querySelector('.skillsscroll');
const projectScroll = document.querySelector('.projectscroll');
const contactScroll = document.querySelector('.contactscroll');

navButton.addEventListener('click',()=>{
    navMenu.classList.toggle("display");
    console.log("hello");
})

contactButton.addEventListener('click',()=>{
    window.location.href = "mailto:kimaniantoni@gmail.com?"
})

window.onload = function(){
    aboutScroll.addEventListener('click',function(){
        console.log('hello');
         setTimeout(function (){
             window.scrollTo(0,800);
        },2);
    });

    skillScroll.addEventListener('click',function(){
        console.log('hello');
         setTimeout(function (){
             window.scrollTo(0,1300);
        },2);
    })

    projectScroll.addEventListener('click',function(){
        console.log('hello');
         setTimeout(function (){
             window.scrollTo(0,2200);
        },2);
    })

    contactScroll.addEventListener('click',function(){
        console.log('hello');
         setTimeout(function (){
             window.scrollTo(0,3400);
        },2);
    })
}