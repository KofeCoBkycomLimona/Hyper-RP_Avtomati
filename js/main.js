$(document).ready(function() {
    $(".header-link").click(function(event) {
        $(".header-link").not(this).removeClass("active");
        $(this).addClass("active")
    });
    $(".fast-chips__item").click(function(event) {
        $(".fast-chips__item").not(this).removeClass("fast-chips__active");
        $(this).toggleClass("fast-chips__active")
    });
    $(".btn").click(function(event) {
        $(".btn").not(this).removeClass("active");
        $(this).addClass("active");
    });
});

