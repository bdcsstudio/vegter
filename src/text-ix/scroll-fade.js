import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener(
    "scroll",
    function () {
        if (!window.textFadeLoaded) {
            window.textFadeLoaded = true;
            document.querySelectorAll(".text-fade").forEach((t) => {
                t.classList.contains("is-button")
                    ? gsap.fromTo(
                          t,
                          { maskImage: "linear-gradient(to top, #0000 0%, #000F 0%)", opacity: 1 },
                          { maskImage: "linear-gradient(to top, #0000 0%, #000F 100%)", opacity: 0, scrollTrigger: { trigger: t, start: "top -5%", end: "top -40%", scrub: true } }
                      )
                    : gsap.fromTo(
                          t,
                          { maskImage: "linear-gradient(to top, #0000 0%, #000F 0%)", opacity: 1 },
                          { maskImage: "linear-gradient(to top, #0000 0%, #000F 100%)", opacity: 0, scrollTrigger: { trigger: t, start: "top 0%", end: "top -30%", scrub: true } }
                      );
            });
        }
    },
    { once: true }
);