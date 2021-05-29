(function($) {
	"use strict";
	$(document).on("ready", function(e) {
		// ______________ OWL CAROUSEL						   	
		$(".owl-item-1").owlCarousel({
			navigation: true, // Show next and prev buttons
			navigationText: false,
			slideSpeed: 300,
			paginationSpeed: 400,
			singleItem: true,
			pagination: false,
			autoHeight: true,
		});
		// ______________ SECTION PARALLAX	
		$('.section-parallax').parallax("50%", 0.4);
		$('.section-parallax2').parallax("50%", 0.4);
		$('.section-parallax3').parallax("50%", 0.4);
		$('.section-parallax4').parallax("50%", 0.4);
		$('.section-parallax5').parallax("50%", 0.4);
		$(".owl-item-1-text").owlCarousel({
			navigation: true, // Show next and prev buttons
			navigationText: false,
			slideSpeed: 300,
			paginationSpeed: 400,
			singleItem: true,
			pagination: false,
			autoHeight: true,
		});
		$(".owl-carousel .owl-next").addClass("fa fa-chevron-right");
		$(".owl-carousel .owl-prev").addClass("fa fa-chevron-left");
		// ______________ RESPONSIVE MENU
		$('#navigation').superfish({
			delay: 300,
			animation: {
				opacity: 'show',
				height: 'show'
			},
			speed: 'fast',
			dropShadows: false
		});
		$(function() {
			$('#navigation').slicknav({
				closedSymbol: "&#8594;",
				openedSymbol: "&#8595;"
			});
		});
	});

	// ______________ SKILLS					
	setTimeout(function() {
		$('.progress .progress-bar').each(function() {
			var me = $(this);
			var perc = me.attr("data-percentage");
			//TODO: left and right text handling
			var current_perc = 0;
			var progress = setInterval(function() {
				if (current_perc >= perc) {
					clearInterval(progress);
				} else {
					current_perc += 1;
					me.css('width', (current_perc) + '%');
				}
				var meandclass = me.find(".skills-percentage");
				meandclass.text((current_perc) + '%');
			}, 50);
		});
	}, 50);
	// ______________ COUNTER
	var counterNum = $('.counter-number');
	if ($(counterNum).length) {
		$(counterNum).counterUp({
			delay: 10,
			time: 1000
		});
	}
	// ______________ BACKGROUND COVER IMAGE
	$(".cover-image").each(function() {
		var attr = $(this).attr('data-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});
	$(".cover-image2").each(function() {
		var attr = $(this).attr('data-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});
	$(".cover-image3").each(function() {
		var attr = $(this).attr('data-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});
	// ______________ ANIMATE EFFECTS
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false
	});
	wow.init();
	// ______________ TOOLTIP					 
	var $tooltip = $('[data-toggle="tooltip"]');
	if ($tooltip.length) {
		$tooltip.tooltip();
	}
	// ______________ LOADING
	$(window).on("load", function(e) {
		$(".loading").fadeOut("slow");
	})
	
	// ______________ BACK TO TOP BUTTON
	$(window).on("scroll", function(e) {
		// ______________ STICKY PLUGIN			
		$(".main_menu").sticky({
			topSpacing: 0
		});
		// ______________ SCROLL TOP
		if ($(this).scrollTop() > 300) {
			$('#back-to-top').fadeIn('slow');
		} else {
			$('#back-to-top').fadeOut('slow');
		}
	});
	$('#back-to-top').click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
})(jQuery);