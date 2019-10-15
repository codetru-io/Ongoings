"use strict";

//jQuery dom ready
jQuery(document).ready(function ($) {
    

    if ($('#off-canvas').length > 0) {
        $(".navbar-nav").clone().prependTo("#off-canvas .offcanvaswrap_menus");
        $(function () {
            $(document).trigger("enhance");
        });

        $(document.body).addClass('offcanvas-added');
    }


    //Home Slider  JS
    $(".slider-active-wrap").owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        autoplay: false,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });
    //end Home Slider  JS

    //Upcoming Event JS
    $(".upcoming-event-content").owlCarousel({
        nav: true,
        loop: true,
        items: 1,
        dots: false,
        autoPlay: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    //end Upcoming Event JS


    $(".gallery-menu span").on('click', function () {

        $(".gallery-menu span").removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).attr('data-filter');
        $(".gallery-gird").isotope({
            filter: filterValue
        });
        return false;
    }); //end gallery js



    //smooth scrolling
    $('.smooth-scroll').smoothScroll({
        speed: 1000,
        easing: 'jswing'
    }); //end smooth scrolling


    // Event Details CarouselJS
    $('.event-thumbnail-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    }); //end event carousel
    

    // Scroll to Top Click
    $('.scroll-top').on('click', function () {
        $('html').animate({
            scrollTop: 0
        }, 2000);

        return false;
    }); //end scroll top click

    //event-countdown-counter
    $( ".event-countdown-counter" ).each( function( index, element ) {
        var $element = $(element),
            $date = $element.data('date');

        $element.countdown($date, function(event) {
            var $this = $(this).html(event.strftime(''
                
                + '<div class="counter-item"><span class="counter-label">Days</span><span class="single-cont">%D</span></div>'
                + '<div class="counter-item"><span class="counter-label">Hr</span><span class="single-cont">%H</span></div>'
                + '<div class="counter-item"><span class="counter-label">Min</span><span class="single-cont">%M</span></div>'
                + '<div class="counter-item"><span class="counter-label">Sec</span><span class="single-cont">%S</span></div>'));
        });
        

    });

    //All Window Srcoll Function

    $(window).scroll(function () {

        //Scroll top Hide Show
        if ($(window).scrollTop() >= 500) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }

    }); // end all Window Srcoll Function


    //Local PATH
    var cbx_path = window.location.protocol + '//' + window.location.host;
    var pathArray = window.location.pathname.split('/');
    for (var i = 1; i < (pathArray.length - 1); i++) {
        cbx_path += '/';
        cbx_path += pathArray[i];
    }

    //Start Contact Form Validation And Ajax Submission

    var $contactForm = $('form#cbx-contact-form');
    $contactForm.validate({
        submitHandler: function (form) {
            var $contactForm = $(form);
            $.ajax({
                url: cbx_path + '/php/contact.php',
                type: 'post',
                data: $contactForm.serialize(),
                success: function (ajaxResponse) {
                    try {
                        var ajaxResponse = $.parseJSON(ajaxResponse);


                        if (ajaxResponse.error) {
                            //for field error
                            $.each(ajaxResponse.error_field, function (i) {
                                if ($('label#' + ajaxResponse.error_field[i] + '-error').length == 0) {
                                    $('#' + ajaxResponse.error_field[i]).after('<label class="error" for="' + ajaxResponse.error_field[i] + '" id="' + ajaxResponse.error_field[i] + '-error"></label>');

                                }
                                $('label#' + ajaxResponse.error_field[i] + '-error').text(ajaxResponse.message[ajaxResponse.error_field[i]]);
                            });
                        } else if (ajaxResponse.successmessage) {

                            //alert(ajaxResponse.successmessage);
                            //$( '.cbx-formalert' ).addClass( "alert alert-success" );
                            $('#cbx-formalert').addClass("alert alert alert-success").html(ajaxResponse.successmessage);
                            $contactForm[0].reset();
                        }
                    } catch (e) {
                        //consoe.log(e.message );
                        $contactForm[0].reset();
                    }
                },
                error: function (error) {
                    $contactForm[0].reset();
                }
            });

            return false;

        },

        rules: {
            'cbxname': {
                required: true
            },
            'cbxemail': {
                required: true
            },
            'cbxmessage': {
                required: true
            },
            'cbxsubject': {
                required: true
            }
        }
    }); //End Contact Form js


    //Email Subscription Validation And Ajax Submission

    var isEmail = function (email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    };

    $('form#cbx-subscribe-form').on('submit', function (evnt) {
        evnt.preventDefault();

        var $form = $(this);
        var emailInput = $('form#cbx-subscribe-form').find('input#subscribe');
        if (isEmail(emailInput.val())) {

            $.ajax({
                url: cbx_path + '/php/subscribe.php',
                type: 'post',
                data: {'email': emailInput.val().toLowerCase()},
                beforeSubmit: function (argument) {
                    // body...
                },
                success: function (ajaxResponse) {


                    try {
                        var ajaxResponse = $.parseJSON(ajaxResponse);
                        if (!ajaxResponse.error) {
                            emailInput.css('color', '#0f0');
                        } else {
                            emailInput.removeAttr('style'); //css('color', '#f00');
                            throw ajaxResponse.message;
                        }
                        //alert( ajaxResponse.message );
                    } catch (e) {
                        //e.message;
                        //alert(e.message );
                    }
                },
                error: function (argument) {
                    // body...
                }
            });
            $form[0].reset();
        } else {
            emailInput.css('color', '#f00');
            return false;
        }
    });

    $('form.subscribe-form input#subscribe').on('keyup', function (evnt) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        this.style.color = (isEmail($(this).val())) ? '#f5832b' : '#f00';
    });

    //End Email Subscription Validation And Ajax Submission

});//jQuery end