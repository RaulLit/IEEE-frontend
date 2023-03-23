var prevScrollpos = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-5rem";
  }
  prevScrollpos = currentScrollPos;
}