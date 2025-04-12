/*
Author       : AB_Themes.
Template Name: Digna - Corporate Agency HTML Template
Version      : 1.0
*/


(function($) {
	'use strict';
		
	/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.preloader').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		
	 
	 /*-------------------------------------
    Main menus
    -------------------------------------*/
    	
    	$(window).on('scroll', function () {
    		
    		if ($(this).scrollTop() > 100) {
    			$('.header').addClass('sticky');
    		} else {
    			$('.header').removeClass('sticky');
    		}
    	});
		
		$('.main_menu').onePageNav({
    		currentClass: 'current',
    		changeHash: true,
    		scrollSpeed: 750,
    		scrollThreshold: 0.5,
    		filter: '',
    		easing: 'swing',
    		begin: function() {
    			//I get fired when the animation is starting
    		},
    		end: function() {
    			//I get fired when the animation is ending
    		},
    		scrollChange: function(jQuerycurrentListItem) {
    			//I get fired when you enter a section and I pass the list item of the section
    		}
    	});
 
		
		
	
	/* counter */
    $('.count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 3000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	
	/* company slide */
	
	 $(".company_slide").owlCarousel({
		loop:true,	
		autoplay:true,
		slideSpeed:1000,
		nav:true,
		navText: false,
		dots:false,
		items: 5,
		margin: 30,
		responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
		 
	 });
	
	/* testimonial */
	
	 $(".testi_area_silder").owlCarousel({
		loop:true,	
		autoplay:true,
		slideSpeed:1000,
		nav:true,
		navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
		dots:false,
		items: 1,
		margin: 30
		 
	 });
	
	
})(jQuery);