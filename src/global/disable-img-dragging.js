document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("img").forEach((e) => {
        e.setAttribute("draggable", !1);
    });
});
