# Codex Prompt — Portfolio V2.0

> Instruções operacionais para auditar, planejar, implementar e validar a versão 2.0 do portfólio profissional de Antonio Silos.
>
> **Versão:** 1.1  
> **Documento obrigatório de contexto:** `PORTFOLIO_V2_CONTEXT.md`
>
> Este arquivo define **como trabalhar**.  
> `PORTFOLIO_V2_CONTEXT.md` define **o que o portfólio deve representar** e deve ser tratado como a principal fonte de verdade sobre conteúdo, posicionamento e prioridades.

---

## 1. Missão

Você está evoluindo um portfólio profissional existente.

O objetivo não é apenas modernizar o CSS nem substituir a V1 por um template genérico.

A V2 deve representar de forma profissional, clara e tecnicamente coerente o momento atual de Antonio Silos, melhorando:

- arquitetura da informação;
- narrativa;
- hierarquia visual;
- apresentação dos projetos;
- UX;
- responsividade;
- acessibilidade;
- performance;
- SEO;
- internacionalização;
- organização do código;
- manutenção futura.

A implementação deve continuar proporcional ao tamanho e à finalidade do projeto.

---

## 2. Fonte de verdade

Antes de alterar qualquer arquivo, leia integralmente:

```text
PORTFOLIO_V2_CONTEXT.md
```

Use esse documento como fonte principal para:

- identidade profissional;
- experiências;
- formação;
- idiomas;
- stack;
- hierarquia dos projetos;
- conteúdo que deve aparecer ou ser removido;
- posicionamento do Equilibrium;
- direção visual;
- critérios de autenticidade.

### Ordem de precedência

Quando houver conflito entre fontes, siga esta ordem:

1. `PORTFOLIO_V2_CONTEXT.md` para posicionamento, carreira, conteúdo e prioridades;
2. repositório atual do Equilibrium para detalhes técnicos do Equilibrium;
3. README atual do Equilibrium;
4. arquivos atuais do portfólio apenas como referência da V1.

Não use conteúdo antigo do portfólio para sobrescrever informações atualizadas do contexto.

---

## 3. Regra para informações ausentes ou conflitantes

Nunca escolha arbitrariamente entre informações contraditórias.

Se encontrar:

- e-mails diferentes;
- datas divergentes;
- links diferentes;
- cargos conflitantes;
- informação profissional não confirmada;
- URL de projeto não verificável;
- qualquer outro dado ambíguo;

então:

1. não invente;
2. não escolha o valor que “parece mais provável”;
3. preserve apenas aquilo que estiver confirmado;
4. se necessário, omita temporariamente o elemento da interface;
5. registre a inconsistência em **Pendências** no relatório final.

Para conteúdo técnico do Equilibrium, valide no repositório/README antes de publicar a afirmação no portfólio.

---

## 4. Repositório opcional do Equilibrium

Se existir acesso local ao repositório do Equilibrium, use-o somente como **referência técnica**.

Caminho opcional:

```text
<C:\Users\Antônio\Documents\Projeto Equilibrium>
```

Se o placeholder não tiver sido substituído ou o caminho não existir, prossiga normalmente.

Não bloqueie a refatoração por isso.

### Não modificar o Equilibrium

Não altere arquivos do repositório Equilibrium sem instrução explícita separada.

Se houver acesso Git ao projeto, é permitido consultar:

```bash
git remote -v
```

para descobrir a URL oficial do repositório.

Não executar push, commit ou qualquer alteração remota no Equilibrium.

---

# FASE 1 — AUDITORIA

## 5. Audite o projeto atual antes de editar

Examine todo o repositório do portfólio.

No mínimo:

```text
index.html
assets/css/style.css
assets/js/script.js
assets/images/
README.md
README.fr.md
LICENSE
google450156a250680164.html
PORTFOLIO_V2_CONTEXT.md
```

E qualquer outro arquivo existente.

Mapeie:

- estrutura de diretórios;
- HTML atual;
- CSS atual;
- JavaScript atual;
- navegação;
- internacionalização;
- assets;
- links externos;
- metadados;
- projetos apresentados;
- conteúdo profissional;
- responsividade;
- acessibilidade;
- SEO;
- possíveis arquivos obsoletos;
- possíveis links quebrados.

---

## 6. Classifique a V1

Antes da implementação, produza um diagnóstico conciso dividido em:

### Manter
Partes que continuam tecnicamente adequadas.

### Refatorar
Partes úteis que precisam evoluir.

### Remover
Conteúdo, código ou assets que perderam função.

