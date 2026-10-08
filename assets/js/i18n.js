/* Resolution: URL > saved preference > supported browser language > Portuguese. */
(() => {
  "use strict";
  const supported = ["pt", "fr", "en"];
  const storageKey = "portfolio-language";
  const isSupported = (value) => supported.includes(value);
  const tags = { pt: "pt-BR", fr: "fr", en: "en" };
  const locales = { pt: "pt_BR", fr: "fr_FR", en: "en_US" };

  function resolveLanguage() {
    const requested = new URLSearchParams(window.location.search).get("lang");
    if (isSupported(requested)) return requested;
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (isSupported(saved)) return saved;
    } catch {
      /* Storage may be blocked; the page remains usable. */
    }
    for (const preferred of navigator.languages || [navigator.language]) {
      const language = String(preferred).toLowerCase().split("-")[0];
      if (isSupported(language)) return language;
    }
    return "pt";
  }

  function applyLanguage(language, updateUrl = false) {
    if (!isSupported(language)) return;
    const content = portfolioTranslations[language];
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = content[element.dataset.i18n];
      if (typeof value === "string") element.textContent = value;
    });
    for (const [attribute, dataAttribute] of [
      ["aria-label", "data-i18n-aria"],
      ["alt", "data-i18n-alt"],
    ]) {
      document.querySelectorAll(`[${dataAttribute}]`).forEach((element) => {
        const value = content[element.getAttribute(dataAttribute)];
        if (typeof value === "string") element.setAttribute(attribute, value);
      });
    }
    document.documentElement.lang = tags[language];
    const page = document.body.dataset.page || "home";
    const title = content[`${page}Title`];
    const description = content[`${page}Description`];
    document.title = title;
    for (const [selector, value] of [
      ['meta[name="description"]', description],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
      ['meta[property="og:locale"]', locales[language]],
    ])
      document.querySelector(selector)?.setAttribute("content", value);

    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.lang === language),
      );
    });
    document.querySelectorAll("a[data-local-link]").forEach((anchor) => {
      const destination = new URL(anchor.href, window.location.href);
      destination.searchParams.set("lang", language);
      anchor.href = destination.href;
    });
    try {
      window.localStorage.setItem(storageKey, language);
    } catch {
      /* Optional persistence. */
    }
    if (updateUrl) {
      const current = new URL(window.location.href);
      current.searchParams.set("lang", language);
      try {
        window.history.replaceState(null, "", current);
      } catch {
        /* file:// or restricted history. */
      }
    }
  }

  if (typeof portfolioTranslations === "undefined") return;
  applyLanguage(resolveLanguage());
  document.querySelectorAll(".language-switch").forEach((group) => {
    group.hidden = false;
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () =>
      applyLanguage(button.dataset.lang, true),
    );
  });
  window.addEventListener("popstate", () => applyLanguage(resolveLanguage()));
})();
