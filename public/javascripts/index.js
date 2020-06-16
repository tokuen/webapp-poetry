$(function () {
    $("body").height($(window).height());
    $("body").width($(window).width());
    $(window).resize(function () {
        $("body").height($(window).height());
        $("body").width($(window).width());
    })
})