### Criar
Novos componentes, páginas ou estruturas necessárias.

Não use a auditoria para justificar uma reescrita completa sem necessidade.

---

## 7. Não parar no diagnóstico

Depois da auditoria e de um plano conciso:

> prossiga com a implementação.

Não aguarde aprovação intermediária para decisões já resolvidas por `PORTFOLIO_V2_CONTEXT.md`.

Só interrompa a execução se houver um bloqueio técnico real.

---

# FASE 2 — ARQUITETURA DA V2

## 8. Estrutura principal da home

Use como base:

```text
Header / Navegação
Hero
Projetos em destaque
Experiência profissional
Sobre
Stack / Tecnologias
Formação e cursos relevantes
Contato / Footer
```

Regras:

- projetos devem aparecer cedo;
- Equilibrium é o projeto principal;
- experiência profissional deve ter boa visibilidade;
- formação não deve ter mais destaque que os projetos;
- certificados não devem dominar a página.

---

## 9. Navegação

Substitua a experiência atual de grandes “abas” que escondem e exibem o conteúdo.

Prefira:

- página com fluxo vertical natural;
- links por âncora;
- header simples;
- navegação mobile acessível;
- comportamento previsível.

Não use JavaScript para esconder a maior parte do portfólio e simular páginas.

---

# FASE 3 — ESTRUTURA DOS PROJETOS

## 10. Hierarquia

A hierarquia exata de projetos deve vir de `PORTFOLIO_V2_CONTEXT.md`.

Não duplicar no código decisões que o contexto já define.

O princípio é:

> poucos projetos fortes, com pesos visuais diferentes.

Nunca incluir Orbit enquanto o contexto disser que ele não é um projeto implementado.

---

## 11. Equilibrium como case dedicado

O Equilibrium deve ser o único projeto que, nesta versão, recebe obrigatoriamente um case técnico completo.

### Estrutura recomendada

Na home:

- screenshot relevante;
- nome;
- descrição curta;
- stack resumida;
- CTA para case;
- CTA para GitHub;
- CTA para demo somente se houver URL funcional.

Crie uma página dedicada, preferencialmente:

```text
projects/equilibrium.html
```

ou estrutura equivalente simples e estática.

### A página do case deve priorizar

- visão geral;
- problema/contexto;
- solução;
- principais funcionalidades;
- arquitetura;
- decisões técnicas;
- segurança;
- testes;
- screenshots;
- aprendizados;
- status;
- GitHub;
- demo, somente quando realmente disponível.

Não transformar a home em um README gigante.

### Fonte técnica

O conteúdo técnico do case deve ser sustentado pelo repositório ou README atual do Equilibrium.

Não transformar roadmap em funcionalidade entregue.

---

## 12. Outros projetos

Não crie páginas individuais extensas para todo projeto por padrão.

Projetos secundários podem ser apresentados diretamente na home com:

- imagem real;
- descrição curta;
- stack;
- GitHub;
- demo, quando existir.

Só crie outro case dedicado se houver conteúdo técnico suficiente que justifique isso.

---

## 13. Evidência visual

Não invente:

- screenshots;
- dashboards;
- mockups falsos;
- gráficos;
- resultados;
- números;
- métricas;
- interfaces que não existem.

Se um projeto não possuir imagem adequada:

1. use apresentação tipográfica simples;
2. reutilize apenas assets reais relevantes;
3. registre a necessidade de novo asset como pendência.

Para projetos de dados/ML, prefira outputs reais, gráficos existentes, notebook ou resultados reais quando disponíveis.

---

# FASE 4 — CONTEÚDO

## 14. Não reescrever fatos

Todo conteúdo deve respeitar `PORTFOLIO_V2_CONTEXT.md`.

Não:

- aumentar senioridade;
- inventar responsabilidade;
- inventar impacto;
- inventar número de usuários;
- inventar métricas;
- chamar estudo superficial de domínio;
- transformar projeto pessoal em produto comercial sem base.

O texto deve ser profissional, mas proporcional à evidência.

---

## 15. Hero

O hero deve ser curto.

Ele deve responder rapidamente:

- quem é Antonio;
- foco profissional;
- área técnica;
- onde ver os projetos;
- GitHub;
- LinkedIn;
- currículo, se existir um arquivo/link real.

Evitar autobiografia e parágrafos longos no topo.

---

## 16. Experiência profissional

Transforme a experiência em blocos objetivos.

Preferir:

```text
Cargo
Empresa
Período
2–5 bullets relevantes
```

