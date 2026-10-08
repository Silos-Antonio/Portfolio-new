# Portfolio V2.0 — Antonio Silos

Português · [Français](README.fr.md) · [English](README.en.md)

Portfólio de um desenvolvedor de software com foco em Python, backend e aplicações web, com experiência profissional em suporte técnico, sistemas empresariais, SQL e APIs. Evolução da V1, mantendo HTML, CSS e JavaScript puro.

## Executar localmente

Não há build nem dependências de produção. Na raiz:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Abra [o preview local](http://127.0.0.1:4173/). Também é possível abrir `index.html` diretamente; um servidor local reproduz melhor a hospedagem estática.

## Estrutura e conteúdo

- `index.html`: hero, projetos selecionados, experiência, sobre, stack, formação e contato.
- `projects/equilibrium.html`: case técnico do Equilibrium, com arquitetura, segurança, testes, decisões e estado atual.
- `assets/css/style.css`: layout, tokens visuais, estados de foco e media queries.
- `assets/data/translations.js`: conteúdo PT/FR/EN.
- `assets/js/i18n.js`: resolução do idioma e atualização de conteúdo, atributos e metadados.
- `assets/js/main.js`: menu mobile e gerenciamento de foco.
- `assets/images/`: imagens reais otimizadas, favicon e fontes visuais preservadas.
- `tests/`: verificação estática, validação HTML e testes em navegador.
- `docs/`: auditoria, evidências técnicas e relatório de validação.

A home dá prioridade ao Equilibrium, seguido pelo estudo de classificação de crédito e pela landing page para terapeuta. O HTML contém todo o conteúdo em português e permanece navegável sem JavaScript. Nenhum framework, CDN, fonte remota ou biblioteca de ícones é carregado pelo site.

## Idiomas

Ordem: `?lang=pt|fr|en` válido → preferência salva em `portfolio-language` → primeiro idioma suportado do navegador → português. O idioma é mantido nos links entre home e case, mesmo se o armazenamento estiver bloqueado.

A troca atualiza texto, `html lang`, labels, alt, título, description e Open Graph. Para editar conteúdo, mantenha as mesmas chaves nos três dicionários e sincronize o fallback em português no HTML. Os testes detectam divergências. Capturas de interfaces de projetos preservam o idioma original do software.

As páginas têm canonical estático. Crawlers sociais que não executam JavaScript recebem os metadados padrão em português; a tradução dinâmica não equivale a páginas traduzidas geradas no servidor.

## Validação

A aplicação não precisa de Node. As dependências de `package.json` são exclusivamente ferramentas de desenvolvimento, com versões fixadas no lockfile.

```sh
python tests/validate.py
npm ci
npx playwright install chromium
npm run check:html
npm test
```

É possível usar Chrome instalado definindo `BROWSER_CHANNEL=chrome` antes de `npm test` (PowerShell: `$env:BROWSER_CHANNEL='chrome'`). Os testes verificam ambas as páginas nos três idiomas e em cinco larguras, além de axe, teclado, armazenamento bloqueado, resolução de idioma, navegação entre páginas e modo sem JavaScript. Capturas e resultados vão para `.validation/`, ignorado pelo Git.

## Hospedagem

Compatível com Netlify ou outro servidor estático: sem comando de build e diretório de publicação na raiz. O domínio existente é [antoniosnportifolio.netlify.app](https://antoniosnportifolio.netlify.app/). A V2 foi implementada localmente; não houve publicação automática. Antes de publicar por outro domínio, atualize canonical, URLs Open Graph, `robots.txt` e `sitemap.xml`.

Preserve `google450156a250680164.html`. Não publique `.validation/`, `node_modules/`, documentos internos de auditoria ou o ZIP de backup local. Selecione apenas HTML público, `assets/` necessários, robots, sitemap e verificação Google no artefato de publicação.

## Fontes e pendências

O contexto profissional segue `PORTFOLIO_V2_CONTEXT.md`. O conteúdo técnico do Equilibrium foi conferido no README e código local, sem modificar esse repositório. O [repositório público do Equilibrium](https://github.com/Silos-Antonio/Projeto-Equilibrium) foi confirmado na verificação final e está vinculado na home e no case. Não há demo pública confirmada. O link de currículo depende de um arquivo real. As demais pendências e evidências estão no [relatório V2](docs/RELATORIO_V2.md) e na [auditoria inicial](docs/AUDITORIA_V2.md).

GitHub: [Silos-Antonio](https://github.com/Silos-Antonio) · [Repositório do portfólio](https://github.com/Silos-Antonio/Portfolio) · [LinkedIn](https://www.linkedin.com/in/antonio-silos-415b64175) · [E-mail](mailto:antonio.silos95@outlook.com)

Código sob [licença MIT](LICENSE).
