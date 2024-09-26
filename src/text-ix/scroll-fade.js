import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function initTextFadeEffects() {
    document.querySelectorAll(".text-fade").forEach((element) => {
        const isButton = element.classList.contains("is-button");
        gsap.fromTo(
            element,
            { 
                maskImage: "linear-gradient(to top, #0000 0%, #000F 0%)", 
                opacity: 1 
            },
            { 
                maskImage: "linear-gradient(to top, #0000 0%, #000F 100%)", 
                opacity: 0, 
                scrollTrigger: { 
                    trigger: element, 
                    start: isButton ? "top -5%" : "top 0%", 
                    end: isButton ? "top -40%" : "top -30%", 
                    scrub: true 
                } 
            }
        );
    });
}

// Use IntersectionObserver to initialize the effect when any .text-fade element becomes visible
const observer = new IntersectionObserver((entries) => {
    if (entries.some(entry => entry.isIntersecting)) {
        initTextFadeEffects();
        observer.disconnect();
    }
});

document.querySelectorAll('.text-fade').forEach(el => observer.observe(el));