document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelectorAll(".nav-menu_link"),
        t = document.querySelector(".nav-menu_hover-item"),
        n = document.querySelector(".nav-menu_hover-img-wrap"),
        o = document.querySelectorAll(".nav-menu_hover-img");
    let a = 0;
    function r() {
        e.forEach((e) => {
            e.addEventListener("mouseenter", () => {
                const r = e.getAttribute("nav-link"),
                    i = n.querySelector(`.nav-menu_hover-img[nav-hover="${r}"]`),
                    s = (function () {
                        let e;
                        do {
                            e = 10 * Math.random() - 5;
                        } while (Math.abs(e - a) < 3);
                        return (a = e);
                    })();
                t.classList.contains("active") ? gsap.set(n, { rotation: s }) : (t.classList.add("active"), gsap.fromTo(t, { y: "100%" }, { y: "0%", duration: 0.5, ease: "power1.inOut" }), gsap.set(n, { rotation: s, scale: 1 })),
                    gsap.set(o, { y: "100%", zIndex: 0 }),
                    gsap.set(i, { y: "0%", zIndex: 1 });
            }),
                e.addEventListener("mouseleave", () => {
                    setTimeout(() => {
                        document.querySelector(".nav-menu_link:hover") ||
                            (t.classList.remove("active"), gsap.to(t, { y: "100%", duration: 0.5, ease: "power1.inOut" }), gsap.to(n, { rotation: -45, scale: 0, duration: 0.5, ease: "power1.inOut" }));
                    }, 10);
                });
        });
    }
    window.innerWidth >= 992 && r(),
        window.addEventListener("resize", () => {
            window.innerWidth >= 992 && r();
        });
});