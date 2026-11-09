/* Motion is a progressive enhancement: no CSS hides essential content. */
(() => {
  if (!window.gsap || !window.ScrollTrigger) return;
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  const toggle = document.querySelector("#motion-toggle");
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  // The system preference is the default; the visible control allows explicit opt-in.
  let paused = media.matches;
  let context;
  let cleanup = () => {};
  const run = () => {
    cleanup();
    context?.revert();
    const calm = paused;
    document.body.classList.toggle("motion-disabled", calm);
    document.documentElement.classList.toggle("motion-disabled", calm);
    document.documentElement.classList.toggle("motion-enabled", !calm);
    document.dispatchEvent(new Event("portfolio:motionchange"));
    toggle.textContent = calm ? "Ativar movimento" : "Pausar movimento";
    toggle.setAttribute("aria-pressed", String(calm));
    if (calm) return;
    const events = [];
    const on = (el, type, fn) => {
      el.addEventListener(type, fn, true);
      events.push(() => el.removeEventListener(type, fn, true));
    };
    context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (window.scrollY < 100) {
        intro
          .from(
            ".title-line",
            { yPercent: 110, rotate: 3, duration: 1.05, stagger: 0.12 },
            0,
          )
          .from(
            ".hero-copy .eyebrow,.professional-role",
            { y: 14, opacity: 0, duration: 0.65, stagger: 0.07 },
            0.1,
          )
          .from(
            ".hero-core",
            { scale: 0.65, rotate: -30, opacity: 0, duration: 1.4 },
            0.2,
          )
          .from(
            ".float-panel",
            {
              y: 75,
              z: -120,
              rotateX: 18,
              opacity: 0,
              duration: 1.3,
              stagger: 0.15,
            },
            0.4,
          )
          .from(
            ".hero-orbit",
            { scale: 0.65, opacity: 0, duration: 1.5, stagger: 0.1 },
            0.3,
          )
          .from(
            ".intro,.hero-actions,.hero-note,.scroll-cue",
            { y: 18, opacity: 0, duration: 0.8, stagger: 0.09 },
            0.75,
          );
      }
      gsap.to(".reading-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      gsap.utils.toArray(".section-heading").forEach((el) =>
        gsap.from(el.children, {
          y: 35,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }),
      );
      gsap.utils.toArray(".project-card").forEach((card, i) => {
        gsap.from(card.querySelector(".project-visual"), {
          y: 45,
          scale: 0.97,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%", once: true },
        });
        gsap.from(card.querySelector(".card-content"), {
          x: i % 2 ? 12 : -12,
          opacity: 0,
          duration: 0.85,
          scrollTrigger: {
            trigger: card.querySelector(".card-content"),
            start: "top 93%",
            once: true,
          },
        });
      });
      gsap.from(".about-grid .about-copy>p", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.14,
        scrollTrigger: { trigger: "#sobre", start: "top 75%", once: true },
      });
      gsap.from(".principles>div", {
        y: 22,
        opacity: 0,
        duration: 0.7,
        stagger: 0.13,
        scrollTrigger: { trigger: ".principles", start: "top 90%", once: true },
      });
      gsap.utils.toArray(".timeline-row").forEach((row) =>
        gsap.from(row.children, {
          x: -20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: { trigger: row, start: "top 90%", once: true },
        }),
      );
      gsap.from(".contact-inner h2", {
        y: 65,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#contato", start: "top 80%", once: true },
      });
      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px) and (min-height: 820px)", () => {
        const story = gsap.timeline({
          scrollTrigger: {
            id: "connection-story",
            trigger: ".connection-story",
            start: "top 88px",
            end: "+=1100",
            pin: ".connection-stage",
            scrub: 0.65,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        story
          .fromTo(
            ".tile-interface",
            { x: -35, rotateY: 36, rotate: -17, z: -160 },
            { x: 0, rotateY: 0, rotate: 0, z: 0, duration: 1 },
            0,
          )
          .fromTo(
            ".tile-data",
            { x: 35, rotateY: -36, rotate: 17, z: -160 },
            { x: 0, rotateY: 0, rotate: 0, z: 0, duration: 1 },
            0,
          )
          .to(".tile-logic", { rotate: 0, y: 0, scale: 1.08, duration: 1 }, 0)
          .fromTo(
            ".signal",
            { strokeDashoffset: 660 },
            { strokeDashoffset: 0, duration: 1.1, ease: "none" },
            0.5,
          )
          .fromTo(
            ".story-track i",
            { scaleX: 0 },
            { scaleX: 1, duration: 2, ease: "none" },
            0,
          )
          .to(".system-tile", { y: -20, stagger: 0.08, duration: 0.6 }, 1.4);
        gsap.to(".hero-art", {
          y: 60,
          rotate: 3,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
      mm.add("(max-width: 899px), (max-height: 819px)", () => {
        gsap.utils.toArray(".system-tile").forEach((tile) =>
          gsap.from(tile, {
            y: 35,
            opacity: 0,
            duration: 0.9,
            scrollTrigger: { trigger: tile, start: "top 90%", once: true },
          }),
        );
      });
      mm.add("(hover: hover) and (pointer: fine)", () => {
        const disposers = [];
        // Scroll animates the wrapper; pointer movement animates its contents.
        document
          .querySelectorAll(
            ".hero-art,.photo-stack,.mini-app,.system-diagram,.api-illustration",
          )
          .forEach((surface) => {
            const rotateX = gsap.quickTo(surface, "rotationX", {
              duration: 0.7,
              ease: "power3.out",
            });
            const rotateY = gsap.quickTo(surface, "rotationY", {
              duration: 0.7,
              ease: "power3.out",
            });
            const move = (e) => {
              const r = surface.getBoundingClientRect();
              rotateX(-((e.clientY - r.top) / r.height - 0.5) * 8);
              rotateY(((e.clientX - r.left) / r.width - 0.5) * 10);
            };
            const leave = () => {
              rotateX(0);
              rotateY(0);
            };
            surface.addEventListener("pointermove", move);
            surface.addEventListener("pointerleave", leave);
            disposers.push(() => {
              surface.removeEventListener("pointermove", move);
              surface.removeEventListener("pointerleave", leave);
            });
          });
        return () => disposers.forEach((fn) => fn());
      });
      cleanup = () => {
        mm.revert();
        events.forEach((fn) => fn());
      };
      on(document, "portfolio:filtered", () => {
        gsap.fromTo(
          ".catalog-entry:not([hidden])",
          { opacity: 0.35, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.015,
            clearProps: "opacity,transform",
            overwrite: true,
          },
        );
        ScrollTrigger.refresh();
      });
      on(document, "toggle", (e) => {
        if (e.target.matches(".catalog-entry,.technical-note"))
          ScrollTrigger.refresh();
      });
    });
    ScrollTrigger.refresh();
  };
  toggle.hidden = false;
  toggle.addEventListener("click", () => {
    paused = !paused;
    run();
  });
  media.addEventListener("change", () => {
    paused = media.matches;
    run();
  });
  run();
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
})();
