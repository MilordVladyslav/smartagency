;(function ($) {
    'use strict'

	$('.slider').slick({
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay: false,
	  dots:true,
	  responsive: [
		  {
		  	breakpoint: 1199,
		  	settings: {
		  		slidesToShow: 1,
		  		arrows:false
		  	}
		  }
	  ]
	})


	$('#menu').on('click', function(){
		$('#menu-right').animate({
			right:0
		}, 400)
	})

	$('#back').on('click', function(){
		$('#menu-right').animate({
			right:-115+"%"
		}, 200)
	})


})(jQuery)



