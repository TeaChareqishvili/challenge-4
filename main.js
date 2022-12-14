

const menu = document.querySelector('.menu-bar');
const mobileList = document.querySelector('.none');
const closeButton = document.querySelector('.close');

menu.addEventListener('click',()=>{
    
    mobileList.classList.remove('none');
    menu.classList.add('none');
    menu.classList.remove('menu-bar');
})

closeButton.addEventListener('click',()=>{
       mobileList.classList.add('none');
       menu.classList.remove('none');
       menu.classList.add('menu-bar');
})