$(document).ready(function() {
  
  $(window).scroll(function () { 
      //console.log($(window).scrollTop())
    if ($(window).scrollTop() > 799) {
      $('#navbar').addClass('sticky');
      $('body').css('padding-top', '8.25vw'); 
      $('#navmargin').addClass('topblock');
    }
    if ($(window).scrollTop() < 800) {
      $('#navbar').removeClass('sticky');
      $('body').css('padding-top', '');
      $('#navmargin').removeClass('topblock');
    }
  });

$( "#codingimg" ).click(function(){
  swal( "I coded this website myself.", {
    icon: "info",
    buttons: {
      cancel: "Neat!",
      redirect: { 
        text: "Let's see your Github, hotshot.",
        value: "redirect",
      },
       },
      })
       .then((value) => {
        switch (value) {
          case "redirect":
            window.location.href ="https://github.com/timklaus"
        }
       })
});

});