Use o contexto como fonte factual.

Não transformar cada cargo em um ensaio.

---

## 17. Sobre

Manter curto, humano e específico.

Mostrar trajetória, não uma coleção de adjetivos.

Evitar frases genéricas de portfólio como:

```text
apaixonado por tecnologia
sempre aprendendo
curioso e criativo
```

salvo quando houver razão concreta para usá-las.

---

## 18. Stack

Comunicar conhecimento por grupos simples, conforme definido no contexto.

Não criar:

- barras de porcentagem;
- estrelas;
- níveis “iniciante/intermediário/avançado” sem critério;
- mural de dezenas de logos;
- carrossel horizontal de tecnologias.

---

# FASE 5 — DIREÇÃO VISUAL

## 19. Objetivo visual

A V2 deve parecer:

- profissional;
- madura;
- tecnológica sem clichê;
- editorial;
- organizada;
- contemporânea.

Não deve parecer:

- gamer;
- crypto;
- template de startup genérica;
- dashboard;
- currículo em cards;
- landing page de “hacker”.

---

## 20. Guardrails visuais

Use como direção:

```text
azul-marinho / charcoal
tons neutros
dourado discreto como acento
```

Regras:

- não usar preto puro como fundo dominante da página inteira;
- dourado deve ser acento, não cor principal;
- não usar glow;
- evitar neon;
- sombras devem ser discretas;
- evitar glassmorphism excessivo;
- evitar gradientes decorativos sem função;
- evitar excesso de bordas;
- evitar excesso de cards;
- evitar grandes áreas preenchidas por efeitos;
- manter largura máxima de conteúdo consistente;
- manter comprimento confortável para textos;
- usar sistema coerente de espaçamentos;
- usar um sistema consistente de border-radius;
- animações devem ser curtas, discretas e funcionais.

Se usar transições:

- respeitar `prefers-reduced-motion`;
- não atrasar navegação;
- não esconder conteúdo importante.

---

## 21. Tipografia

Escolha uma combinação profissional e legível.

Priorize:

- boa hierarquia;
- leitura confortável;
- poucas famílias tipográficas;
- bom contraste;
- escala responsiva.

Evite usar tipografia “tech” decorativa no corpo do texto.

---

## 22. Assets atuais

Audite todos os arquivos de `assets/images/`.

Classifique-os em:

- reutilizar;
- otimizar;
- substituir;
- remover.

Não reutilize tudo só porque já existe.

Priorize:

- screenshots reais;
- foto profissional, se fizer sentido;
- imagens que funcionem como evidência do trabalho.

Evite usar logos de tecnologias como decoração repetitiva.

---

# FASE 6 — STACK DO PORTFÓLIO

## 23. Não trocar tecnologia sem necessidade

A stack padrão da V2 deve continuar sendo:

```text
HTML
CSS
JavaScript
```

Não migrar automaticamente para:

- React;
- Next.js;
- Vue;
- Astro;
- TypeScript;
- Tailwind;
- bundlers;
- frameworks de animação.

Só realizar migração se houver benefício técnico concreto e claramente superior à complexidade adicionada.

Por padrão:

> refatore bem a base atual.

---

## 24. Organização de arquivos

É permitido reorganizar o frontend.

Uma opção simples:

```text
assets/
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── i18n.js
├── data/
│   └── translations.js
└── images/

projects/
└── equilibrium.html
```

Adapte se necessário.

Não fragmente o projeto em dezenas de arquivos sem benefício real.

---

# FASE 7 — INTERNACIONALIZAÇÃO

## 25. Idiomas

A V2 deve oferecer os idiomas definidos no contexto.

O sistema deve usar códigos textuais no seletor:

```text
PT
FR
EN
```

Não depender exclusivamente de bandeiras.

---

## 26. Ordem de resolução do idioma

Implemente comportamento determinístico:

1. parâmetro `?lang=` válido na URL;
2. preferência salva anteriormente no `localStorage`;
3. idioma preferencial do navegador, se suportado;
4. português como fallback.

Valores suportados:

```text
pt
fr
en
```

Exemplo:

```text
?lang=fr
```

deve abrir diretamente em francês.

---

## 27. Ao trocar o idioma

Atualizar:

- conteúdo visível;
- `<html lang="">`;
- labels acessíveis;
- navegação;
- textos de botões;
- título da página;
- meta description quando tecnicamente viável;
- textos do case Equilibrium.

Persistir a preferência em `localStorage`.

Se houver navegação entre a home e o case, preservar o idioma selecionado.

---

