/* Navigation works independently of animation libraries and motion preferences. */
(() => {
  const header = document.querySelector(".header");
  const menu = header?.querySelector(".menu-toggle");
  const nav = header?.querySelector("nav");
  if (!menu || !nav) return;
  const mobile = window.matchMedia("(max-width: 620px)");
  const setOpen = (open, returnFocus = false) => {
    nav.classList.toggle("is-open", open);
    menu.setAttribute("aria-expanded", String(open));
    menu.textContent = open ? "Fechar" : "Menu";
    if (returnFocus) menu.focus();
  };
  const sync = () => {
    menu.hidden = !mobile.matches;
    setOpen(false);
  };
  document.body.classList.add("has-menu");
  document.documentElement.classList.add("navigation-ready");
  menu.addEventListener("click", () =>
    setOpen(menu.getAttribute("aria-expanded") !== "true"),
  );
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true")
      setOpen(false, true);
  });
  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) setOpen(false);
  });
  mobile.addEventListener("change", sync);
  sync();

  // Animate only section links; wheel/touch scrolling stays native.
  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  let scrollFrame;
  const cancelNavigation = () => {
    window.cancelAnimationFrame(scrollFrame);
    scrollFrame = undefined;
  };
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (
      !link ||
      link.hasAttribute("data-project") ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      link.hasAttribute("download") ||
      (link.target && link.target !== "_self")
    )
      return;
    if (
      root.classList.contains("motion-disabled") ||
      (reduced.matches && !root.classList.contains("motion-enabled"))
    )
      return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    cancelNavigation();
    const start = window.scrollY;
    const offset = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
    const maxScroll = Math.max(0, root.scrollHeight - window.innerHeight);
    const end = Math.min(
      maxScroll,
      Math.max(0, target.getBoundingClientRect().top + start - offset),
    );
    const distance = end - start;
    const duration = Math.min(1050, Math.max(500, Math.abs(distance) * 0.12));
    const began = performance.now();
    if (location.hash !== link.hash) history.pushState(null, "", link.hash);
    const finish = () => {
      scrollFrame = undefined;
      const temporaryFocus = !target.hasAttribute("tabindex");
      if (temporaryFocus) {
        target.setAttribute("tabindex", "-1");
        target.addEventListener(
          "blur",
          () => target.removeAttribute("tabindex"),
          { once: true },
        );
      }
      target.focus({ preventScroll: true });
    };
    const step = (now) => {
      const progress = Math.min(1, (now - began) / duration);
      const eased =
        progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
      window.scrollTo({ top: start + distance * eased, behavior: "instant" });
      if (progress < 1) scrollFrame = requestAnimationFrame(step);
      else finish();
    };
    scrollFrame = requestAnimationFrame(step);
  });
  ["wheel", "touchstart", "pointerdown"].forEach((type) => {
    window.addEventListener(type, cancelNavigation, { passive: true });
  });
  window.addEventListener("resize", cancelNavigation);
  window.addEventListener("popstate", cancelNavigation);
  document.addEventListener("keydown", (event) => {
    if (
      [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
        "Escape",
      ].includes(event.key)
    )
      cancelNavigation();
  });
  reduced.addEventListener("change", cancelNavigation);
  document.addEventListener("portfolio:motionchange", cancelNavigation);

  if ("IntersectionObserver" in window) {
    const links = [...nav.querySelectorAll('a[href^="#"]')];
    const observer = new IntersectionObserver(
      (entries) => {
        const section = entries.find((entry) => entry.isIntersecting)?.target;
        if (!section) return;
        links.forEach((link) => {
          if (link.hash === `#${section.id}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    links.forEach((link) => {
      const section = document.getElementById(link.hash.slice(1));
      if (section) observer.observe(section);
    });
    ["inicio", "conexoes", "contato"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }
})();
