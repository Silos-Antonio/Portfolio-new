/* Progressive enhancement: navigation and all content work without JavaScript. */
(() => {
  "use strict";
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;
  const mobile = window.matchMedia("(max-width: 760px)");
  // CSS can blur a hidden link before the media-query callback runs.
  let lastFocused = document.activeElement;
  document.addEventListener("focusin", (event) => {
    lastFocused = event.target;
  });
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  const syncViewport = () => {
    // Return focus before hiding a focused mobile-only control or menu link.
    if (mobile.matches) toggle.hidden = false;
    if (mobile.matches && nav.contains(lastFocused)) toggle.focus();
    if (!mobile.matches && document.activeElement === toggle)
      nav.querySelector("a")?.focus();
    toggle.hidden = !mobile.matches;
    setOpen(false);
  };
  document.documentElement.classList.add("nav-enhanced");
  syncViewport();
  mobile.addEventListener("change", syncViewport);
  toggle.addEventListener("click", () =>
    setOpen(toggle.getAttribute("aria-expanded") !== "true"),
  );
  nav.addEventListener("click", (event) => {
    const anchor = event.target.closest("a");
    if (!anchor || !mobile.matches) return;
    setOpen(false);
    const destination = new URL(anchor.href);
    if (destination.pathname === window.location.pathname && destination.hash) {
      const target = document.getElementById(
        decodeURIComponent(destination.hash.slice(1)),
      );
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    }
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      toggle.getAttribute("aria-expanded") === "true"
    ) {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (
      toggle.getAttribute("aria-expanded") === "true" &&
      !nav.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      const focusInMenu = nav.contains(document.activeElement);
      setOpen(false);
      if (focusInMenu) toggle.focus();
    }
  });
})();
