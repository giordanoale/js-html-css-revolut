$(".main-nav li").mouseenter(function() {
  $(this).children(".dropdown-menu").slideDown("fast");
});

$(".main-nav li").mouseleave(function() {
  $(this).children(".dropdown-menu").slideUp("fast");
});
