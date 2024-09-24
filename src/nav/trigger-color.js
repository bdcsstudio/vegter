$(document).ready(function () {
    function e() {
        var e = $(".nav-bar").attr("color-mode");
        "yellow" === e ? ($(".nav-menu_lottie-purple").show(), $(".nav-menu_lottie-yellow").hide()) : "purple" === e && ($(".nav-menu_lottie-purple").hide(), $(".nav-menu_lottie-yellow").show());
    }
    e();
    var t = document.querySelector(".nav-bar");
    new MutationObserver(function (t) {
        for (var o of t) "attributes" === o.type && "color-mode" === o.attributeName && e();
    }).observe(t, { attributes: !0 });
});