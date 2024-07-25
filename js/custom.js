(function ($) {
  "use strict";

  $(document).on("ready", function () {
    // -----------------------------
    //  Screenshot Slider
    // -----------------------------
    $(".speaker-slider").slick({
      slidesToShow: 3,
      centerMode: true,
      infinite: true,
      autoplay: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    // -----------------------------
    //  Count Down JS
    // -----------------------------
    $(".timer").syotimer({
      year: 2018,
      month: 12,
      day: 9,
      hour: 20,
      minute: 30,
    });
    // -----------------------------
    // To Top Init
    // -----------------------------
    $(".to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

    // -----------------------------
    // Magnific Popup
    // -----------------------------
    $(".image-popup").magnificPopup({
      type: "image",
      removalDelay: 160, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function () {
          // just a hack that adds mfp-anim class to markup
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
      closeOnContentClick: true,
      midClick: true,
      fixedContentPos: false,
      fixedBgPos: true,
    });
    // -----------------------------
    // Mixitup
    // -----------------------------
    var containerEl = document.querySelector(".gallery-wrapper");
    var mixer;
    if (containerEl) {
      mixer = mixitup(containerEl);
    }
  });
})(jQuery);

//custome scroll
// const flavoursContainer = document.getElementById("cardContainer");
// const flavoursScrollWidth = flavoursContainer.scrollWidth;

// window.addEventListener("load", () => {
//   self.setInterval(() => {
//     const first = document.querySelector(".ag-courses_box");

//     if (!isElementInViewport(first)) {
//       flavoursContainer.appendChild(first);
//       flavoursContainer.scrollTo(
//         flavoursContainer.scrollLeft - first.offsetWidth,
//         0
//       );
//     }
//     if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
//       flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
//     }
//   }, 15);
// });

// function isElementInViewport(el) {
//   var rect = el.getBoundingClientRect();
//   return rect.right > 0;
// }
