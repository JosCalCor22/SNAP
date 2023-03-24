//MENU BURGER
const burgerBtn = document.querySelector('.hamburger');
const contentBurger = document.querySelector('.closed-menu-burger');

let hambuerguerContainer = document.querySelector('.hamburger-container');

window.addEventListener('DOMContentLoaded', () => {
    hambuerguerContainer.classList.add('inactive')
})
//MENU BURGER
//BOTONES NAV
const btnFeactures = document.querySelector('.btnFeactures');
const btnCompany = document.querySelector('.btnCompany');
//BOTONES NAV

//MENU-BOTONES BURGER
let menuBurger = document.querySelector('.hamburger-container');
//MENU-BOTONES BURGER

//MENU-BOTONES-NAV-DESKTOP
let menu1 = document.querySelector('.menu1-desktop');
let menu2 = document.querySelector('.menu2-desktop');
//MENU-BOTONES-NAV-DESKTOP

//MENU-BOTONES-NAV-MOBILE
let menu1_Mobile = document.querySelector('.menu1');
let menu2_Mobile = document.querySelector('.menu2');
//MENU-BOTONES-NAV-MOBILE

//MENU-NAV-FLECHAS
let row1 = document.querySelector('.row1');
let row2 = document.querySelector('.row2');
//MENU-NAV-FLECHAS

//EVENTOS
btnFeactures.addEventListener('click', deployMenu1);
btnCompany.addEventListener('click', deployMenu2);
burgerBtn.addEventListener('click', deployMenuBurger);
contentBurger.addEventListener('click', closedBurgerMenu);
//EVENTOS

//FUNCIONES DE LOS EVENTOS
function deployMenu1(){
    row1.classList.toggle('rowActive')
    menu1.classList.toggle('inactive');
    
    if(menu2.classList.contains('inactive')){
        menu2.classList.remove('inactive');
    }
}
function deployMenu2(){
    row2.classList.toggle('rowActive')
    menu2.classList.toggle('inactive');
    if(menu1.classList.contains('inactive')){
        menu1.classList.remove('inactive');
    }
}


function deployMenuBurger(){
    burgerBtn.classList.toggle('inactive');
    if(menuBurger.classList.contains('inactive')){
        menuBurger.classList.remove('inactive');
    }if(!menuBurger.classList.contains('inactive')){
        contentBurger.classList.remove('inactive');
    }
}
function closedBurgerMenu(){
    contentBurger.classList.toggle('inactive');
    if(!menuBurger.classList.contains('inactive')){
        menuBurger.classList.add('inactive');
    }if(menuBurger.classList.contains('inactive')){
        burgerBtn.classList.remove('inactive');
    }
}


document.querySelector('.btnFeacturesMobile').addEventListener('click', () => {
    menu1_Mobile.classList.toggle('inactiveItems')
    document.querySelector('.rowMobile').classList.toggle('rowActive')
})

document.querySelector('.btnCompanyMobile').addEventListener('click', () => {
    menu2_Mobile.classList.toggle('inactiveItems')
    document.querySelector('.rowMobile1').classList.toggle('rowActive')
})
//FUNCIONES DE LOS EVENTOS