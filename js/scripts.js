window.onscroll = function() {stickybanner()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function stickybanner() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 