## 28. Organização das traduções

Não manter um objeto enorme de tradução misturado com toda a lógica de interação.

Separe conteúdo e comportamento.

Use solução simples compatível com hospedagem estática, como:

- módulo JS dedicado;
- arquivo de dados;
- JSON;
- objeto isolado.

Não adotar framework para resolver i18n.

---

# FASE 8 — SEMÂNTICA E ACESSIBILIDADE

## 29. HTML

Usar corretamente:

```text
header
nav
main
section
article
footer
```

Manter:

- um `h1` principal por página;
- hierarquia lógica de headings;
- links para navegação;
- buttons para ações.

---

## 30. Acessibilidade

Garantir:

- teclado;
- foco visível;
- contraste;
- labels adequados;
- alt text;
- touch targets;
- menu mobile acessível;
- `aria-*` apenas quando necessário;
- `prefers-reduced-motion`.

Não depender exclusivamente de:

- hover;
- cor;
- animação.

---

# FASE 9 — RESPONSIVIDADE

## 31. Testar diferentes larguras

A V2 deve funcionar bem em:

- smartphones pequenos;
- smartphones maiores;
- tablets;
- notebooks;
- desktops.

Verificar:

- ausência de overflow horizontal;
- tipografia adaptável;
- imagens responsivas;
- CTAs sem colisão;
- header mobile funcional;
- grids que não dependam de larguras fixas frágeis.

---

# FASE 10 — PERFORMANCE

## 32. Otimização

Revisar:

- tamanho das imagens;
- formatos;
- dimensões explícitas;
- lazy loading;
- CSS não utilizado;
- JavaScript morto;
- scripts externos;
- bibliotecas de ícones;
- fontes.

Evitar dependências desnecessárias.

Não sacrificar clareza de código por micro-otimizações irrelevantes.

---

# FASE 11 — SEO

## 33. Head e metadados

Revisar:

- title;
- meta description;
- viewport;
- favicon;
- canonical, quando apropriado;
- Open Graph;
- preview social;
- idioma;
- headings;
- alt text.

O SEO deve refletir o posicionamento profissional definido no contexto.

---

## 34. Arquivos existentes de indexação

Preserve arquivos de serviços existentes, especialmente:

```text
google450156a250680164.html
```

Não removê-lo sem motivo explícito.

Se simples e apropriado, revisar/adicionar:

```text
robots.txt
sitemap.xml
```

---

# FASE 12 — LINKS, CONTATO E PRIVACIDADE

## 35. Links profissionais

Use apenas links verificados.

Se houver inconsistência entre link visível e `href`, não escolha arbitrariamente.

Registre a divergência e omita temporariamente se necessário.

Priorizar:

- GitHub;
- LinkedIn;
- e-mail;
- currículo.

Não destacar telefone/endereço sem necessidade definida no contexto.

---

## 36. Dados sensíveis

Nunca adicionar:

- tokens;
- credenciais;
- segredos;
- chaves privadas;
- `.env`;
- informações pessoais desnecessárias.

---

# FASE 13 — SEGURANÇA OPERACIONAL / GIT

## 37. Git

Você pode:

- editar arquivos locais;
- criar arquivos;
- remover arquivos comprovadamente obsoletos;
- executar comandos de inspeção;
- executar testes locais.

Você NÃO deve executar sem instrução explícita:

```text
git commit
git push
git tag
deploy
netlify deploy
qualquer publicação remota
```

Não alterar branches remotas.

---

## 38. Exclusão de arquivos

Não fazer limpeza em massa no início.

Primeiro:

1. implemente a V2;
2. confirme referências;
3. valide funcionamento;
4. só depois remova assets comprovadamente sem uso.

---

# FASE 14 — IMPLEMENTAÇÃO

## 39. Estratégia

Faça mudanças coerentes.

É aceitável reestruturar significativamente:

```text
index.html
assets/css/style.css
assets/js/
```

quando necessário.

Não preserve dívida técnica só para diminuir o diff.

Também não reescreva código bom sem benefício claro.

---

## 40. JavaScript

JavaScript deve ser usado principalmente para:

- menu mobile;
- internacionalização;
- persistência de idioma;
- pequenas melhorias progressivas.

Evitar JS para:

- layout;
- esconder o conteúdo principal;
- efeitos decorativos pesados;
- simular navegação desnecessariamente.

Qualquer seletor deve ser defensivo quando o elemento puder não existir.

Nenhum erro de console deve permanecer.

---

# FASE 15 — README DO PORTFÓLIO

## 41. Atualizar documentação

