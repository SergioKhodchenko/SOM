function onLoad () {
const menuBtn = document.querySelector('.menu-button');
const mainMenu = document.querySelector('.menu');
const body = document.querySelector('body');
const video = document.querySelector('.video-container__video');
const welcome = document.querySelector('.welcome');


function changeVideoSize () {
    video.classList.add('shift-right');
    welcome.classList.add('shift-from-left');
}

const timer = setTimeout(changeVideoSize, 1600);

const menuBtnClickHandler = (evt) => {
    evt.stopPropagation();
    menuBtn.classList.add('unvisible');
    mainMenu.classList.remove('unvisible');
};
const bodyClickHandler = () => {
    if (menuBtn.classList.contains('unvisible')) {
        menuBtn.classList.toggle('unvisible');
        mainMenu.classList.toggle('unvisible');
    }
 };

menuBtn.addEventListener('click', menuBtnClickHandler);
body.addEventListener('click', bodyClickHandler);
};

window.addEventListener('load', onLoad);