$(document).ready(function () {

    new WOW().init();




    // banner slider
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    // about video
    $('.venobox').venobox();

    // team slider
    $('.team-slider').slick({
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: false,
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                }
              },
              {
                breakpoint: 320,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                }
              },
          ]
    });

    // feedback slider
    $('.feedback-slider').slick({
        arrows: false,
        dots : true,
        slidesToScroll: 1,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    // fun-fact counter
    $('.counter').counterUp({
        delay: 10,
        time: 3000,
    });

    // brand slider
    $('.brand-slider').slick({
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<i class="fa-solid fa-chevron-left prevbtn"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right nextbtn"></i>',
        slidesToScroll: 1,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 5500,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
            }
          },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
              }
            },
              {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                  }
                },
          ]
    });

    // color picker
    $('.color-picker .color-icon').on('click', function(){
      $('.color-picker').toggleClass('color-picke-pos');
    });

    $('.color-picker ul .green').on('click', function(){
      $('body').addClass('green').removeClass('blue').removeClass('orange').removeClass('pink');
    });

    $('.color-picker ul .blue').on('click', function(){
      $('body').addClass('blue').removeClass('green').removeClass('orange').removeClass('pink');
    });

    $('.color-picker ul .orange').on('click', function(){
      $('body').addClass('orange').removeClass('blue').removeClass('green').removeClass('pink');
    });
    
    $('.color-picker ul .pink').on('click', function(){
      $('body').addClass('pink').removeClass('blue').removeClass('orange').removeClass('green');
    });

    $('.color-picker ul .default').on('click', function(){
      $('body').removeClass('pink').removeClass('blue').removeClass('orange').removeClass('green');
    });
  });