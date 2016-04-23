$(document).ready(function() {
    $(".welcome").hover(function() {
        $(this).css("color", "white");
        $(".rightside").css("color", "white");
        $(".vertical").css("color", "white");
        $("#next").css("color", "white");
        $("html").animate({
        backgroundColor: "#ffa64d",
        color: "#ffa64d"
      }, 1000);
        $("#next").css("pointer-events", "auto");
    });
});