import { gsap } from 'gsap';

document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelector(".vegter-border"),
        o = document.querySelector(".nav-menu_trigger"),
        t = document.querySelector(".main-wrapper"),
        n = document.querySelector(".nav-menu"),
        r = document.querySelector(".nav-bar"),
        a = document.querySelectorAll(".nav-menu_links .nav-menu_link"),
        i = document.querySelector(".nav-menu_card.is-1"),
        s = document.querySelector(".nav-menu_card.is-2"),
        l = 0.3 * window.innerHeight;
    let u = 1.1,
        d = !1,
        c = r.getAttribute("color-mode"),
        p = !1,
        m = !1;
    const w = document.body.getAttribute("pageload"),
        y = ["home", "true", "contact"].includes(w),
        g = "contact" === w;
    function v() {
        d ||
            !p ||
            m ||
            !y ||
            g ||
            ((m = !0),
            window.scrollY <= l && 1 !== u
                ? gsap.to(e, {
                      scale: 1,
                      duration: 0.8,
                      ease: "power1.inOut",
                      onComplete: () => {
                          (u = 1), (m = !1);
                      },
                  })
                : window.scrollY > l && 1.1 !== u
                ? gsap.to(e, {
                      scale: 1.1,
                      duration: 0.5,
                      ease: "power1.inOut",
                      onComplete: () => {
                          (u = 1.1), (m = !1);
                      },
                  })
                : (m = !1));
    }
    function O() {
        g || window.addEventListener("scroll", v);
    }
    y && 0 === window.scrollY
        ? (gsap.set(e, { scale: 1.1, visibility: "visible", opacity: 1 }),
          gsap.to(e, {
              delay: "home" === w ? 1.5 : 1,
              onComplete: () => {
                  gsap.fromTo(
                      e,
                      { scale: 1.1 },
                      {
                          scale: 1,
                          duration: 1,
                          ease: "power1.inOut",
                          onComplete: () => {
                              (p = !0), O();
                          },
                      }
                  );
              },
          }))
        : "false" === w
        ? gsap.set(e, { scale: 1.1, visibility: "visible", opacity: 1 })
        : (gsap.set(e, { scale: 1.1, visibility: "visible", opacity: 1 }), (p = !0), O()),
        o.addEventListener("click", function () {
            const { closeY: o, openY: p } = window.innerWidth > 991 ? { closeY: "85dvh", openY: "85dvh" } : { closeY: "92dvh", openY: "92dvh" };
            d
                ? (gsap.to([t, e], { y: "0dvh", duration: 0.8, ease: "power1.inOut" }),
                  gsap.to(n, { y: "-100%", duration: 0.8, ease: "power1.inOut" }),
                  gsap.to(e, {
                      scale: "false" === w || (window.scrollY > l && !g) ? 1.1 : 1,
                      duration: 0.8,
                      ease: "power1.inOut",
                      onComplete: () => {
                          u = window.scrollY > l && !g ? 1.1 : 1;
                      },
                  }),
                  gsap.to(r, {
                      delay: 0.6,
                      duration: 0.8,
                      ease: "power1.inOut",
                      onStart: () => {
                          r.setAttribute("color-mode", c);
                      },
                  }),
                  (d = !1))
                : (gsap.to([t, e], { y: p, duration: 0.8, ease: "power1.inOut" }),
                  gsap.to(n, { y: "0%", duration: 0.8, ease: "power1.inOut" }),
                  gsap.to(e, { scale: 1, duration: 0.8, ease: "power1.inOut" }),
                  gsap.to(r, {
                      delay: 0.2,
                      duration: 0.8,
                      ease: "power1.inOut",
                      onStart: () => {
                          r.setAttribute("color-mode", "yellow" === c ? "purple" : "yellow");
                      },
                  }),
                  gsap.fromTo(a, { y: "-8rem" }, { y: "0rem", delay: 0.2, duration: 0.6, ease: "power1.inOut", stagger: { each: 0.04, from: "end" } }),
                  gsap.fromTo(i, { y: "-16rem", rotationZ: -2, transformPerspective: 600 }, { y: "2rem", rotationZ: 2, duration: 0.8, ease: "power1.inOut", delay: 0.2 }),
                  gsap.fromTo(s, { y: "-20rem", rotationZ: -3, transformPerspective: 600 }, { y: "0rem", rotationZ: -1, duration: 0.8, ease: "power1.inOut", delay: 0.24 }),
                  (d = !0));
        }),
        gsap.set(e, { willChange: "transform" });
});