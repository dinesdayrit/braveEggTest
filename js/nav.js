$(document).ready(function () {
  // Cache the navbar element
  const $navbar = $(".navbar");

  // Listen for scroll events
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 56) {
      // Adjust the scroll value as needed
      $navbar.addClass("scrolled");
      console.log("scrolling");
    } else {
      $navbar.removeClass("scrolled");
      console.log("not scrolling");
    }
  });
});
