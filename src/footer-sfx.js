document.addEventListener("DOMContentLoaded", function () {
    window.matchMedia("(max-width: 991px)").matches &&
        document.querySelectorAll(".footer_van-wrapper").forEach((e) => {
            e.addEventListener("click", (e) => {
                e.preventDefault();
                const t = document.querySelector(".footer-links_icon");
                t && t.click();
            }),
                e.addEventListener("touchstart", (e) => {
                    e.preventDefault();
                    const t = document.querySelector(".footer-links_icon");
                    t && t.click();
                });
        });
});
