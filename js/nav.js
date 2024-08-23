$(document).ready(function () {
  // Cache the navbar element
  const $navbar = $(".navbar");

  // Listen for scroll events
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 56) {
      // Adjust the scroll value as needed
      $navbar.addClass("scrolled");
    } else {
      $navbar.removeClass("scrolled");
    }
  });

  // Add smooth scrolling to nav links
  $(".nav-link").on("click", function (event) {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Get the target section from data attribute
    var target = $(this).data("target");
    var $target = $(target);

    // Animate scroll
    $("html, body").stop().animate(
      {
        scrollTop: $target.offset().top,
      },
      500,
      "swing"
    );
  });
});
