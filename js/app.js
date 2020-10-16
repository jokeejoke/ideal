function activeSearchInput() {
	let inputBlock = document.querySelector(".search_input");
	inputBlock.classList.toggle("active");
}

function mobileCategoryColors() {
	let mobileCategoryArr = document.querySelectorAll(".category__item_mobile");
	for (let i = 0; i < mobileCategoryArr.length; i++) {
		if (i % 2 == 0) {
			mobileCategoryArr[i].style.background = '#FFCBA5'
		} else {
			mobileCategoryArr[i].style.background = '#A80000'
		}
	}
}

mobileCategoryColors()


var swiper = new Swiper('.main_slider', {
	centeredSlides: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});

