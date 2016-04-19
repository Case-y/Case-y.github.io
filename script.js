$(document).ready(function() {
    $(".welcome").hover(function() {
        $(this).css("color", "white");
        $(".rightside").css("color", "white");
        $(".vertical").css("color", "white");
        $("html").animate({
        backgroundColor: "#1c1717",
        color: "#1c1717"
      }, 1000);
        $("#next").css("pointer-events", "auto");

    });
});