$(document).ready(function() {
    if (window.innerHeight <= 400) { 
        window.location.href = "/about";
    }
    if (window.innerWidth <= 900) {  
        window.location.href = "/about";
    }
    $(window).on('resize', function() {
      var win = $(this); //this = window
      if (win.height() <= 400) {  
        window.location.href = "/about";
      }
      if (win.width() <= 900) { 
        window.location.href = "/about";
      }
    });
    $(".welcome").hover(function() {
        $(this).css("color", "white");
        $(".rightside").css("color", "white");
        $(".vertical").css("color", "white");
        $("#next").css("color", "white");
        $(".button").css("color", "white");
        $("html").animate({
        backgroundColor: "#ffa64d",
        color: "#ffa64d"
      }, 1000);
        $("#next").css("pointer-events", "auto");
    });
});