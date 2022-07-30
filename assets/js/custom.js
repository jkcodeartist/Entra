// SCROLL SCRIPT----------------------------

$(window).scroll(function() {
  if ($(this).scrollTop() > 130) {
    $(".navbar").addClass("sticky");
  } else {
    $(".navbar").removeClass("sticky");
  }
});

// END OF SCRIPT----------------------------

// SLICK SLIDER ----------------------------
$(".single-item").slick({
  infinite: true,
  arrows: false,
  dots: true,
  autoplay: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1
});

//ticking machine
var percentTime;
var tick;
var time = 1;
var progressBarIndex = 0;

$(".progressBarContainer .progressBar").each(function(index) {
  var progress = "<div class='inProgress inProgress" + index + "'></div>";
  $(this).html(progress);
});

function startProgressbar() {
  resetProgressbar();
  percentTime = 0;
  tick = setInterval(interval, 10);
}

function interval() {
  if (
    $(
      '.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]'
    ).attr("aria-hidden") === "true"
  ) {
    progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data(
      "slickIndex"
    );
    startProgressbar();
  } else {
    percentTime += 1 / (time + 5);
    $(".inProgress" + progressBarIndex).css({
      width: percentTime + "%"
    });
    if (percentTime >= 100) {
      $(".single-item").slick("slickNext");
      progressBarIndex++;
      if (progressBarIndex > 2) {
        progressBarIndex = 0;
      }
      startProgressbar();
    }
  }
}

function resetProgressbar() {
  $(".inProgress").css({
    width: 0 + "%"
  });
  clearInterval(tick);
}
startProgressbar();
// End ticking machine

$(".progressBarContainer div").click(function() {
  clearInterval(tick);
  var goToThisIndex = $(this)
    .find("span")
    .data("slickIndex");
  $(".single-item").slick("slickGoTo", goToThisIndex, false);
  startProgressbar();
});

$(".testimonial-slider").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(".partner-slider").slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
