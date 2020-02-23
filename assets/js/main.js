$(document).ready(function($){
	"use strict";
	
	// WOW Js Active
	// new WOW().init();
	
	// ---- Active
    
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		responsive:{
			0:{
				items:1,
				
			},
			600:{
				items:2,
				
			},
			1000:{
				items:3,
				
			}
		}
	})
	
	
	
	
	
	
	
	
	
	
	
	/* scrollUp Minimum setup */
	$(function () {
		$.scrollUp();
	});
	
}(jQuery));