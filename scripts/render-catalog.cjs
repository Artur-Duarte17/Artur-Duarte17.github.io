const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const projects = require("../data/projects.cjs");
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const base = "https://github.com/Artur-Duarte17/";
const catalogue = projects
  .map(
    (p, index) =>
      `<details class="catalog-entry" id="projeto-${escape(p.id)}" data-category="${escape(p.category)}" data-search="${escape([p.name, p.category, ...p.tech, p.summary, p.kind].join(" "))}"><summary><span class="catalog-number">${String(index + 1).padStart(2, "0")}</span><span class="catalog-description"><span class="catalog-title">${escape(p.name)}</span><span class="catalog-summary">${escape(p.summary)}</span><span class="catalog-stack">${escape(p.tech.join(" · "))}</span></span><span class="catalog-kind">${escape(p.category)}</span><span class="catalog-toggle"><span class="expand-word">Detalhes</span><span class="collapse-word">Fechar</span> <span class="toggle-symbol" aria-hidden="true">+</span></span></summary><div class="catalog-details"><p class="project-context">${escape(p.kind)}</p><div class="case-grid"><section><h3>O problema</h3><p>${escape(p.problem)}</p></section><section><h3>Minha participação</h3><p>${escape(p.contribution)}</p></section><section><h3>Decisões de implementação</h3><p>${escape(p.decision)}</p></section></div><details class="technical-note"><summary>Contexto e limites do projeto</summary><p>${escape(p.limit)}</p></details><a class="repo-link" href="${base + escape(p.repo)}" target="_blank" rel="noopener noreferrer">Ver código no GitHub <span aria-hidden="true">↗</span><span class="sr-only"> (abre em nova aba)</span></a></div></details>`,
  )
  .join("\n");
let html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const startMarker = "<!-- catalog:start -->";
const endMarker = "<!-- catalog:end -->";
const start = html.indexOf(startMarker);
const end = html.indexOf(endMarker);
if (start < 0 || end <= start)
  throw new Error("Marcadores do catálogo não encontrados.");
html =
  html.slice(0, start + startMarker.length) +
  "\n" +
  catalogue +
  "\n" +
  html.slice(end);
fs.writeFileSync(path.join(root, "index.html"), html);
console.log(
  `Catálogo estático atualizado: ${projects.length} projetos e grupos.`,
);
