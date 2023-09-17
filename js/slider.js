$(document).ready(function(){
    var screenWidth = $(window).width();
    if (screenWidth <= 767) { // adjust this value to your desired mobile breakpoint
      $('#slider .tall-pictures__items').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
  });
  