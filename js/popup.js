$(document).ready(function () {
  const $logos = $(".tech-partners img");

  function checkVisibility() {
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    $logos.each(function () {
      const $this = $(this);
      const elementTop = $this.offset().top;
      const elementHeight = $this.height();

      // Calculate the middle of the viewport and the element
      const elementMiddle = elementTop + elementHeight / 2;

      // Check if the element's middle is within the viewport middle
      if (
        elementMiddle > scrollTop &&
        elementMiddle < scrollTop + windowHeight
      ) {
        $this.addClass("pop-up");
      }
    });
  }

  $(window).on("scroll", checkVisibility);
  checkVisibility(); // Initial check in case elements are already in view
});
