$(window).on("load", function () {
	$(".preloader").delay(500).fadeOut("slow");
});

/**JQUERY FUNCTIONS */
$(function () {

	$('select.type_select').on('change', function () {
		$("button.apply").addClass("active")
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		skin: "round",
		min: 7000,
		max: 15000,
		from: 7000,
		postfix: "p"
	});
	$('.js-example-basic-single').select2();

	$(".filter_item .mobile_filter_item").on("click", function () {
		$(this).next().toggleClass("active");
	});

	$('.image').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		tClose: 'Закрыть'
		// other options
	});
	$('.open-popup-link').magnificPopup({
		type: 'inline',
		tClose: 'Закрыть',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

	$(".gallery").magnificPopup({
		delegate: "a",
		type: "image",
		gallery: {
			enabled: window.innerWidth < 1400 ? false : true,
			tCounter: '<div class="mfp-counter">%curr% из %total%</div>'
		},
		tClose: 'Закрыть',
		midClick: true
	});


})


function activeSearchInput() {
	let inputBlock = document.querySelector(".search_input");
	inputBlock.classList.toggle("active");
}
function activePriceRange() {
	let priceRange = document.querySelector(".filter .price_range");
	priceRange.classList.toggle("active");
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

function closePopup() {
	$.magnificPopup.close();
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
if (window.innerWidth <= 992) {
	resizeCatalogItem()
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
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
});
//doorsSlider.slideTo(1, false, true);

const $chooseCityBtn = document.querySelector('.city__btn')
if($chooseCityBtn) {
	$chooseCityBtn.addEventListener('click', function () { 
		document.querySelector('.city__list').classList.toggle('active')
	})
}
















