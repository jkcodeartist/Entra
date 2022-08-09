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

document.getElementById("btnFullscreen").addEventListener("click", function() {
  toggleFullscreen();
});

//--------------------------------------------------------------------------------

$(window).on("load resize", function() {
  if ($(window).width() <= 1199) {
    $(".control-panel-load").replaceWith($(".control-panel"));
  }
});

//--------------------------------------------------------------------------------

$('a[href="#search"]').click(function() {
  event.preventDefault();
  $("#search-box").addClass("-open");
  setTimeout(function() {
    inputSearch.focus();
  }, 800);
});

$('a[href="#close"]').click(function() {
  event.preventDefault();
  $("#search-box").removeClass("-open");
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    // escape key maps to keycode `27`
    $("#search-box").removeClass("-open");
  }
});

//--------------------------------------------------------------------------------
$(document).ready(function() {
  $(".burgermenu").click(function() {
    $(this).toggleClass("open");
    $("aside").toggleClass("open");
  });
});

//---Drag and Drop File Uploading-----------------------------------------------------------------------------
function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      var htmlPreview =
        '<img width="200" src="' +
        e.target.result +
        '" />' +
        "<p>" +
        input.files[0].name +
        "</p>";
      var wrapperZone = $(input).parent();
      var previewZone = $(input)
        .parent()
        .parent()
        .find(".preview-zone");
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
  e.wrap("<form>")
    .closest("form")
    .get(0)
    .reset();
  e.unwrap();
}

$(".dropzone").change(function() {
  readFile(this);
});

$(".dropzone-wrapper").on("dragover", function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).addClass("dragover");
});

$(".dropzone-wrapper").on("dragleave", function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).removeClass("dragover");
});

$(".remove-preview").on("click", function() {
  var boxZone = $(this)
    .parents(".preview-zone")
    .find(".box-body");
  var previewZone = $(this).parents(".preview-zone");
  var dropzone = $(this)
    .parents(".form-group")
    .find(".dropzone");
  boxZone.empty();
  previewZone.addClass("hidden");
  reset(dropzone);
});
