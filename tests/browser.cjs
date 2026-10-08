/* Optional browser checks. Requires playwright and axe-core as development tools.
   No runtime dependency is loaded by the portfolio itself. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const http = require("node:http");
const { chromium } = require("playwright");
const root = path.resolve(__dirname, "..");
const output = path.join(root, ".validation");
fs.mkdirSync(output, { recursive: true });
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
};
const server = http.createServer((request, response) => {
  let file = path.resolve(
    root,
    "." + decodeURIComponent(new URL(request.url, "http://localhost").pathname),
  );
  if (file === root) file = path.join(root, "index.html");
  if (!file.startsWith(root + path.sep)) return response.writeHead(403).end();
  fs.readFile(file, (error, data) => {
    response.writeHead(error ? 404 : 200, {
      "Content-Type": types[path.extname(file)] || "text/plain",
    });
    response.end(error ? "Not found" : data);
  });
});
let browser;
const errors = [];
const results = [];
async function loadImages(page) {
  await page.evaluate(async () => {
    for (const image of document.images) image.loading = "eager";
    await Promise.all([...document.images].map((image) => image.decode()));
  });
}
async function run() {
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const base = "http://127.0.0.1:" + server.address().port;
  browser = await chromium.launch({
    headless: true,
    ...(process.env.BROWSER_CHANNEL
      ? { channel: process.env.BROWSER_CHANNEL }
      : {}),
  });
  const context = await browser.newContext({ locale: "pt-BR" });
  const page = await context.newPage();
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("response", (response) => {
    if (response.url().startsWith(base) && response.status() >= 400)
      errors.push(response.url() + ": " + response.status());
  });
  for (const file of ["index.html", "projects/equilibrium.html"]) {
    for (const language of ["pt", "fr", "en"]) {
      for (const width of [320, 390, 768, 1024, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(`${base}/${file}?lang=${language}`);
        await loadImages(page);
        const state = await page.evaluate(() => ({
          overflow: document.documentElement.scrollWidth > window.innerWidth,
          lang: document.documentElement.lang,
          missing: [...document.images].filter((image) => !image.naturalWidth)
            .length,
          title: document.title,
          text: [...document.querySelectorAll("[data-i18n]")].every(
            (element) =>
              element.textContent ===
              portfolioTranslations[
                document.documentElement.lang.split("-")[0]
              ][element.dataset.i18n],
          ),
        }));
        assert.equal(
          state.overflow,
          false,
          `${file} ${language} ${width}: overflow`,
        );
        assert.equal(state.lang, language === "pt" ? "pt-BR" : language);
        assert.equal(state.missing, 0);
        assert.equal(state.text, true);
        assert.match(state.title, /Antonio Silos/);
        results.push({ file, language, width, passed: true });
        if (width === 390 || width === 1440) {
          await page.screenshot({
            path: path.join(
              output,
              `${file.startsWith("index") ? "home" : "case"}-${language}-${width}.png`,
            ),
            fullPage: true,
          });
        }
        if (width === 390 || width === 1440) {
          await page.addScriptTag({
            path: require.resolve("axe-core/axe.min.js"),
          });
          const accessibility = await page.evaluate(async () => {
            const report = await axe.run(document, {
              runOnly: {
                type: "tag",
                values: ["wcag2a", "wcag2aa", "wcag21aa", "best-practice"],
              },
            });
            return report.violations.map((v) => ({
              id: v.id,
              impact: v.impact,
              nodes: v.nodes.map((n) => n.target),
            }));
          });
          assert.deepEqual(
            accessibility,
            [],
            `Accessibility: ${file} ${language} ${width}: ${JSON.stringify(accessibility)}`,
          );
        }
      }
    }
  }
  // URL takes priority over saved language, which takes priority over browser preference.
  await page.goto(base + "/index.html?lang=fr");
  await page.evaluate(() => localStorage.setItem("portfolio-language", "en"));
  await page.reload();
  assert.equal(await page.locator("html").getAttribute("lang"), "fr");
  await page.goto(base + "/index.html?lang=invalid");
  assert.equal(await page.locator("html").getAttribute("lang"), "fr");
  await page.getByRole("button", { name: "English", exact: true }).click();
  assert.match(page.url(), /lang=en/);
  assert.equal(
    await page.evaluate(() => localStorage.getItem("portfolio-language")),
    "en",
  );
  await page
    .getByRole("link", { name: "Explore the case study", exact: true })
    .click();
  assert.match(page.url(), /equilibrium.html\?lang=en/);
  assert.equal(await page.locator("html").getAttribute("lang"), "en");
  await page
    .getByRole("link", { name: "Back to projects", exact: true })
    .first()
    .click();
  assert.match(page.url(), /index.html\?lang=en#projetos/);
  // Mobile keyboard interactions, Escape and responsive focus.
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + "/index.html?lang=en");
  await page.keyboard.press("Tab");
  assert.equal(
    await page
      .locator(".skip-link")
      .evaluate((el) => el === document.activeElement),
    true,
  );
  await page.keyboard.press("Enter");
  assert.equal(
    await page.locator("#main").evaluate((el) => el === document.activeElement),
    true,
  );
  const toggle = page.locator(".menu-toggle");
  await toggle.focus();
  await page.keyboard.press("Enter");
  assert.equal(await toggle.getAttribute("aria-expanded"), "true");
  await page.keyboard.press("Tab");
  assert.equal(
    await page
      .locator("#main-nav a")
      .first()
      .evaluate((el) => el === document.activeElement),
    true,
  );
  await page.keyboard.press("Escape");
  assert.equal(await toggle.getAttribute("aria-expanded"), "false");
  assert.equal(
    await toggle.evaluate((el) => el === document.activeElement),
    true,
  );
  await toggle.click();
  await page.locator("#main-nav a").first().click();
  assert.equal(await toggle.getAttribute("aria-expanded"), "false");
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.locator("#main-nav a").first().focus();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForFunction(
    () => document.activeElement === document.querySelector(".menu-toggle"),
    null,
    { timeout: 5000 },
  );
  assert.equal(
    await toggle.evaluate((el) => el === document.activeElement),
    true,
    "Resize must not leave focus in a hidden menu",
  );
  await context.close();
  // Browser locale resolution, unsupported fallback, and blocked storage.
  for (const [locale, expected] of [
    ["fr-CA", "fr"],
    ["en-US", "en"],
    ["de-DE", "pt-BR"],
  ]) {
    const isolated = await browser.newContext({ locale });
    const tab = await isolated.newPage();
    await tab.goto(base + "/index.html");
    assert.equal(await tab.locator("html").getAttribute("lang"), expected);
    await isolated.close();
  }
  const blocked = await browser.newContext({ locale: "en-US" });
  await blocked.addInitScript(() =>
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new DOMException("Blocked", "SecurityError");
      },
    }),
  );
  const blockedPage = await blocked.newPage();
  blockedPage.on("pageerror", (e) => errors.push(e.message));
  await blockedPage.goto(base + "/index.html?lang=fr");
  assert.equal(await blockedPage.locator("html").getAttribute("lang"), "fr");
  await blockedPage
    .getByRole("button", { name: "English", exact: true })
    .click();
  await blockedPage
    .getByRole("link", { name: "Explore the case study", exact: true })
    .click();
  assert.equal(await blockedPage.locator("html").getAttribute("lang"), "en");
  await blocked.close();
  const noScript = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 320, height: 800 },
  });
  const plain = await noScript.newPage();
  for (const file of ["index.html", "projects/equilibrium.html"]) {
    await plain.goto(base + "/" + file);
    assert.equal(await plain.locator("h1").isVisible(), true);
    assert.equal(await plain.locator("#main-nav").isVisible(), true);
    assert.equal(await plain.locator(".language-switch").isVisible(), false);
  }
  await noScript.close();
  assert.deepEqual(errors, [], "Console/resource errors");
  fs.writeFileSync(
    path.join(output, "browser-results.json"),
    JSON.stringify(
      {
        results,
        consoleErrors: errors,
        accessibility: "12 axe runs without violations",
        behavior: "language, storage, navigation, keyboard, no-JS passed",
      },
      null,
      2,
    ),
  );
  console.log(
    "PASS: 30 page/language/viewport combinations; 12 axe audits; locale resolution, blocked storage, keyboard, navigation, no-JS, images and console.",
  );
}
run()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await browser?.close();
    server.close();
  });
