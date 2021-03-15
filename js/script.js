$(".main-nav li").mouseenter(function() {
  $(this).children(".dropdown-menu").slideDown();
});

$(".main-nav li").mouseleave(function() {
  $(this).children(".dropdown-menu").slideUp();
});
