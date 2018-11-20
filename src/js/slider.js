
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