$(window).on("load", function () {
	$(".preloader").delay(500).fadeOut("slow");
});

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



function resizeCatalogItem() {
	let catalogItems = document.querySelectorAll(".catalog_item");
	for (let i = 0; i < catalogItems.length; i++) {
		if (i % 2 == 0) {
			let item = catalogItems[i];
			item.style.marginRight = '-7.5px'
			item.parentNode.style.marginBottom = '15px'
		} else {
			let item = catalogItems[i];
			item.style.marginLeft = '-7.5px'
			item.parentNode.style.marginBottom = '15px'
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

var doorsSlider = new Swiper('.doorsSlider__container', {
	slidesPerView: 2,
	centeredSlides: true,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
doorsSlider.slideTo(1, false, false);





if (window.innerWidth <= 992) {
	resizeCatalogItem()
}










