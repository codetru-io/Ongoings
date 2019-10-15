"use strict";

jQuery(document).ready(function($){



	/* ---------------------------------------------------------------------------
	 * Muffin Accordion & FAQ
	 * --------------------------------------------------------------------------- */
	jQuery('.mfn-acc').each(function() {
		var el = jQuery(this);
		if (el.hasClass('openAll')) {
			// show all -----------
			el.find('.question').addClass("active").children(".answer").show();
		} else {
			// show one -----------
			var active_tab = el.attr('data-active-tab');
			if (el.hasClass('open1st')) active_tab = 1;
			if (active_tab) {
				el.find('.question').eq(active_tab - 1).addClass("active").children(".answer").show();
			}
		}
	});
	jQuery(".mfn-acc .question > .title").click(function() {
		if (jQuery(this).parent().hasClass("active")) {
			jQuery(this).parent().removeClass("active").children(".answer").slideToggle(200);
		} else {
			if (!jQuery(this).closest('.mfn-acc').hasClass('toggle')) {
				jQuery(this).parents(".mfn-acc").children().each(function() {
					if (jQuery(this).hasClass("active")) {
						jQuery(this).removeClass("active").children(".answer").slideToggle(200);
					}
				});
			}
			jQuery(this).parent().addClass("active");
			jQuery(this).next(".answer").slideToggle(200);
		}
	});

	/* ---------------------------------------------------------------------------
	 * Tabs
	 * --------------------------------------------------------------------------- */

	if (typeof(tabs) !== 'undefined') {
		jQuery(".jq-tabs").tabs();
	}
});

// Acc
$(document).on("click", ".naccs .menu div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".naccs .menu div").removeClass("active");
		$(".naccs ul li").removeClass("active");

		$(this).addClass("active");
		$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".naccs ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".naccs ul").height(listItemHeight + "px");
	}
});



// 	NAVIGATION MENU ** DO NOT TOUCH **
document.getElementById("nav").innerHTML =
'<div class="navik-header-container">' +
'<div class="logo">' +
'<a href="#"><img src="assets/img/logo-2.png" alt="logo"/></a>' +
'</div>' +
'<div class="burger-menu">' +
'<div class="line-menu line-half first-line"></div>' +
'<div class="line-menu"></div>' +
'<div class="line-menu line-half last-line"></div>' +
'</div>' +	
'<nav class="navik-menu-fixed">' +	
'<ul>' +	
'<li class="current-menu"><a href="index.html">Home</a></li>' +
'<li><a>About</a>' +
'<ul>' +
'<li><a href="./about.html">About us</a></li>' +
'<li><a href="./history.html">Lake History</a></li>' +
'</ul>' +
'</li>' +
'<li><a>News / Info</a>' +
'<ul>' +
'<li><a href="./access.html">Access</a></li>' +
'<li><a href="./health.html">Health</a></li>' +
'<li><a href="./news.html">News</a></li>' +
'<li><a href="./map.html">Map</a></li>' +
'<li><a href="./municipal-info.html">Municipal Info</a></li>' +
'<li><a href="./president-message.html">Presidents&nbsp;Message</a></li>' +
'<li><a href="./other-info.html">Other</a></li>' +
'<br>' +

'</ul>' +	
'</li>' +	
'<li><a href="membership.html">Membership</a></li>' +	
'<li><a href="gallery.html">Photos</a></li>' +	
'<li><a href="contact.html">Contact</a></li>' +	
'<li><br></li>' +	
'<li><a href="index-fr.html">FR</a></li>' +	
'</ul>' +	
'</nav>' +	

'<div class="forecast-table">' +
'<div class="">' +
'<div class="forecast-container">' +
'<div class="today forecast">' +
'<div class="forecast-header">' +
'</div>' +
'<div class="forecast-content">' +
'<div class="degree">' +
'<div>' +
'<canvas id="wIcon" width="48" height="48"></canvas>'+
'</div>'+
'<div id="wSummary"></div>'+
'<div class="num">' +
'<div id="current_temp" ></div>' +                
'</div>' +
'</div>' +
'</div>' +
'</div>' +
'</div>' +
'</div>' +
'</div>' +

'</div>'
;

var d = new Date();
var cur_year = d.getFullYear();


