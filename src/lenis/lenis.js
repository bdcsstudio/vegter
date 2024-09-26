import Lenis from '@studio-freight/lenis';

let lenis;

function initLenis() {
  // Check if we're not in the Webflow editor
  if (typeof Webflow === 'undefined' || Webflow.env("editor") === undefined) {
    // Check if Lenis should be destroyed
    const shouldDestroyLenis = document.body.hasAttribute("data-lenis-destroy");

    if (!shouldDestroyLenis) {
      // Check if infinite scroll is enabled
      const isInfiniteScrollPage = document.body.hasAttribute("data-lenis-infinite");

      // Initialize Lenis
      lenis = new Lenis({
        lerp: 0.1,
        wheelMultiplier: 0.7,
        infinite: isInfiniteScrollPage,
        gestureOrientation: "vertical",
        normalizeWheel: false,
        smoothTouch: false
      });

      // Lenis scroll event listener
      lenis.on('scroll', (e) => {
        console.log(e);
      });

      // RAF loop for Lenis
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Connect Lenis to GSAP ScrollTrigger
      function connectToScrollTrigger() {
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      }

      // Initialize ScrollTrigger connection
      connectToScrollTrigger();

      // Event handlers for controlling Lenis
      document.querySelectorAll("[data-lenis-start]").forEach(el => {
        el.addEventListener("click", () => lenis.start());
      });

      document.querySelectorAll("[data-lenis-stop]").forEach(el => {
        el.addEventListener("click", () => lenis.stop());
      });

      document.querySelectorAll("[data-lenis-toggle]").forEach(el => {
        el.addEventListener("click", () => {
          el.classList.toggle("stop-scroll");
          if (el.classList.contains("stop-scroll")) {
            lenis.stop();
          } else {
            lenis.start();
          }
        });
      });
    }
  }
}

// Initialize Lenis when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initLenis);

// Export lenis instance if needed elsewhere in your application
export { lenis };