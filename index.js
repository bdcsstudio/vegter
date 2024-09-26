// GSAP Libraries
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { Observer } from 'gsap/Observer';

// Lenis Import
import Lenis from '@studio-freight/lenis';

// GSAP register
gsap.registerPlugin(ScrollTrigger, Flip, Observer);

// Make Lenis available globally if needed
window.Lenis = Lenis;

// Scripts
import "./src/page-transition/script";
import "./src/page-transition/lottie-load";

import "./src/lenis/lenis";
import "./src/global/disable-img-dragging";

import "./src/nav/border";
import "./src/nav/trigger-color";
import "./src/nav/image-cards";

import "./src/text-ix/scroll-fade";

import "./src/video/plyr";
import "./src/video/preview-hover";
import "./src/video/webm-controller";

import "./src/slider/modal";

import "./src/footer-sfx";