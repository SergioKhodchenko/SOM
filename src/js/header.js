const menuBtn = document.querySelector('.menu-button');
const mainMenu = document.querySelector('.menu');
const header = document.querySelector('header');

const menuBtnClickHandler = (evt) => {
    evt.stopPropagation();
    menuBtn.classList.add('unvisible');
    mainMenu.classList.remove('unvisible');
};
const headerClickHandler = () => {
    menuBtn.classList.toggle('unvisible');
    mainMenu.classList.toggle('unvisible');
 };

menuBtn.addEventListener('click', menuBtnClickHandler);
header.addEventListener('click', headerClickHandler);