$(document).ready(function() {
  
  $(window).scroll(function () { 
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 800) {
      $('#navbar').addClass('sticky');
    }
    if ($(window).scrollTop() < 801) {
      $('#navbar').removeClass('sticky');
    }
  });
});