# Portfolio V2.0 — Antonio Silos

[Português](README.md) · [Français](README.fr.md) · English

A software developer’s portfolio focused on Python, backend and web applications, with professional experience in technical support, business software, SQL and APIs. V2 evolves the existing V1 using plain HTML, CSS and JavaScript.

## Run locally

No build or production dependencies:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open [the local site](http://127.0.0.1:4173/?lang=en). Opening `index.html` directly also works; a local server better represents static hosting.

## Structure

- `index.html`: introduction, selected projects, experience, background, technologies, education and contact.
- `projects/equilibrium.html`: technical case study covering architecture, security, tests, decisions and status.
- `assets/css/style.css`: visual system, responsive layout and keyboard focus.
- `assets/data/translations.js`: PT/FR/EN content.
- `assets/js/i18n.js`: language resolution, accessible attributes and metadata.
- `assets/js/main.js`: mobile menu and focus management.
- `assets/images/`: optimized real screenshots, portrait, favicon and preserved sources.
- `tests/` and `docs/`: validation scripts, audit and report.

Equilibrium is the featured project, followed by credit profile classification and a therapist’s landing page. Complete Portuguese content is available in the HTML without JavaScript. The site loads no framework, CDN, remote font or icon library.

## Languages

Priority: valid `?lang=pt|fr|en` → saved `portfolio-language` preference → first supported browser language → Portuguese. Links between pages preserve the selected language even when storage is blocked.

Switching updates text, `html lang`, accessible labels, alt text, title, description and Open Graph. Keep dictionary keys aligned and synchronize the Portuguese HTML fallback when editing copy. Project screenshots retain their original interface language.

Canonical URLs are static. Social crawlers without JavaScript receive Portuguese metadata; dynamic translations are not equivalent to server-rendered language pages.

## Validation

Node is only needed for development tools:

```sh
python tests/validate.py
npm ci
npx playwright install chromium
npm run check:html
npm test
```

To use installed Chrome, set `BROWSER_CHANNEL=chrome` (PowerShell: `$env:BROWSER_CHANNEL='chrome'`). Tests cover both pages, three languages, five widths, axe, keyboard operation, navigation, blocked storage and no-JavaScript behavior. Results go to `.validation/`, which Git ignores.

## Hosting and sources

Compatible with Netlify and other static hosts: no build command, repository root as publish directory. [Existing domain](https://antoniosnportifolio.netlify.app/). V2 is a local implementation and has not been deployed. If the domain changes, update canonical URLs, Open Graph, robots and sitemap. Preserve the Google verification file. Exclude test tooling, internal documentation and backups from the published artifact.

Professional content follows `PORTFOLIO_V2_CONTEXT.md`. Equilibrium’s case was verified against its local code and documentation without modifying that project. Its [public repository](https://github.com/Silos-Antonio/Projeto-Equilibrium) was confirmed in the final check and is linked on both pages. No public demo is confirmed. A downloadable résumé remains to be provided. See the Portuguese [report](docs/RELATORIO_V2.md) and [audit](docs/AUDITORIA_V2.md).

[GitHub](https://github.com/Silos-Antonio) · [Portfolio repository](https://github.com/Silos-Antonio/Portfolio) · [LinkedIn](https://www.linkedin.com/in/antonio-silos-415b64175) · [Email](mailto:antonio.silos95@outlook.com)

Code under the [MIT license](LICENSE).
