
const containerAbout = document.querySelector('.about-container');
const sectionAbout = document.querySelector('.about-section');
const aboutText = document.querySelector('.about__text');
const aboutScrollHandle = () => {
	const itemCoords = sectionAbout.getBoundingClientRect();
	if (itemCoords.top < 560) {
        console.log(itemCoords.top);
        containerAbout.classList.add('fadeInUp');
        containerAbout.classList.remove('preFadeInUp');
        // containerAbout.removeAttribute('hidden');
	}
	else {
        containerAbout.classList.remove('fadeInUp');
        containerAbout.classList.add('preFadeInUp');
        // containerAbout.setAttribute('hidden', true);
	}
}
window.addEventListener("scroll", aboutScrollHandle);