import { gsap } from 'gsap';

console.log('GSAP version:', gsap.version);

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.text-fade');
    console.log('Found text-fade elements:', elements.length);

    elements.forEach((element) => {
        gsap.to(element, {
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top center',
                end: 'bottom center',
                scrub: true,
            }
        });
    });
});