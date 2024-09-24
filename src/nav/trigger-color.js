import { gsap } from 'gsap';

document.addEventListener("DOMContentLoaded", function () {
    function updateLottieVisibility() {
        const colorMode = document.querySelector(".nav-bar").getAttribute("color-mode");
        const lottiePurple = document.querySelector(".nav-menu_lottie-purple");
        const lottieYellow = document.querySelector(".nav-menu_lottie-yellow");

        if (colorMode === "yellow") {
            gsap.set(lottiePurple, { display: "block" });
            gsap.set(lottieYellow, { display: "none" });
        } else if (colorMode === "purple") {
            gsap.set(lottiePurple, { display: "none" });
            gsap.set(lottieYellow, { display: "block" });
        }
    }

    updateLottieVisibility();

    const navBar = document.querySelector(".nav-bar");
    new MutationObserver(function(mutations) {
        for (let mutation of mutations) {
            if (mutation.type === "attributes" && mutation.attributeName === "color-mode") {
                updateLottieVisibility();
            }
        }
    }).observe(navBar, { attributes: true });
});