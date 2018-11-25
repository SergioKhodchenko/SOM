
const containerLeft = document.querySelector('.container-left');
const containerRight = document.querySelector('.container-right');
const sectionSlider = document.querySelector('.slider-section');


const sliderScrollHandle = () => {
	const itemCoords = sectionSlider.getBoundingClientRect();
	if (itemCoords.top < 560) {
        containerLeft.classList.remove('displayNone');
        containerLeft.classList.add('displayBlock');
        containerRight.classList.remove('displayNone');
        containerRight.classList.add('displayBlock');
	}
	else {
        containerLeft.classList.remove('displayBlock');
        containerLeft.classList.add('displayNone');
        containerRight.classList.remove('displayBlock');
        containerRight.classList.add('displayNone');
	}
}
window.addEventListener("scroll", sliderScrollHandle);


//-----slider animation-------
const leftImages = document.querySelectorAll('.left-image');
const leftImagesArray = Array.from(leftImages);
const rightImages = document.querySelectorAll('.right-image');
const rightImagesArray = Array.from(rightImages);

let imageIndexL = 0;
let imageIndexR = 0;

function slideAllImage() {
        slideLeftImage();
        slideRightImage();
}
function slideLeftImage() {
        leftImagesArray[leftImagesArray.length - 1].classList.remove('slided');
        if (imageIndexL === leftImagesArray.length) {
                imageIndexL = 0;
        }
        leftImagesArray[imageIndexL].classList.add('slided'); 
        if (imageIndexL >= 1) {
                leftImagesArray[imageIndexL - 1].classList.remove('slided'); 
        }
        imageIndexL +=1;
}

function slideRightImage() {
        rightImagesArray[rightImagesArray.length - 1].classList.remove('slided');
        if (imageIndexR === rightImagesArray.length) {
                imageIndexR = 0;
        }
        rightImagesArray[imageIndexR].classList.add('slided'); 
        if (imageIndexR >= 1) {
                rightImagesArray[imageIndexR - 1].classList.remove('slided'); 
        }
        imageIndexR +=1;
}

const slider = setInterval(slideAllImage, 1800);
