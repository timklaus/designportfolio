$(document).ready(function() {
  $(window).scroll(function () { 
    if ($(window).width()<1366) {
      console.log("fixed background attachment")
      if ($(window).scrollTop() > 1799) {
        $('#navbar').addClass('sticky');
        $('body').css('padding-top', '8.25vw'); 
        $('#navmargin').addClass('topblock');
      }
      if ($(window).scrollTop() < 1800) {
        $('#navbar').removeClass('sticky');
        $('body').css('padding-top', '');
        $('#navmargin').removeClass('topblock');
      }
    }
    else {
      console.log("fixed background attachment")
      if ($(window).scrollTop() > 999) {
        $('#navbar').addClass('sticky');
        $('body').css('padding-top', '8.25vw'); 
        $('#navmargin').addClass('topblock');
      }
      if ($(window).scrollTop() < 1000) {
        $('#navbar').removeClass('sticky');
        $('body').css('padding-top', '');
        $('#navmargin').removeClass('topblock');
      }
    }
  });

  $('#mailicon').click(function(){
    console.log("It has been clicked")
    window.location.href = "mailto:tjklaus91@gmail.com"  
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