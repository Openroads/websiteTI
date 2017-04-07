	$(document).ready(function() {

	var NavY = $('.menu').offset().top;
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
	var t = NavY-ScrollY;
	var top = t +"px";
	//top = "10px";

	if (ScrollY > NavY) { 
		$('.menu').addClass('sticky');
	} else {
		//$('.menu').css({"top":top});
		$('.menu').removeClass('sticky'); 
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
	});
