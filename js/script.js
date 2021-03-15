//Soluzione con Mouse enter e Mouse Leave
// $(".main-nav li").mouseenter(function() {
//   $(this).children(".dropdown-menu").slideDown("fast");
// });
//
// $(".main-nav li").mouseleave(function() {
//   $(this).children(".dropdown-menu").slideUp("fast");
// });


//Soluzione al Click
// $(".main-nav li").click(function() {
//   $(".dropdown-menu").slideUp("fast");
//   $(this).children(".dropdown-menu").slideToggle("fast");
// });


//Soluzione con CSS
var menu = $(".dropdown-menu");

$(".main-nav li").click(function() {
  if (menu.hasClass("active")) {
    menu.removeClass("active");
  }
  $(this).children(menu).addClass("active");
});
