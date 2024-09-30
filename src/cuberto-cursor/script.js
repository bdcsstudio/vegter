import MouseFollower from "mouse-follower";
import { gsap } from "gsap";

MouseFollower.registerGSAP(gsap);

document.addEventListener("DOMContentLoaded", () => {
  const cursor = new MouseFollower({ speed: 0.8, skewing: 0, skewingText: 0 });

  document.querySelectorAll("[cursor]").forEach((element) => {
    const cursorType = element.getAttribute("cursor").toLowerCase();
    element.addEventListener("mouseenter", () => {
      switch(cursorType) {
        case "nieuws":
          cursor.setText("Bekijk nieuws");
          break;
        case "recept":
          cursor.setText("Bekijk recept");
          break;
        default:
          cursor.setText("Bekijk product");
      }
    });
    element.addEventListener("mouseleave", () => {
      cursor.removeText();
    });
  });
});