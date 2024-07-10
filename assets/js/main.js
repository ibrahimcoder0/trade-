/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js


****************************************************/

(function ($) {
  ('use strict');

  var windowOn = $(window);
  ////////////////////////////////////////////////////
  // 01. PreLoader Js
  windowOn.on('load', function () {
    $('#loading').fadeOut(500);
  });

  // const colorInput = document.querySelector('input[type=color]');
  // const colorVariable = '--ic-theme-1';

  // colorInput.addEventListener('change', function(e){
  // 	var clr = e.target.value;
  // 	document.documentElement.style.setProperty(colorVariable, clr);
  // })

  ////////////////////////////////////////////////////
  // 02. Mobile Menu Js
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: '991',
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });

  ////////////////////////////////////////////////////
  // 03. Sidebar Js
  $('.ic-menu-toggle').on('click', function () {
    $('.ic-sidebar-menu').addClass('opened');
    $('.body-overlay').addClass('opened');
  });
  $('.sidebar-close').on('click', function () {
    $('.ic-sidebar-menu').removeClass('opened');
    $('.body-overlay').removeClass('opened');
  });

  ////////////////////////////////////////////////////
  // 04. Body overlay Js
  $('.body-overlay').on('click', function () {
    $('.ic-sidebar-menu').removeClass('opened');
    $('.body-overlay').removeClass('opened');
  });

  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  // 01. shop filter js Start
  $('.ic-shop-filter-toggle').on('click', function () {
    $('.ic-shop-filter').addClass('opened');
    $('.body-overlay').addClass('opened');
  });
  $('.ic-shop-filter-close').on('click', function () {
    $('.ic-shop-filter').removeClass('opened');
    $('.body-overlay').removeClass('opened');
  });

  // 02. Body overlay shop filter Js
  $('.body-overlay').on('click', function () {
    $('.ic-shop-filter').removeClass('opened');
    $('.body-overlay').removeClass('opened');
  });

  // shop filter js end
  // ////////////////////
  //////////////////////
  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////

  ////////////////////////////////////////////////////
  // 05. Search Js
  $('.search-toggle').on('click', function () {
    $('.search__area').addClass('opened');
  });
  $('.search-close-btn').on('click', function () {
    $('.search__area').removeClass('opened');
  });

  // 06. Sticky Header Js
  windowOn.on('scroll', function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 50) {
      $('#header-sticky').removeClass('header-sticky');
    } else {
      $('#header-sticky').addClass('header-sticky');
    }
  });

  ////////////////////////////////////////////////////
  // 07. Data CSS Js
  $('[data-background').each(function () {
    $(this).css(
      'background-image',
      'url( ' + $(this).attr('data-background') + '  )'
    );
  });

  $('[data-width]').each(function () {
    $(this).css('width', $(this).attr('data-width'));
  });

  $('[data-bg-color]').each(function () {
    $(this).css('background-color', $(this).attr('data-bg-color'));
  });

  ////////////////////////////////////////////////////
  // 07. Nice Select Js
  $('select').niceSelect();

  // mainSlider
  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find(
        '[data-animation]'
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on(
      'beforeChange',
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.single-slider[data-slick-index="' + nextSlide + '"]'
        ).find('[data-animation]');
        doAnimations($animatingElements);
      }
    );
    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      fade: true,
      arrows: false,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
      responsive: [{}],
    });

    function doAnimations(elements) {
      var animationEndEvents =
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  $('.active-class').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //project slider start

  $('.ic-client-offer-active').slick({
    centerMode: true,
    centerPadding: '150px',
    slidesToShow: 3,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '150px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
    ],
  });

  //Testimonial slider start

  $('.testimonial-active').slick({
    slidesToShow: 3,
    prevArrow: '<span><i class="fa-light fa-arrow-left"></i></span>',
    nextArrow:
      '<span class="testi-icon-slider"><i class="fa-regular fa-arrow-right"></i></span>',
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // Blog Area slider in Home page
  $('.blog-active').slick({
    slidesToShow: 3,
    prevArrow: '<i class="ic-left fa-light fa-arrow-left"></i>',
    nextArrow: '<i class="ic-right fa-regular fa-arrow-right"></i>',
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // Blog Area slider in Home page
  $('.instragram-active').slick({
    slidesToShow: 3,
    prevArrow: '<i class="ic-left fa-light fa-arrow-left"></i>',
    nextArrow: '<i class="ic-right fa-regular fa-arrow-right"></i>',
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  ////////////////////////////////////////////////////
  // 08. slider__active Slider Js
  if (jQuery('.slider__active').length > 0) {
    let sliderActive1 = '.slider__active';
    let sliderInit1 = new Swiper(sliderActive1, {
      // Optional parameters
      slidesPerView: 1,
      slidesPerColumn: 1,
      paginationClickable: true,
      loop: true,
      effect: 'fade',

      autoplay: {
        delay: 5000,
      },

      // If we need pagination
      pagination: {
        el: '.main-slider-paginations',
        // dynamicBullets: true,
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      a11y: false,
    });

    function animated_swiper(selector, init) {
      let animated = function animated() {
        $(selector + ' [data-animation]').each(function () {
          let anim = $(this).data('animation');
          let delay = $(this).data('delay');
          let duration = $(this).data('duration');

          $(this)
            .removeClass('anim' + anim)
            .addClass(anim + ' animated')
            .css({
              webkitAnimationDelay: delay,
              animationDelay: delay,
              webkitAnimationDuration: duration,
              animationDuration: duration,
            })
            .one(
              'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
              function () {
                $(this).removeClass(anim + ' animated');
              }
            );
        });
      };
      animated();
      // Make animated when slide change
      init.on('slideChange', function () {
        $(sliderActive1 + ' [data-animation]').removeClass('animated');
      });
      init.on('slideChange', animated);
    }

    animated_swiper(sliderActive1, sliderInit1);
  }

  var sliderr = new Swiper('.active-class', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.testimonial-pagination-6',
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          '<button>' +
          (index + 1) +
          '</button>' +
          '</span>'
        );
      },
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  var postboxSlider = new Swiper('.postbox__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.postbox-slider-button-next',
      prevEl: '.postbox-slider-button-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  ////////////////////////////////////////////////////
  // 13. Masonary Js
  $('.grid').imagesLoaded(function () {
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item',
      },
    });

    // filter items on button click
    $('.masonary-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $('.masonary-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  });

  /* magnificPopup img view */
  $('.popup-image').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $('.popup-video').magnificPopup({
    type: 'iframe',
  });

  ////////////////////////////////////////////////////
  // 14. Wow Js
  new WOW().init();

  ////////////////////////////////////////////////////
  // 16. Cart Quantity Js
  $('.cart-minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.cart-plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  ////////////////////////////////////////////////////
  // 17. Show Login Toggle Js
  $('.ic-checkout-login-form-reveal-btn').on('click', function () {
    $('#icReturnCustomerLoginForm').slideToggle(400);
  });

  ////////////////////////////////////////////////////
  // 18. Show Coupon Toggle Js
  $('.ic-checkout-coupon-form-reveal-btn').on('click', function () {
    $('#icCheckoutCouponForm').slideToggle(400);
  });
  ////////////////////////////////////////////////////
  // 18. Show checkout payment Toggle Js
  $('.ic-checkout-payment-item label').on('click', function () {
    $(this).siblings('.ic-checkout-payment-desc').slideToggle(400);
  });

  ////////////////////////////////////////////////////
  // 19. Create An Account Toggle Js
  $('#cbox').on('click', function () {
    $('#cbox_info').slideToggle(900);
  });

  ////////////////////////////////////////////////////
  // 20. Shipping Box Toggle Js
  $('#ship-box').on('click', function () {
    $('#ship-box-info').slideToggle(1000);
  });

  ////////////////////////////////////////////////////
  // 21. Counter Js
  $('.counter').counterUp({
    delay: 10,
    time: 1000,
  });

  // 17. Counter Js
  new PureCounter();
  new PureCounter({
    filesizing: true,
    selector: '.filesizecount',
    pulse: 2,
  });

  ////////////////////////////////////////////////////
  // 13. Smooth Scroll Js
  function smoothSctoll() {
    $('.smooth a').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body')
          .stop()
          .animate(
            {
              scrollTop: target.offset().top - 120,
            },
            1500
          );
      }
    });
  }
  smoothSctoll();

  ////////////////////////////////////////////////////
  // 22. Parallax Js
  if ($('.scene').length > 0) {
    $('.scene').parallax({
      scalarX: 10.0,
      scalarY: 15.0,
    });
  }

  ////////////////////////////////////////////////////
  // 23. InHover Active Js
  $('.hover__active').on('mouseenter', function () {
    $(this)
      .addClass('active')
      .parent()
      .siblings()
      .find('.hover__active')
      .removeClass('active');
  });

  ////////////////////////////////////////////////////
  // 21. Password Toggle Js
  if ($('#password-show-toggle').length > 0) {
    var btn = document.getElementById('password-show-toggle');

    btn.addEventListener('click', function (e) {
      var inputType = document.getElementById('ic_password');
      var openEye = document.getElementById('open-eye');
      var closeEye = document.getElementById('close-eye');

      if (inputType.type === 'password') {
        inputType.type = 'text';
        openEye.style.display = 'block';
        closeEye.style.display = 'none';
      } else {
        inputType.type = 'password';
        openEye.style.display = 'none';
        closeEye.style.display = 'block';
      }
    });
  }

  // for header language
  if ($('#ic-header-lang-toggle').length > 0) {
    window.addEventListener('click', function (e) {
      if (document.getElementById('ic-header-lang-toggle').contains(e.target)) {
        $('.ic-header-lang ul').toggleClass('ic-lang-list-open');
      } else {
        $('.ic-header-lang ul').removeClass('ic-lang-list-open');
      }
    });
  }

  // for header search
  if ($('#ic-header-search-toggle').length > 0) {
    window.addEventListener('click', function (e) {
      if (
        document.getElementById('ic-header-search-toggle').contains(e.target)
      ) {
        $('.ic-header-search-popup span').toggleClass('ic-search-list-open');
      } else {
        $('.ic-header-search-popup button').removeClass('ic-search-list-open');
      }
    });
  }

  // for header account
  if ($('#ic-header-account-toggle').length > 0) {
    window.addEventListener('click', function (e) {
      if (
        document.getElementById('ic-header-account-toggle').contains(e.target)
      ) {
        $('.ic-header-account ul').toggleClass('ic-account-list-open');
      } else {
        $('.ic-header-account ul').removeClass('ic-account-list-open');
      }
    });
  }

  ////////////////////////////////////////////////////
  // 03. Sidebar Js
  $('.cartmini-open-btn').on('click', function () {
    $('.cartmini__area').addClass('cartmini-opened');
    $('.body-overlay').addClass('opened');
  });
  $('.cartmini-close-btn').on('click', function () {
    $('.cartmini__area').removeClass('cartmini-opened');
    $('.body-overlay').removeClass('opened');
  });

  ////////////////////////////////////////////////////
  // 04. Body overlay Js
  $('.body-overlay').on('click', function () {
    $('.cartmini__area').removeClass('cartmini-opened');
    $('.body-overlay').removeClass('opened');
  });

  /* Price filter active */
  		$('#slider-range').slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
          $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
        },
      });
      $('#amount').val(
        '$' +
          $('#slider-range').slider('values', 0) +
          ' - $' +
          $('#slider-range').slider('values', 1)
  );
  
    //mobile price filter
    		$('#mobile-slider-range').slider({
          range: true,
          min: 0,
          max: 500,
          values: [75, 300],
          slide: function (event, ui) {
            $('#mobile_amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
          },
        });
        $('#mobile_amount').val(
          '$' +
            $('#mobile-slider-range').slider('values', 0) +
            ' - $' +
            $('#mobile-slider-range').slider('values', 1)
        );


  // if ($('#slider-range').length) {
  //   $('#slider-range').slider({
  //     range: true,

  //     min: 0,

  //     max: 500,

  //     values: [75, 300],

  //     slide: function (event, ui) {
  //       $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
  //     },
  //   });

  //   $('#amount').val(
  //     '$' +
  //       $('#slider-range').slider('values', 0) +
  //       ' - $' +
  //       $('#slider-range').slider('values', 1)
  //   );

  //   $('#filter-btn').on('click', function () {
  //     $('.filter-widget').slideToggle(1000);
  //   });
  // }

  ////////////////////////////////////////////////////
  // 13. Swiper Js
  const postboxswiper = new Swiper('.postbox__thumb-slider-active', {
    // Optional parameters
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    autoplay: true,
    spaceBetween: 0,
    centeredSlides: true,
    breakpoints: {
      1600: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },

      a11y: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.postbox-arrow-prev',
      prevEl: '.postbox-arrow-next',
    },
  });

  // Product Details
  // ===============
  $('#zoom_02').ezPlus({
    zoomType: 'lens',
    lensShape: 'round',
    lensSize: 200,
  });
  $('#zoom_03').ezPlus({
    zoomType: 'lens',
    lensShape: 'round',
    lensSize: 200,
  });
  $('#zoom_04').ezPlus({
    zoomType: 'lens',
    lensShape: 'round',
    lensSize: 200,
  });
  $('#zoom_05').ezPlus({
    zoomType: 'lens',
    lensShape: 'round',
    lensSize: 200,
  });
})(jQuery);
