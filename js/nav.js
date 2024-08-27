$(document).ready(function () {
  // Cache the navbar and toggler elements
  const $navbar = $(".navbar");
  const $navbarToggler = $(".navbar-toggler");

  // Function to handle background color change
  function updateNavbarBackground() {
    if (
      $navbar.hasClass("scrolled") ||
      $navbarToggler.attr("aria-expanded") === "true"
    ) {
      $navbar.addClass("navbar-white");
    } else {
      $navbar.removeClass("navbar-white");
    }
  }

  // Listen for scroll events
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $navbar.addClass("scrolled");
    } else {
      $navbar.removeClass("scrolled");
    }
    updateNavbarBackground();
  });

  // Listen for navbar toggler click
  $navbarToggler.click(function () {
    updateNavbarBackground();
  });

  // Initial check when the page loads
  updateNavbarBackground();
});
