function toggleFullscreen(elem) {
  elem = elem || document.documentElement;
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

document.getElementById("btnFullscreen").addEventListener("click", function () {
  toggleFullscreen();
});

//--------------------------------------------------------------------------------

// $(window).on("load resize", function() {
//   if ($(window).width() <= 1199) {
//     $(".control-panel-load").replaceWith($(".control-panel"));
//   }
// });

if ($(window).width() <= 1199) {
  $(".search-box").hide();
  $(".control-panel").click(function () {
    $(".control-panel").toggleClass("active", 1000);
    $(".search-box").slideToggle();
  });
}

//--------------------------------------------------------------------------------

$('a[href="#search"]').click(function () {
  event.preventDefault();
  $("#search-box").addClass("-open");
  setTimeout(function () {
    inputSearch.focus();
  }, 800);
});

$('a[href="#close"]').click(function () {
  event.preventDefault();
  $("#search-box").removeClass("-open");
});

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    // escape key maps to keycode `27`
    $("#search-box").removeClass("-open");
  }
});

//--------------------------------------------------------------------------------
$(document).ready(function () {
  $(".burgermenu").click(function () {
    $(this).toggleClass("open");
    $("aside").toggleClass("open");
  });
});

//---Drag and Drop File Uploading-----------------------------------------------------------------------------
function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var htmlPreview =
        '<img width="200" src="' +
        e.target.result +
        '" />' +
        "<p>" +
        input.files[0].name +
        "</p>";
      var wrapperZone = $(input).parent();
      var previewZone = $(input).parent().parent().find(".preview-zone");
      var boxZone = $(input)
        .parent()
        .parent()
        .find(".preview-zone")
        .find(".box")
        .find(".box-body");

      wrapperZone.removeClass("dragover");
      previewZone.removeClass("hidden");
      boxZone.empty();
      boxZone.append(htmlPreview);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function reset(e) {
  e.wrap("<form>").closest("form").get(0).reset();
  e.unwrap();
}

$(".dropzone").change(function () {
  readFile(this);
});

$(".dropzone-wrapper").on("dragover", function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).addClass("dragover");
});

$(".dropzone-wrapper").on("dragleave", function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).removeClass("dragover");
});

$(".remove-preview").on("click", function () {
  var boxZone = $(this).parents(".preview-zone").find(".box-body");
  var previewZone = $(this).parents(".preview-zone");
  var dropzone = $(this).parents(".form-group").find(".dropzone");
  boxZone.empty();
  previewZone.addClass("hidden");
  reset(dropzone);
});

//---Profile Image Uploading-----------------------------------------------------------------------------
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#imagePreview").css(
        "background-image",
        "url(" + e.target.result + ")"
      );
      $("#imagePreview").hide();
      $("#imagePreview").fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function () {
  readURL(this);
});

//---Profile COVER Uploading-----------------------------------------------------------------------------
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#imagePreview1").css(
        "background-image",
        "url(" + e.target.result + ")"
      );
      $("#imagePreview1").hide();
      $("#imagePreview1").fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload1").change(function () {
  readURL(this);
});

//---Profile Image2 Uploading-----------------------------------------------------------------------------
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#imagePreview2").css(
        "background-image",
        "url(" + e.target.result + ")"
      );
      $("#imagePreview2").hide();
      $("#imagePreview2").fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload2").change(function () {
  readURL(this);
});

//---Slider -----------------------------------------------------------------------------
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  arrows: false,
  focusOnSelect: true,
  verticalSwiping: true,
  vertical: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        vertical: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        vertical: false,
      },
    },
    {
      breakpoint: 580,
      settings: {
        vertical: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 380,
      settings: {
        vertical: false,
        slidesToShow: 2,
      },
    },
  ],
});
