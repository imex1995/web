//Nav opening stuff
$(document).ready(function() {
  $(".menu").click(function() {
    $(".nav-expand").toggleClass("toggle");
  });

  $(".nav-link").click(function() {
    $(".nav-expand").slideUp(600);
  })
});


//Nav icon animation thing
var menu = document.querySelector('.menu');

function toggleMenu() {
  menu.classList.toggle('open');
}
menu.addEventListener('click', toggleMenu);
