document.addEventListener(
    "scroll",
    function () {
        if (!window.mouseFollowerLoaded) {
            window.mouseFollowerLoaded = !0;
            const e = document.createElement("script");
            (e.src = "https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js"),
                (e.onload = function () {
                    const e = new MouseFollower({ speed: 0.8, skewing: 0, skewingText: 0 });
                    document.querySelectorAll("[cursor]").forEach((o) => {
                        const t = o.getAttribute("cursor").toLowerCase();
                        o.addEventListener("mouseenter", () => {
                            "nieuws" === t ? e.setText("Bekijk nieuws") : "recept" === t ? e.setText("Bekijk recept") : e.setText("Bekijk product");
                        }),
                            o.addEventListener("mouseleave", () => {
                                e.removeText();
                            });
                    });
                }),
                document.head.appendChild(e);
        }
    },
    { once: !0 }
);
