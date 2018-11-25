
const containerProducts = document.querySelectorAll('.products__container');
const sectionProducts = document.querySelector('.products-section');

const productsScrollHandle = () => {
    const itemCoords = sectionProducts.getBoundingClientRect();
    let deepScrolling = 650;
	containerProducts.forEach(item => {
        if (itemCoords.top < deepScrolling) {
            item.classList.add('fadeInUp');
            item.classList.remove('displayNone');
            deepScrolling -= item.offsetHeight;
        // containerAbout.removeAttribute('hidden');
	}
	else {
        item.classList.remove('fadeInUp');
        item.classList.add('displayNone');
        // containerAbout.setAttribute('hidden', true);
	}
    })
}
window.addEventListener("scroll", productsScrollHandle);