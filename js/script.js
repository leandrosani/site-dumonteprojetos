let header1 = document.querySelector('.header1');

function headerScroll(){

    header1.style.transition = "none"
    if(window.pageYOffset >= 1){
        header1.style.background = "#021820";
    }else{
        header1.style.transition = "0.2s"
        header1.style.background = "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(53,70,77,1) 35%, rgba(255,255,255,0) 100%)"
    }

};

window.addEventListener('scroll',()=>{
    headerScroll();
});

/******************************/

let carouselClass = document.querySelector('.header-carousel');
let carousel1Class = document.querySelector('.image-carousel-1');
let margin = 0;

setInterval(function (){

    if(margin > -200){
        carousel1Class.style.opacity = "0.5";
        carouselClass.style.transition = "1s ease-out";
        margin -= 100;
        carouselClass.style.marginLeft = margin+'%';
    }else{
        carouselClass.style.transition = "none";
        margin = 0;
        carouselClass.style.marginLeft = margin+'%';
        carousel1Class.style.opacity = "1";
    }

}, 12000);

/******************************click scroll******************************/
/*
let section1 = document.querySelector('#section1')
let section2 = document.querySelector('#section2')
let section3 = document.querySelector('#section3')
*/

let servicos = document.querySelector('.servicos');
let projetos = document.querySelector('.projetos');
let sobre = document.querySelector('.sobre');
let call = document.querySelector('.call');
let contato = document.querySelector('.contato');


servicos.addEventListener("click",()=>{
    window.scrollTo(0, 875);
});
projetos.addEventListener("click",()=>{
    window.scrollTo(0, 1259);
});
sobre.addEventListener("click",()=>{
    window.scrollTo(0, 1901);
});
call.addEventListener("click",()=>{
    window.scrollTo(0, 875);
});
contato.addEventListener("click",()=>{
    window.scrollTo(0, 2656);
});


let hamburger = document.querySelector('.menuHamburger');
let mobileNav = document.querySelector('.nav');
let gradient = document.querySelector('.blur');
let menuX = document.querySelector('.menuX');
let menuComplit = document.querySelector('.menu');

mobileNav.style.marginLeft = "-100%"

hamburger.addEventListener("click",()=>{
    gradient.style.display = "block"
    gradient.style.position = "absolute";
    gradient.style.zIndex = "1";
    gradient.style.opacity = "1";
    hamburger.style.display = "none";
    mobileNav.style.marginLeft = "0";
    menuX.style.display = "block"
});

gradient.addEventListener("click",()=>{
    gradient.style.display = "none"
    gradient.style.position = "fixed";
    hamburger.style.display = "block";
    mobileNav.style.marginLeft = "-100%";
    menuX.style.display = "none"
});

menuComplit.addEventListener("click",()=>{
    gradient.style.display = "none"
    gradient.style.position = "fixed";
    hamburger.style.display = "block";
    mobileNav.style.marginLeft = "-100%";
    menuX.style.display = "none"
});

/*
window.addEventListener('scroll', function(ev){
    console.log(this.scrollY);
});
*/

// 875 section1

// 1259 section2

// 1901 section3

// 2656 contato