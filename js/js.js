//Set block container equal to the height of the page
$.fn.equalizeHeights = function() {
  return this.height(Math.max.apply(this, $(this).map(function(i, e) {
    return $(e).height()
  }).get()))
}
setInterval(function() {
  $('body, .block-container').equalizeHeights();
}, 100);

// get height and width of body
const height_c = $(".cursor").height();
const width_c = $(".cursor").width();
const cursor = document.querySelector('.cursor');
//get mouse coords
var mouseX, mouseY;
$(document).mousemove(function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
}).mouseover();
//set the pink circle center to mouse
$(document).on("click", "a", function() {
  cursor.setAttribute("style", "top: " + (mouseY - (height_c / 2)) + "px; left: " + (mouseX - (width_c / 2)) + "px");
  $(".cursor").addClass("test");
});
// delay links
$('a').click(function(e) {
  e.preventDefault();
  setTimeout(function(url) {
    window.location = url
  }, 700, this.href);
});


// nav menu
$(document).ready(function() {
  $(".menu").click(function() {
    $(".nav-expand").toggleClass("nav-open");
    $(".bit1").toggleClass("bit10");
    $(".bit2").toggleClass("bit20");
    $(".bit3").toggleClass("bit30");
  });

  $(".here").click(function() {
    $(".nav-expand").toggleClass("nav-open");
    $(".slider").toggleClass("closed");
  });

  $(".nav-link").click(function() {
    $(".nav-expand").toggleClass("nav-open");
    $(".slider").toggleClass("closed");
  });

  $(".social-button").click(function() {
    $(".social-span").toggleClass("social-open")
  })
});

function slider() {

}
