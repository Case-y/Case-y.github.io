$(document).ready(function() {
    if (window.innerHeight <= 400) { 
        window.location.replace("/wiki");
    }
    if (window.innerWidth <= 900) {  
        window.location.replace("/wiki");
    }
    $(window).on('resize', function() {
      var win = $(this); //this = window
      if (win.height() <= 400) {  
        alert("Please don't use mobile or attempt word wrap :)");
        window.location.replace("/wiki");
      }
      if (win.width() <= 900) { 
        alert("Please don't use mobile or attempt word wrap :)");
        window.location.replace("/wiki");
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