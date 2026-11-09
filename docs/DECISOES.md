# Decisões e verificação

## Arquitetura

HTML/CSS/JS sem framework ou dependências npm. GSAP e ScrollTrigger 3.13.0 locais, com avisos preservados. CSS 3D e SVG atendem à composição visual; não há necessidade de React, Three.js ou suavização artificial de scroll.

Conteúdo e catálogo ficam no HTML. Os dados em data/projects.cjs alimentam a geração local. Navegação, busca/modal e animações têm scripts separados; nenhum recurso funcional depende de GSAP. Estilos consolidados por seção e breakpoint em assets/css/site.css.

## Movimento e acessibilidade

Hero com entrada coordenada. Conexões é a única cena com pin, habilitado a partir de 900 × 820 px para acomodar sua altura e o cabeçalho. Telas menores mantêm o fluxo normal. Projetos têm entradas curtas e resposta ao ponteiro fino. Sem loops contínuos.

Movimento reduzido inicia pausado. O controle visível permite ativar ou pausar; contexto e matchMedia revertem estilos, listeners e pin. Detalhes nativos funcionam sem scripts da página; modal usa foco inicial, Escape e retorno ao acionador. Menu móvel tem estado e fechamento por Escape.

Links de seção usam uma animação curta com requestAnimationFrame, desaceleração cúbica e duração entre 500 e 1050 ms conforme a distância. O destino respeita o cabeçalho fixo, atualiza o fragmento da URL e recebe foco sem novo salto. Mouse, toque, teclado, redimensionamento ou pausa interrompem a animação. Links de projetos continuam abrindo seus detalhes. Sem scripts, há fallback CSS nativo. A rolagem manual permanece nativa, sem biblioteca adicional.

Sob preferência reduzida, o deslocamento animado inicia desativado; o visitante pode ativá-lo explicitamente no controle de movimento. Pausar desativa também a navegação animada.

## Limpeza do repositório — 09/11/2026

Artur autorizou excluir o conteúdo antigo, sem nova cópia de segurança. Removidos exercícios, imagens, protótipo HTML da Caderneta e currículo desatualizado, além de seus links, estilos e seletores de eventos. A entrada do antigo site no catálogo foi atualizada para representar o portfólio atual. Os produtos apresentados permanecem em seus repositórios próprios.

Removidos também temporários de testes, cache local e saída gerada. Nenhuma alteração no histórico Git. Documentação resumida a visão, backlog e decisões; auditoria de templates permanece na biblioteca externa.

## Publicação e verificação

Build por allowlist: página inicial, 404, robots, sitemap e assets. Dados-fonte, scripts, documentação e referências ficam fora da publicação. O verificador confere IDs, projetos, links, recursos, sintaxe JS e ausência das pastas obsoletas. O workflow verifica PRs e publica main; requer configurar Pages para GitHub Actions.

Na refatoração visual foram verificados desktop, celular e breakpoints intermediários, busca combinada e com acentos, vazio/recuperação, modal/foco/Escape, menu, movimento reduzido e ausência de vendors. Corrigidos excessos de largura em 320 e 720 px. Após a limpeza e a navegação suave, npm run build passou com os 15 projetos e sem links locais ausentes. A publicação passou de aproximadamente 7,38 MB para 228 KB (redução de cerca de 97%). A saída gerada foi removida após a validação; o workflow a recria na publicação.

Limites: sem auditoria WCAG integral, medição de FPS em aparelho físico ou execução do workflow remoto. Ilustrações são conceituais. Bibliotecas e fontes estão identificadas em THIRD_PARTY_NOTICES.md.
