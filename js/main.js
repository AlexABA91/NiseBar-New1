$(function() {
	$('.slikslider').slick({
		dots:true,
		speed:500,
		easing:'ease',
		draggable: false,
		infinite:true,
		slidesToShow: 1,
	});
	$('.arrowap').click(function(){
		$('html, body').animate({scrollTop:0}, '500');
    });	
});