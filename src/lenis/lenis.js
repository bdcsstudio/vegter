import Lenis from 'lenis';

"use strict"; // Fix Lenis in Safari

let lenis;

if (Webflow.env("editor") === undefined) {
  // Add the destroy attribute to disable functionality
  const shouldDestroyLenis = document.body.hasAttribute("data-lenis-destroy");

  if (!shouldDestroyLenis) {
    // add the infinite attribute to enable infinite scroll functionality
    const isInfiniteScrollPage = document.body.hasAttribute("data-lenis-infinite");

    // Initialize Lenis with appropriate settings
    lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.7,
      infinite: isInfiniteScrollPage, // Enable infinite scroll only on specific page
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false
    });

    // Event listener for scroll events
    lenis.on('scroll', (e) => {
      console.log(e);
    });

    // RAF loop for updating scroll position
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Event handlers for starting and stopping the scroll
    $("[data-lenis-start]").on("click", function () {
      lenis.start();
    });
    $("[data-lenis-stop]").on("click", function () {
      lenis.stop();
    });
    $("[data-lenis-toggle]").on("click", function () {
      $(this).toggleClass("stop-scroll");
      if ($(this).hasClass("stop-scroll")) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });

    // Integration with GSAP ScrollTrigger if needed
    function connectToScrollTrigger() {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
    // Uncomment this if using GSAP ScrollTrigger
    connectToScrollTrigger();
  }
}