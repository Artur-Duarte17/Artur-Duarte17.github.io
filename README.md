# Artur Duarte · Desenvolvimento & pesquisa

Portfólio profissional estático com projetos, experiência e pesquisa aplicada. HTML semântico, CSS e JavaScript, com GSAP/ScrollTrigger locais para a coreografia de movimento. Sem framework, dependências npm ou servidor de aplicação em produção.

## Executar

Requer Node.js 22 ou superior. Não é necessário `npm install`.

```sh
npm run dev
```

Abra http://127.0.0.1:4174. Ctrl+C encerra o servidor. Para conferir exatamente o pacote de publicação, encerre o servidor de desenvolvimento e execute:

```sh
npm run build
npm run preview
```

## Organização

| Caminho | Responsabilidade |
|---|---|
| `index.html` | Conteúdo, destaques e catálogo pré-renderizado |
| `assets/css/site.css` | Tokens, layout, componentes, interação e breakpoints |
| `assets/js/navigation.js` | Menu móvel e indicação da seção atual |
| `assets/js/catalog.js` | Busca, filtros, detalhes, modal e cópia do email |
| `assets/js/motion.js` | Hero, cena Conexões, scroll e controle de movimento |
| `assets/vendor/` | GSAP e ScrollTrigger 3.13.0, avisos preservados |
| `data/projects.cjs` | Dados dos 15 projetos/grupos do catálogo |
| `scripts/` | Geração, verificações, build seletivo e servidor local |
| `docs/` | Escopo, decisões, validação e proveniência |

Após editar os dados do catálogo, execute `npm run catalog`. Esse comando modifica somente o trecho entre os marcadores `catalog:start` e `catalog:end`. Os quatro destaques editoriais são mantidos no HTML.

## Comportamento

- Conteúdo e detalhes nativos permanecem disponíveis sem os scripts da página.
- Busca e filtros não dependem das bibliotecas de animação.
- Movimento reduzido inicia o site pausado; um controle visível permite optar por ativar ou pausar.
- A cena Conexões usa pin apenas com pelo menos 900 × 820 px. Nos demais tamanhos mantém o fluxo de leitura.
- Modal com foco no título, fechamento por Escape e retorno ao acionador.
- Menu móvel com estado anunciado, Escape e fechamento após navegação.
- Fontes usam Google Fonts com fallback de sistema. Não há vídeo decorativo, WebGL, analytics ou backend no novo portfólio.

## Verificar e publicar

`npm run check` confere dados, IDs, âncoras, arquivos locais e sintaxe JS. `npm run build` gera o catálogo, executa essas verificações e cria `dist/` com uma lista explícita de arquivos públicos.

O workflow `.github/workflows/pages.yml` verifica pull requests e publica pushes em `main`. Antes da primeira publicação, selecione **Settings → Pages → Build and deployment → Source: GitHub Actions**. Veja a [documentação oficial de workflows do Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

Os pushes em `main` acionam o workflow de publicação no GitHub. O build publica somente `index.html`, `404.html`, `robots.txt`, `sitemap.xml` e `assets/`. A pasta `dist/` é gerada quando necessária e não deve entrar no commit.

## Conteúdo e referências

As imagens dos destaques são ilustrações conceituais em CSS, identificadas pelo contexto do catálogo. Não representam capturas dos produtos.

O repositório contém somente o portfólio atual. Os exercícios antigos, suas mídias, o protótipo HTML da Caderneta e o currículo desatualizado foram removidos, junto com seus links. Caderneta continua no catálogo como projeto independente; seu código fica no repositório próprio.

Nenhum código ou mídia dos templates proprietários estudados foi incorporado. A auditoria permanece na biblioteca de software externa. Veja [recursos de terceiros](THIRD_PARTY_NOTICES.md) e [decisões e validação](docs/DECISOES.md).
