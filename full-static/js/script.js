(function($) {

	"use strict";

    // Play pause music
    var audio = document.getElementById("music"); 
    function play () {
        // x.play(); 
        // x.pause(); 
        // $('#play-pause-button').on("click",function(){
        //     if($(this).hasClass('fa-play'))
        //      {
        //        $(this).removeClass('fa-play');
        //        $(this).addClass('fa-pause');
        //        audio.play();
        //      }
        //     else
        //      {
        //        $(this).removeClass('fa-pause');
        //        $(this).addClass('fa-play');
        //        audio.pause();
        //      }
        //   });
          
        //   audio.onended = function() {
        //        $("#play-pause-button").removeClass('fa-pause');
        //        $("#play-pause-button").addClass('fa-play');
        //   };
        audio.pause();
    }

    /*------------------------------------------
        = FUNCTIONS
    -------------------------------------------*/
    // Check ie and version
    function isIE () {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1], 10) : false;
    }


    // Active current section
    (function() {
        // var navLinks = $("#navbar > ul > li > a[href^='#']");
        var navLinks = $(".navlinks > a[href^='#']");
        var section = $(".page-wrapper > section");

        navLinks.on("click", function() {
            var $this = $(this);
            var herf = $this.attr("href").substring(1);

            $this.parent("li").addClass("active").siblings().removeClass("active");

            section.each(function() {
                var currentSection = $(this);
                if (herf === currentSection.attr("id")) {
                    if (!currentSection.hasClass("current-section")) {
                        currentSection.addClass("current-section sectionSlideIn");

                        // Only for ie < 10
                        if (isIE () && isIE () < 10) {
                            currentSection.find(".section-holder").css({
                                opacity: "1"
                            }).find(".container").css({
                                opacity: "1"
                            }).find(".row").css({
                                opacity: "1"
                            }).find(".col").css({
                                opacity: "1"
                            }).find(".rsvp-form-wrapper").css({
                                opacity: "1"
                            })
                        }
                        // Only for ie < 10
                    }

                    $(this).siblings().removeClass("current-section sectionSlideIn");
                }

            });

            return false;
        });

    }());



    // Function for Toggle mobile navigation
    function toggleMobileNav() {
        var navbar = $("#navbar");
        var navLinks = $("#navbar > ul > li > a[href^='#']");
        var openBtn = $(".navbar-header .open-btn");
        var closeBtn = $("#navbar .close-navbar");

        openBtn.on("click", function() {
            if (!navbar.hasClass("slideInn")) {
                navbar.addClass("slideInn");
            }
            return false;
        })

        closeBtn.on("click", function() {
            if (navbar.hasClass("slideInn")) {
                navbar.removeClass("slideInn");
            }
            return false;            
        })

        navLinks.on("click", function() {
            if (navbar.hasClass("slideInn")) {
                navbar.removeClass("slideInn");
            }
            return false;            
        })
    }

    toggleMobileNav();


    // Hero section bg setting
    function heroBgSetting() {
        if ($(".hero-holder .hero-img").length) {
            $(".hero-holder .hero-img").each(function() {
                var $this = $(this);
                var img = $this.children(img);
                var imgSrc = img.attr("src");

                $this.css({
                    backgroundImage: "url("+ imgSrc +")",
                    backgroundSize: "cover",
                    backgroundPosition: "left center"
                    // backgroundPosition: "center center"
                })

            });
        }
    }

    // Function for section bg image
    function sectionBg() {
        if ($(".section-bg").length) {
            $(".section-bg").each(function() {
                var $this = $(this);
                var img = $this.data("bg-image");

                $this.css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
                });
            });
        }
    }


    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function() {

                //active wow
                wow.init();
            });
        }
    }


    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    });


    /*------------------------------------------
        = BIGDAY COUNTDOWN
    -------------------------------------------*/
    // Only apply for less then ie 10
    if($(".count-down").length) {
        var contdownBox = $(".count-down");
        if (isIE () && isIE () < 10) {
            contdownBox.css({
                opacity: "1"
            })
        }
    }
    // Only apply for less then ie 10


    if ($("#clock").length) {
        $('#clock').countdown('2018/08/17', function(event) {
            var $this = $(this).html(event.strftime(''
            + '<div class="box"><div>%D</div> <span>Days</span> </div>'
            + '<div class="box"><div>%H</div> <span>Hours</span> </div>'
            + '<div class="box"><div>%M</div> <span>Minutes</span> </div>'
            + '<div class="box"><div>%S</div> <span>Seconds</span> </div>'));
        });
    }


    /*------------------------------------------
        = THE WEDDING
    -------------------------------------------*/
    function eventClothFadeOut() {
        if ($(".events .event-boxes").length) {
            var eventBoxes = $('.event-boxes');
            var leftHalf = eventBoxes.find(".left-half");
            var rightHalf = eventBoxes.find(".right-half");
            var clip = eventBoxes.find(".clip");
            
            // If not ie and ie < 10 then do
            if (isIE () && !isIE () < 10) {
                leftHalf.css({
                    left: "-100%"
                });
                rightHalf.css({
                    right: "-100%"
                });

                clip.css({
                    opacity: 0
                })
            } else { // Not ie or geter than ie 10
                leftHalf.css({
                    left: 0
                });
                rightHalf.css({
                    right: 0
                });
            }
        };
    }

    eventClothFadeOut();


    /*------------------------------------------
        = ACTIVE GROOMSMEN SLIDER
    -------------------------------------------*/
    if ($(".groomsmen-slider").length) {
        $(".groomsmen-slider").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
            dots: false,
            mouseDrag: false
        });
    }


    /*------------------------------------------
        = ACTIVE BRIDESMAIDS SLIDER
    -------------------------------------------*/
    if ($(".bridesmaids-slider").length) {
        $(".bridesmaids-slider").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
            dots: false,
            mouseDrag: false
        });
    }



    /*------------------------------------------
        = ACTIVE FANCYBOX
    -------------------------------------------*/  
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect  : "elastic",
            closeEffect : "elastic",
            wrapCSS     : "project-fancybox-title-style"
        });
    }


    /*------------------------------------------
        = MASONRY GALLERY SETTING
    -------------------------------------------*/
    function masonryGridSetting() {
        if ($('.masonry-gallery').length) {
            var $grid =  $('.masonry-gallery').masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                percentPosition: true
            });

            $grid.imagesLoaded().progress( function() {
                $grid.masonry('layout');
            });
        }
    }

    masonryGridSetting();


    /*------------------------------------------
        = GOOGLE MAP
    -------------------------------------------*/  
    function map() {

        var locations = [
            ['Eglise Notre-Dame de l’Assomption ', 48.482372, 2.347270],
            ['Mairie Bezons', 48.929423, 2.215711],
            ['Yatch Club', 48.566430, 2.501438],
        ];

        var map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(48.736393, 2.311860),
            zoom: 9,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {  
                marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon:'images/map-marker.png'
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    }; 


    /*------------------------------------------
        = JOURNAL MODAL POPUP
    -------------------------------------------*/  
    if($('.modal').length) {
        $('.modal').appendTo("body");
    }


    /*------------------------------------------
        = RSVP FORM SUBMISSION
    -------------------------------------------*/  
    if ($("#rsvp-form").length) {
        $("#rsvp-form").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: "required",
                
                guest: {
                    required: true
                },
                
                events: {
                    required: true
                }

            },

            messages: {
                name: "Please enter your name",
                email: "Please enter your email",
                guest: "Select your number of guest",
                events: "Select your event list"
            },

            submitHandler: function (form) {
                $("#loader").css("display", "inline-block");
                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: $(form).serialize(),
                    success: function () {
                        $( "#loader").hide();
                        $( "#success").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#success").slideUp( "slow" );
                        }, 3000);
                        form.reset();
                    },
                    error: function() {
                        $( "#loader").hide();
                        $( "#error").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#error").slideUp( "slow" );
                        }, 3000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }

        });
    }


    /*==========================================================================
        WHEN DOCUMENT LOADING 
    ==========================================================================*/
    $(window).on('load', function() {
        preloader();

        heroBgSetting();

        sectionBg();

        masonryGridSetting();

        if ($(".map").length) {
            map();
        } 
    });

})(window.jQuery);
