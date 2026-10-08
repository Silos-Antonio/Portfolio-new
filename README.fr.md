# Portfolio V2.0 — Antonio Silos

[Português](README.md) · Français · [English](README.en.md)

Portfolio d’un développeur logiciel axé sur Python, le backend et les applications web, avec une expérience du support technique, des systèmes de gestion, de SQL et des API. La V2 fait évoluer la V1 en conservant HTML, CSS et JavaScript natif.

## Exécution locale

Aucune compilation ni dépendance de production :

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Ouvrez [le site local](http://127.0.0.1:4173/?lang=fr). Le fichier `index.html` peut aussi être ouvert directement ; un serveur local reproduit mieux l’hébergement statique.

## Architecture

- `index.html` : présentation, projets, expérience, parcours, technologies, formation et contact.
- `projects/equilibrium.html` : étude de cas avec architecture, sécurité, tests, choix techniques et statut.
- `assets/css/style.css` : système visuel, mise en page adaptative et focus clavier.
- `assets/data/translations.js` : textes PT/FR/EN.
- `assets/js/i18n.js` : langue, attributs accessibles et métadonnées.
- `assets/js/main.js` : menu mobile et gestion du focus.
- `assets/images/` : captures réelles optimisées, portrait, favicon et sources conservées.
- `tests/` et `docs/` : validations, audit et rapport.

Equilibrium est le projet principal, suivi de la classification de profils de crédit et d’une page pour une thérapeute. Tout le contenu en portugais est présent dans le HTML, accessible sans JavaScript. Aucun framework, CDN, police distante ou bibliothèque d’icônes n’est chargé par le site.

## Internationalisation

Priorité : paramètre `?lang=pt|fr|en` valide → préférence `portfolio-language` → première langue du navigateur prise en charge → portugais. Les liens entre les pages conservent la langue, même si le stockage est indisponible.

Les textes, `html lang`, labels, textes alternatifs, titre, description et Open Graph sont actualisés. Lors d’une modification, conservez les mêmes clés dans les trois dictionnaires et synchronisez le contenu portugais du HTML. Les captures des projets gardent la langue de leur interface.

Les URL canoniques sont statiques. Les robots sociaux sans JavaScript reçoivent les métadonnées portugaises ; les traductions dynamiques ne sont pas des pages générées côté serveur.

## Vérification

Node n’est nécessaire que pour les outils de développement :

```sh
python tests/validate.py
npm ci
npx playwright install chromium
npm run check:html
npm test
```

Pour utiliser Chrome déjà installé, définissez `BROWSER_CHANNEL=chrome` (PowerShell : `$env:BROWSER_CHANNEL='chrome'`). Les tests couvrent les deux pages, trois langues, cinq largeurs, axe, le clavier, la navigation, le stockage bloqué et le fonctionnement sans JavaScript. Les résultats sont écrits dans `.validation/`, ignoré par Git.

## Hébergement et sources

Hébergement statique compatible avec Netlify : aucune commande de build, publication depuis la racine. [Domaine existant](https://antoniosnportifolio.netlify.app/). La V2 est locale et n’a pas été déployée. En cas de changement de domaine, adaptez les canonical, Open Graph, robots et sitemap. Conservez la vérification Google. Excluez les outils de test, documents internes et sauvegardes du contenu publié.

Le positionnement suit `PORTFOLIO_V2_CONTEXT.md`. L’étude d’Equilibrium repose sur son code et sa documentation locale, sans modification du projet source. Son [dépôt public](https://github.com/Silos-Antonio/Projeto-Equilibrium) a été confirmé lors de la vérification finale et figure sur les deux pages. Aucune démonstration publique n’est confirmée. Un CV téléchargeable reste à fournir. Voir [le rapport](docs/RELATORIO_V2.md) et [l’audit](docs/AUDITORIA_V2.md), en portugais.

[GitHub](https://github.com/Silos-Antonio) · [Dépôt du portfolio](https://github.com/Silos-Antonio/Portfolio) · [LinkedIn](https://www.linkedin.com/in/antonio-silos-415b64175) · [E-mail](mailto:antonio.silos95@outlook.com)

Code sous [licence MIT](LICENSE).
