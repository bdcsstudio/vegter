import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function initializeTextFadeEffects() {
    document.querySelectorAll(".text-fade").forEach((element) => {
        if (element.classList.contains("is-button")) {
            gsap.fromTo(
                element,
                { maskImage: "linear-gradient(to top, #0000 0%, #000F 0%)", opacity: 1 },
                {
                    maskImage: "linear-gradient(to top, #0000 0%, #000F 100%)",
                    opacity: 0,
                    scrollTrigger: {
                        trigger: element,
                        start: "top -5%",
                        end: "top -40%",
                        scrub: true
                    }
                }
            );
        } else {
            gsap.fromTo(
                element,
                { maskImage: "linear-gradient(to top, #0000 0%, #000F 0%)", opacity: 1 },
                {
                    maskImage: "linear-gradient(to top, #0000 0%, #000F 100%)",
                    opacity: 0,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 0%",
                        end: "top -30%",
                        scrub: true
                    }
                }
            );
        }
    });
}

// We use requestAnimationFrame to ensure the DOM is fully loaded
// and to avoid potential race conditions with other scripts
let rafId = requestAnimationFrame(function checkBodyExists() {
    if (document.body) {
        cancelAnimationFrame(rafId);
        initializeTextFadeEffects();
    } else {
        rafId = requestAnimationFrame(checkBodyExists);
    }
});