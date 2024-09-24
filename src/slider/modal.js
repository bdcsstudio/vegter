document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-link]").forEach((e) => {
        e.addEventListener("click", function (t) {
            t.preventDefault();
            const n = e.getAttribute("data-link");
            window.location.href = `/nieuws-recepten#${n}`;
        });
    });
});