document.getElementById("footer-area-insert").innerHTML = 
'<div class="footer-widget section-padding">'+
'<div class="container">'+
'<div class="row">'+
'<div class="col-lg-4 col-sm-6">'+
'<div class="single-widget-wrap">'+
'<div class="widgei-body">'+
'<div class="footer-about">'+
'<img src="assets/img/footer-logo.png" alt="Logo" class="img-fluid">'+
'<p>We are legend Lorem ipsum dolor sitmet, nsecte ipisicing eit, sed do eiusmod tempor incidunt ut  et do maga aliqua enim ad minim.</p>'+
'<a href="#">Phone: +8745 44 5444</a> <a href="#">Fax: +88474 156 362</a>'+
'<br>'+
'<a href="#">Email: demoemail@demo.com</a>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-lg-3 col-sm-6">'+
'<div class="single-widget-wrap">'+
'<h4 class="widget-title">Get In Touch</h4>'+
'<div class="widgei-body">'+
'<p>We are legend Lorem ipsum dolor sitmet, nsecte ipisicing eit, sed</p>'+
'<div class="newsletter-form">'+
'<form id="cbx-subscribe-form" role="search">'+
'<input type="email" placeholder="Enter Your Email" id="subscribe" required>'+
'<button type="submit"><i class="fa fa-send"></i></button>'+
'</form>'+
'</div>'+
'<div class="footer-social-icons">'+
'<a href="#" target="_blank"><i class="fa fa-facebook"></i></a>'+
'<a href="#" target="_blank"><i class="fa fa-twitter"></i></a>'+
'<a href="#" target="_blank"><i class="fa fa-linkedin"></i></a>'+
'<a href="#" target="_blank"><i class="fa fa-vimeo"></i></a>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-lg-3 col-sm-6">'+
'<div class="single-widget-wrap">'+
'<h4 class="widget-title">Usefull Link</h4>'+
'<div class="widgei-body">'+
'<ul class="double-list footer-list clearfix">'+
'<li><a href="#">Pricing Plan</a></li>'+
'<li><a href="#">Categories</a></li>'+
'<li><a href="#">Populer Deal</a></li>'+
'<li><a href="#">FAQ</a></li>'+
'<li><a href="#">Support</a></li>'+
'<li><a href="#">Pricing Plan</a></li>'+
'<li><a href="#">Categories</a></li>'+
'<li><a href="#">Populer Deal</a></li>'+
'<li><a href="#">FAQ</a></li>'+
'<li><a href="#">Support</a></li>'+
'</ul>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-lg-2 col-sm-6">'+
'<div class="single-widget-wrap">'+
'<h4 class="widget-title">University</h4>'+
'<div class="widgei-body">'+
'<ul class="footer-list clearfix">'+
'<li><a href="#">Pricing Plan</a></li>'+
'<li><a href="#">Categories</a></li>'+
'<li><a href="#">Populer Deal</a></li>'+
'<li><a href="#">FAQ</a></li>'+
'<li><a href="#">Support</a></li>'+
'</ul>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="footer-bottom">'+
'<div class="container">'+
'<div class="row">'+
'<div class="col-lg-12 text-center">'+
'<div class="footer-bottom-text">'+
'<p style="white-space: nowrap;">&#xA9; 2017-'+cur_year+'</p>'+
'<p style="white-space: nowrap;"> Codeboxr, All Rights Reserved.</p>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'
;


var skycons = new Skycons({
  "color": "blue"
});
//WEATHER
var proxy = 'https://cors-anywhere.herokuapp.com/';
var dsAPI = "https://api.darksky.net/forecast/";
var dsKey = "b75218d77bbe3e6b4744c0976127c28d" + "/";
var dsParams = "?exclude=minutely,hourly,daily,alerts,flags&units=auto";
  
var URLRequest = proxy + dsAPI + dsKey + 45.8802546 + "," + -74.3759293 + dsParams

jQuery.getJSON( URLRequest )
  //Success promise
  .done(function( data ) {
	skycons.add("wIcon", data.currently.icon);
	var wTemperature = data.currently.temperature;
	jQuery("#wSummary").text(data.currently.summary);
	wTemperature = wTemperature.toFixed(1)
	document.getElementById('current_temp').innerHTML = wTemperature + "&#8451;";
  });



  
     



                         

