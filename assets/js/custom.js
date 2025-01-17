(function ($) {
  "use strict";

  // * It's the best idea to write your own JS in custom.js file. So if you want to write JS with your own use this file */

  /*  ===================================
        1. On Scroll Sticky
        ======================================= */
  $(window).on("scroll", function () {
    if ($("header").hasClass("sticky-on")) {
      var stickyPlaceHolder = $("#sticky-placeholder"),
        menu = $("#navbar-wrap"),
        menuH = menu.outerHeight(),
        topbarH = $("#topbar-wrap").outerHeight() || 0,
        targrtScroll = topbarH,
        header = $("header");
      if ($(window).scrollTop() > targrtScroll) {
        header.addClass("sticky");
        stickyPlaceHolder.height(menuH);
      } else {
        header.removeClass("sticky");
        stickyPlaceHolder.height(0);
      }
    }
  });

  /*  ===================================
        5. Data Background Image
        ======================================= */
  $("[data-bg-image]").each(function () {
    const img = $(this).data("bg-image");
    $(this).css({
      backgroundImage: `url(${img})`,
    });
  });

  /*  ===================================
        6. Main Slider 
        ======================================= */

  function mainSlider() {
    var BasicSlider = $(".slider--active");

    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".slider__single:first-child").find(
        "[data-animation]",
        "[data-duration]"
      );

      doAnimations($firstAnimatingElements);
    });

    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.slider__single[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]", "[data-duration]");

        doAnimations($animatingElements);
      }
    );

    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
      arrows: false,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
          },
        },
      ],
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationDuration = $this.data("duration");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
          "animation-duration": $animationDuration,
          "-webkit-animation-duration": $animationDuration,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  /*  ===================================
        7. Parallax
        ======================================= */
  $(".parallaxie").parallaxie({
    speed: 0.9,
    offset: 0,
  });
  /*  ===================================
        8. Case Studies Carousel Active
        ======================================= */
  $(".case-active").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 800,
    prevArrow:
      '<button type="button" class="slider-prev slider-arrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slider-next slider-arrow"><i class="fas fa-angle-right"></i></button>',
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1465,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  /*  ===================================
        9. Testimonial Carousel Active
        ======================================= */
  $(".testi-active").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    prevArrow:
      '<button type="button" class="slider-prev slider-arrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slider-next slider-arrow"><i class="fas fa-angle-right"></i></button>',
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  /*  ===================================
        10 Brand Carousel Active
        ======================================= */
  $(".brand-active").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 800,
    prevArrow:
      '<button type="button" class="slider-prev slider-arrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slider-next slider-arrow"><i class="fas fa-angle-right"></i></button>',
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  /*  ===================================
        10. Review Carousel Active
        ======================================= */
  $(".review--active").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    prevArrow:
      '<button type="button" class="slider-prev slider-arrow"><i class="flaticon flaticon-previous"></i></button>',
    nextArrow:
      '<button type="button" class="slider-next slider-arrow"><i class="flaticon flaticon-next"></i></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1191,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  /*  ===================================
        12. Review Style Two Carousel Active
        ======================================= */
  $(".review-agency--active").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    prevArrow:
      '<button type="button" class="slider-prev slider-arrow"><i class="flaticon flaticon-previous"></i></button>',
    nextArrow:
      '<button type="button" class="slider-next slider-arrow"><i class="flaticon flaticon-next"></i></button>',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1191,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  /*  ===================================
        13. Mobile Burger Menu Bar
        ======================================= */
  $(".sidebarBtn").on("click", function (e) {
    e.preventDefault();
    if ($(".rt-slide-nav").is(":visible")) {
      $(".rt-slide-nav").slideUp();
      $("body").removeClass("slidemenuon");
    } else {
      $(".rt-slide-nav").slideDown();
      $("body").addClass("slidemenuon");
    }
  });

  /*  ===================================
        Mobile Menu Dropdown
        ======================================= */
  // var a = $(".offscreen-navigation .menu");

  // if (a.length) {
  //   a.children("li").addClass("menu-item-parent");
  //   a.find(".menu-item-has-children > a").on("click", function (e) {
  //     e.preventDefault();
  //     $(this).toggleClass("opened");
  //     var n = $(this).next(".sub-menu"),
  //       s = $(this).closest(".menu-item-parent").find(".sub-menu");
  //     a.find(".sub-menu").not(s).slideUp(250).prev("a").removeClass("opened"),
  //       n.slideToggle(250);
  //   });
  //   a.find(".menu-item:not(.menu-item-has-children) > a").on(
  //     "click",
  //     function (e) {
  //       $(".rt-slide-nav").slideUp();
  //       $("body").removeClass("slidemenuon");
  //     }
  //   );
  // }

  /*  ===================================
        Just On Sticky
        ======================================= */
  // $(window).on("scroll", function () {
  //   var scroll = $(window).scrollTop();
  //   if (scroll < 103) {
  //     $(".sticky-header").removeClass("IsSticky animated fadeInDown wow");
  //   } else {
  //     $(".sticky-header").addClass("IsSticky animated fadeInDown wow");
  //   }
  //   if ($(window).width() < 991) {
  //     $(".sticky-header").removeClass("IsSticky animated fadeInDown wow");
  //   }
  // });

  /*  Wow Animation Active
        ======================================= */

  new WOW().init();

  /*  ===================================
        Hover Tilt Effect
        ======================================= */

  var tiltBlock = $(".js-tilt");
  if (tiltBlock.length) {
    $(".js-tilt").tilt({
      glare: true,
      maxGlare: 0.4,
    });
  }

  /*  ===================================
        Hover Bubble Effect
        ======================================= */

  $(".animted-bg-wrap").on("mouseenter", function (e) {
    var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    if ($(this).find(".animted-bg-wrap .animted-bg")) {
      $(".animted-bg-wrap .animted-bg").css({
        top: relY,
        left: relX,
      });
    }
  });
  $(".animted-bg-wrap").on("mouseout", function (e) {
    var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    if ($(this).find(".animted-bg-wrap .animted-bg")) {
      $(".animted-bg-wrap .animted-bg").css({
        top: relY,
        left: relX,
      });
    }
  });

  /*  ===================================
        On Scroll Counter Count
        ======================================= */
  var counterContainer = $(".counter-number");
  if (counterContainer.length) {
    counterContainer.counterUp({
      delay: 50,
      time: 5000,
    });
  }

  /*  ===================================
        Off Canvas
        ======================================= */
  $("#wrapper").on("click", ".offcanvas-menu-btn", function (e) {
    e.preventDefault();
    var $this = $(this),
      wrapper = $(this).parents("body").find(">#wrapper"),
      wrapMask = $("<div />").addClass("offcanvas-mask"),
      offCancas = $("#offcanvas-wrap"),
      position = offCancas.data("position") || "right";

    if ($this.hasClass("menu-status-open")) {
      wrapper.addClass("open").append(wrapMask);
      $this.removeClass("menu-status-open").addClass("menu-status-close");
      offCancas.css({
        transform: "translateX(0)",
      });
    } else {
      removeOffcanvas();
    }

    function removeOffcanvas() {
      wrapper.removeClass("open").find("> .offcanvas-mask").remove();
      $this.removeClass("menu-status-close").addClass("menu-status-open");
      if (position === "right") {
        offCancas.css({
          transform: "translateX(105%)",
        });
      } else {
        offCancas.css({
          transform: "translateX(105%)",
        });
      }
    }
    $(".offcanvas-mask, .offcanvas-close").on("click", function () {
      removeOffcanvas();
    });

    return false;
  });

  /*  ===================================
        Hover Animation Another
        ======================================= */
  $(".multi-side-hover").each(function () {
    $(this).hoverdir({
      hoverDelay: 5,
    });
  });

  /*  ===================================
        Nice Select for Option
        ======================================= */
  $("select").niceSelect();

  /*  ===================================
        Page Progress Bottom To Top
        ======================================= */
  if ($(".progress-wrap").length) {
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate(
        {
          scrollTop: 0,
        },
        duration
      );
      return false;
    });
  }

  /*  ===================================
        Contact Form Response
        ======================================= */
  var contactForm = $("#contact-form");
  if (contactForm.length) {
    contactForm.on("submit", function (e) {
      var $this = $(this),
        $target = contactForm.find(".form-response");
      if (e.isDefaultPrevented()) {
        $target.html(
          "<div class='alert alert-success'><p>Please select all required field.</p></div>"
        );
      } else {
        $.ajax({
          url: "assets/php/mailer.php",
          type: "POST",
          data: contactForm.serialize(),
          beforeSend: function () {
            $target.html(
              "<div class='alert alert-info'><p>Loading ...</p></div>"
            );
          },
          success: function (text) {
            if (text === "success") {
              $this[0].reset();
              $target.html(
                "<div class='alert alert-success'><p>Message has been sent successfully.</p></div>"
              );
            } else {
              $target.html(
                "<div class='alert alert-success'><p>" + text + "</p></div>"
              );
            }
          },
        });
        return false;
      }
    });
  }

  let getDivs = document.querySelectorAll(".progress-bar");

  getDivs.forEach(function (skillbar) {
    let data = skillbar.getAttribute("data-width");
    skillbar.style.width = data;
  });

  // isotop
  $(".grid").imagesLoaded(function () {
    // init Isotope
    let $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      transitionDuration: ".6s",
      hiddenStyle: {
        opacity: 0,
        transform: "scale(0.001)",
      },
      visibleStyle: {
        transform: "scale(1)",
        opacity: 1,
      },
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item",
      },
    });
    // filter items on button click
    $(".case-menu").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
      });
    });
  });
  //for menu active class
  $(".case-menu button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });
  // isotop
  $(".case-masonry").imagesLoaded(function () {
    // init Isotope
    let $grid = $(".case-masonry").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item",
      },
    });
  });

  /*-------------------------------------
  Jquery Serch Box
  -------------------------------------*/
  $('a[href="#template-search"]').on("click", function (event) {
    event.preventDefault();
    var target = $("#template-search");
    target.addClass("open");
    setTimeout(function () {
      target.find("input").focus();
    }, 700);
    return false;
  });

  $(
    "#template-search, #template-search .close, #template-search .eltdf-hm-lines"
  ).on("click keyup", function (event) {
    if (
      event.target === this ||
      event.target.className === "close" ||
      event.target.className === "eltdf-hm-lines" ||
      event.keyCode === 27
    ) {
      $(this).removeClass("open");
    }
  });

  // CustomHeader
  $(".sticky-header").addClass("sticky-on");
})(jQuery);

