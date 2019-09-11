$(document).ready(function() {
	//slider
	$('.main-slider__block').slick({
		infinite: true,
		rtl: true,
		arrows: false,
		dots: true
	});
	$('.menu-slider__block, .before-after__slider, .video__slider').slick({
		infinite: true,
		rtl: true,
		arrows: true,
		dots: false
	});
});