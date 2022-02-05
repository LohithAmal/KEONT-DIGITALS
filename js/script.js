// *************PRELOADER ******************
$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
});

// team section

$(function () {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
  });
});

// progressbars

// $(function () {
//   $("#progress-elements").waypoint(function () {
//     alert("reach progress");
//   });
//   // $(".progress-bar").each(function () {
//   //   $(this).animate(
//   //     {
//   //       width: $(this).attr("aria-valuenow") + "%",
//   //     },
//   //     1000
//   //   );
// });
$(function () {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          1000
        );
      });
      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );
});