(function( $ ){

  $.fn.parallaxie = function( options ){

      options = $.extend({
          speed: 0.2,
          repeat: 'no-repeat',
          size: 'cover',
          pos_x: 'center',
          offset: 0,
      }, options );

      this.each(function(){

          var $el = $(this);
          var local_options = $el.data('parallaxie');
          if( typeof local_options !== 'object' ) local_options = {};
          local_options = $.extend( {}, options, local_options );

          var image_url = $el.data('image');
          if( typeof image_url === 'undefined' ){
              image_url = $el.css('background-image');
              if( !image_url ) return;

              // APPLY DEFAULT CSS
              var pos_y =  local_options.offset + ($el.offset().top - $(window).scrollTop()) * (1 - local_options.speed );
              $el.css({
                  'background-image': image_url,
                  'background-size': local_options.size,
                  'background-repeat': local_options.repeat,
                  'background-attachment': 'fixed',
                  'background-position': local_options.pos_x + ' ' + pos_y + 'px',
              });


              // Call by default for the first time on initialization.
              parallax_scroll( $el, local_options );

              // Call by whenever the scroll event occurs.
              $(window).scroll( function(){
                  parallax_scroll( $el, local_options );
              });

          }
      });

      return this;
  };


  function parallax_scroll( $el, local_options ){
      var pos_y =  local_options.offset + ($el.offset().top - $(window).scrollTop()) * (1 - local_options.speed );
      $el.data( 'pos_y', pos_y );
      $el.css( 'background-position', local_options.pos_x + ' ' + pos_y + 'px' );
  }

}( jQuery ));