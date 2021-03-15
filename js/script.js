//Soluzione con Mouse enter e Mouse Leave
// $(".main-nav li").mouseenter(function() {
//   $(this).children(".dropdown-menu").slideDown("fast");
// });
//
// $(".main-nav li").mouseleave(function() {
//   $(this).children(".dropdown-menu").slideUp("fast");
// });


//Soluzione al Click
$(".main-nav li").click(function() {
  $(".dropdown-menu").slideUp("fast");
  $(this).children(".dropdown-menu").slideToggle("fast");
});
