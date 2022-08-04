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
