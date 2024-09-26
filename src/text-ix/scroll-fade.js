document.addEventListener(
    "scroll",
    function () {
        if (!window.textFadeLoaded) {
            window.textFadeLoaded = !0;
            const t = document.createElement("script");
            (t.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"), document.head.appendChild(t);
            const e = document.createElement("script");
            (e.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"),
                document.head.appendChild(e),
                (e.onload = function () {
                    gsap.registerPlugin(ScrollTrigger),
                        document.querySelectorAll(".text-fade").forEach((t) => {
                            t.classList.contains("is-button")
                                ? gsap.fromTo(
                                      t,
                                      { maskImage: "linear-gradient(to top, #0000 0%, #000F 0%)", opacity: 1 },
                                      { maskImage: "linear-gradient(to top, #0000 0%, #000F 100%)", opacity: 0, scrollTrigger: { trigger: t, start: "top -5%", end: "top -40%", scrub: !0 } }
                                  )
                                : gsap.fromTo(
                                      t,
                                      { maskImage: "linear-gradient(to top, #0000 0%, #000F 0%)", opacity: 1 },
                                      { maskImage: "linear-gradient(to top, #0000 0%, #000F 100%)", opacity: 0, scrollTrigger: { trigger: t, start: "top 0%", end: "top -30%", scrub: !0 } }
                                  );
                        });
                });
        }
    },
    { once: !0 }
);
