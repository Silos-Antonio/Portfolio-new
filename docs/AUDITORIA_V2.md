# Auditoria anterior à implementação — Portfolio V2

Data: 07/10/2026. Fontes: CODEX_PROMPT.md e PORTFOLIO_V2_CONTEXT.md, lidos integralmente; HTML, CSS, JavaScript, READMEs, licença, arquivo Google e inventário dos assets da V1. Nenhum AGENTS.md encontrado na raiz, ancestrais consultados ou assets. Estado inicial: dois documentos de instrução e assets/images - Copia.zip não rastreados; preservados.

## Manter
- HTML/CSS/JavaScript puro, hospedagem estática, licença MIT e verificação Google.
- Nome e trajetória reais, GitHub, LinkedIn consistente entre HTML e README.
- Foto pessoal, favicon e screenshot real da landing page, com otimização.

## Refatorar
- Abas ocultam artigos e impedem navegação natural por fragmentos; experiência e projetos ficam depois de conteúdo genérico.
- CSS com containers de 900px, cards de 450px, itens mobile de 380px e regra inválida max-width:100%px. Scrolls internos e sombras laranja recorrentes.
- JS mistura dicionário e interação, usa seletores não defensivos e troca textos de botões apenas em português.
- Tradução apenas PT/FR, chave stacksTitle duplicada, expInit divergente de expInit1, html lang não atualizado, sem resolução de idioma ou persistência.
- SEO sem description, canonical e Open Graph. Imagens informativas usadas como backgrounds, sem dimensões explícitas; dois CDNs para ícones/bandeiras.
- Nome completo e título Fullstack Jr.; SIGMA aparece como emprego atual, divergindo do contexto. Nova prioridade: Python, backend, web e suporte empresarial atual no Grupo Acert.

## Remover da apresentação
- Homenagem/aniversário, ensino médio, galeria de certificados e lista excessiva de competências.
- Circuitos de fundo, ilustração abstrata de IA, logos repetitivos, telefone e endereço.
- Link vazio do Pygame. Experimento omitido por falta de destino verificável.
- E-mail inconsistente e CTA de currículo sem arquivo real.

## Criar
- Home vertical: hero, projetos, experiência, sobre, stack, formação, contato.
- Case estático projects/equilibrium.html com evidências verificadas no código local.
- Dicionários PT/FR/EN separados da lógica; menu com teclado, Escape, foco e aria-expanded.
- Metadados por página, sitemap, robots, documentação e validação local.

## Assets: inventário e classificação
- Otimizar/reutilizar: picture-1.jpg (800×800, 68 KB); projeto-cicera.png (1348×685, 656 KB), screenshot real; favicon_64.ico (64×64).
- Substituir: projeto-analise.png (1024×1024, 1,29 MB), ilustração sem evidência de resultado; usar texto editorial até existir output real.
- Remover quando confirmada ausência de referências: imagem-fundo.png; projeto-homenagem.png; projeto-netflix.png; projeto-jogo.png; backend.png; frontend.png; bancodedados.png; ia.png; todos os logos PNG/SVG de tecnologias; variantes redundantes do favicon.
- Certificados/diploma: não carregar na home; podem ser preservados como documentação histórica, sem galeria.
- assets/images - Copia.zip: arquivo não rastreado do usuário; preservar integralmente.
- Equilibrium: screenshots reais de docs/screenshots; selecionar imagens sem listagens de dados pessoais; converter cópias para WebP. Não copiar áudio nem modificar o projeto fonte.

## Evidências do Equilibrium
Fonte local: ../Projeto Equilibrium; README.pt-BR.md e código atual.
- app/utils/decorators.py + services/auth.py: status/perfil consultados no banco, sessão limpa quando usuário perde acesso, bcrypt e SQL parametrizado.
- app/extensions.py + routes/auth_routes.py: CSRFProtect e limite de 5 tentativas por minuto no POST de login.
- services/paciente_service.py e agendamento_service.py: filtros por terapeuta_id e validação da propriedade do paciente; normalização em utils/normalizer.py.
- services/sessao_service.py e templates/sessao.html: início persistido, timestamps e recomposição do cronômetro, encerramento de sessões.
- tests/test_auth.py, test_access.py, test_cli.py: cenários de autenticação, autorização e primeiro administrador com mocks. Inspeção de testes, sem executar/alterar o Equilibrium.
- Roadmap não tratado como recurso entregue. Status geral conforme contexto: escopo atual finalizado, projeto de portfólio ativo.

## Links e inconsistências
Verificação HTTP pública em 07/10/2026:
- GitHub/Silos-Antonio, Projeto-PythonIA, LP-Reiki-Cicera, cicera-terapias.netlify.app e antoniosnportifolio.netlify.app: HTTP 200.
- Projeto-Equilibrium: Git remoto local confirmado, mas HTTP 404 público. Omitir CTA até confirmação de acesso público; não inventar demo.
- LinkedIn: URL consistente em duas fontes locais; HTTP 999 (bloqueio automatizado). Preservar destino documental, registrar que acesso efetivo requer conferência manual.
- E-mail: texto antonio.silos95@outlook.com versus mailto antonio.silos@outlook.com.br. Omitir até confirmação.
- Currículo: não existe arquivo/link. Não criar CTA vazio.
- SIGMA: fim do vínculo de suporte não confirmado. Apresentar experiência anterior sem inventar período.
- Cobasi: datas divergentes entre HTML e tradução; fora da seleção V2.

## Plano
1. Implementar estrutura e narrativa nas duas páginas, preservando HTML legível sem JS.
2. Aplicar sistema visual navy/neutros/dourado discreto, layout editorial, imagens reais e tipografia do sistema.
3. Separar traduções, resolução de idioma e menu acessível.
4. Validar estrutura, links, console, idioma, armazenamento indisponível, teclado e viewports.
5. Remover apenas arquivos comprovadamente sem referência, atualizar READMEs e registrar resultados/pendências.

## Resoluções durante a execução
- E-mail confirmado pelo proprietário: antonio.silos95@outlook.com (vírgula no texto da resposta interpretada como erro de digitação).
- Equilibrium passou a constar na listagem pública da API do GitHub e respondeu HTTP 200 na revalidação. CTAs adicionados à home e ao case. A observação 404 acima registra apenas o estado inicial.