Depois de implementar a V2, atualize também:

```text
README.md
README.fr.md
```

e crie uma versão em inglês se a arquitetura adotada justificar:

```text
README.en.md
```

ou mantenha `README.md` como inglês, conforme a convenção escolhida.

A documentação deve refletir a V2 real:

- estrutura;
- stack;
- idiomas;
- como executar;
- arquitetura;
- deploy;
- links.

Não deixar README descrevendo a V1 depois da refatoração.

---

# FASE 16 — VALIDAÇÃO

## 42. Conteúdo

Confirmar:

- contexto profissional atualizado;
- Equilibrium corretamente posicionado;
- Orbit ausente;
- projetos corretos;
- nenhuma feature inventada;
- nenhum texto antigo contraditório;
- PT/FR/EN consistentes.

---

## 43. HTML

Verificar:

- tags válidas;
- um `h1` por página;
- hierarquia de headings;
- IDs únicos;
- links internos;
- caminhos relativos;
- atributos adequados.

---

## 44. CSS

Verificar:

- sem overflow horizontal;
- sem regras antigas inúteis relevantes;
- responsividade;
- foco;
- contraste;
- consistência visual.

---

## 45. JavaScript

Verificar:

- console sem erros;
- menu;
- idioma;
- `localStorage`;
- `?lang=`;
- persistência do idioma entre páginas;
- ausência de código morto relevante.

---

## 46. Assets

Verificar:

- referências válidas;
- arquivos ausentes;
- imagens corretas;
- alt text;
- assets removidos sem referências residuais.

---

## 47. Links

Verificar:

- GitHub;
- LinkedIn;
- e-mail;
- currículo;
- Equilibrium;
- demos.

Não considerar válido apenas porque o texto “parece URL”.

---

## 48. Testes técnicos

Quando as ferramentas permitirem, execute:

- validação HTML;
- busca por assets inexistentes;
- teste de links internos;
- teste de múltiplos viewports;
- inspeção de console;
- Lighthouse ou equivalente;
- revisão básica de acessibilidade.

Se algo não puder ser testado:

> registre explicitamente no relatório final.

Não afirmar que foi testado se não foi.

---

# FASE 17 — CRITÉRIO DE ACEITE

## 49. O visitante deve entender rapidamente

1. Quem é Antonio Silos?
2. Qual é seu foco?
3. Qual é sua experiência profissional?
4. O que ele constrói?
5. Por que o Equilibrium é relevante?
6. Quais tecnologias ele usa?
7. Onde estão os projetos?
8. Onde está o GitHub?
9. Onde está o LinkedIn?
10. Como entrar em contato?

---

## 50. Percepção final desejada

A V2 deve comunicar:

> Este é um desenvolvedor em início de carreira com experiência profissional real em sistemas, capacidade de investigar problemas e capacidade prática de construir aplicações completas.

Não deve comunicar:

> Este é um estudante tentando mostrar toda tecnologia que já estudou.

---

# FASE 18 — RELATÓRIO FINAL

## 51. Ao terminar

Forneça um resumo conciso contendo:

### Auditoria
Principais problemas encontrados na V1.

### Arquitetura
Estrutura escolhida para a V2.

### Design
Principais decisões visuais.

### Conteúdo
Mudanças relevantes de posicionamento.

### Código
Refatorações importantes.

### Arquivos alterados
Criados, modificados e removidos.

### Validação
Testes efetivamente realizados.

### Pendências
Somente aquilo que depende de:

- informação não confirmada;
- link externo ausente;
- asset que ainda precisa ser criado;
- decisão humana;
- recurso indisponível no ambiente.

---

# 52. Regras finais

Durante todo o trabalho:

- leia `PORTFOLIO_V2_CONTEXT.md` antes de codificar;
- trate o contexto como fonte de verdade;
- não duplique fatos desnecessariamente quando puder referenciar o contexto;
- não invente informações;
- não invente métricas;
- não invente URLs;
- não invente screenshots;
- não invente projetos;
- não transformar roadmap em feature;
- não inflar senioridade;
- não usar framework sem necessidade;
- não transformar o site em dashboard;
- não dar o mesmo peso a todos os projetos;
- não esconder a experiência profissional em suporte;
- não substituir evidência por adjetivos;
- não executar commit, push ou deploy sem autorização;
- preservar simplicidade de manutenção;
- preservar hospedagem estática;
- priorizar clareza, evidência e autenticidade.

A V2 deve parecer uma evolução profissional genuína da V1, não um template genérico novo.
