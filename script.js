let menu = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');
menu.onclick=() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new swiper('.swiper-container',{
    pagination:{
        el:'.swiper-pagination',
    },
});