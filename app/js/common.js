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

	//menu
	$( ".menu-trigger button" ).click(function() {
		$( ".menu" ).addClass( "active" );
		$( ".menu__overlay" ).addClass( "active" );
	});
	$( ".menu__close button, .menu__overlay" ).click(function() {
		$( ".menu" ).removeClass( "active" );
		$( ".menu__overlay" ).removeClass( "active" );
	});

	//accordion
	$( ".menu-slider__trigger" ).click(function() {
		$( this ).next().slideToggle( "fast" );
	});

	//scroll anchor
    $('.scrollto').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-5},800);
		return false;
	});


});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 700) {
        $(".scroll-arrow").addClass("active");
    } else {
        $(".scroll-arrow").removeClass("active");
    }
});