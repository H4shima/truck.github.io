$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $("#toTop").fadeIn();
  } else {
    $("#toTop").fadeOut();
  }
});

$(document).on("click", "#toTop", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1500, 'linear');
  });
});