const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const root = path.resolve(__dirname, "..");
for (const folder of ["Src", "Css", "JavaScript", "Caderneta", "image", "Document"]) {
  assert(!fs.existsSync(path.join(root, folder)), `Pasta obsoleta no repositório: ${folder}`);
}
const projects = require("../data/projects.cjs");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
assert.equal(ids.length, new Set(ids).size, "IDs duplicados");
assert.equal(
  new Set(projects.map((p) => p.id)).size,
  projects.length,
  "IDs de projetos duplicados",
);
assert.equal(
  (html.match(/class="catalog-entry"/g) || []).length,
  projects.length,
);
assert.equal(
  (html.match(/class="catalog-details"/g) || []).length,
  projects.length,
);
assert(
  /class="catalog-tools"\s+hidden/.test(html),
  "Busca só deve aparecer após inicialização JS",
);
assert(!html.includes('href="#"'), "Link sem destino");
for (const m of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const ref = m[1];
  if (/^(https?:|mailto:|tel:|data:)/.test(ref)) continue;
  if (ref.startsWith("#"))
    assert(ids.includes(ref.slice(1)), `Âncora ausente: ${ref}`);
  else
    assert(
      fs.existsSync(path.join(root, decodeURIComponent(ref.split("#")[0]))),
      `Arquivo ausente: ${ref}`,
    );
}
for (const project of projects) {
  assert(
    html.includes(`id="projeto-${project.id}"`),
    `Projeto ausente: ${project.id}`,
  );
  assert(/^[\w.-]+$/.test(project.repo), "Nome de repositório inválido");
}
for (const file of fs.readdirSync(path.join(root, "assets/js"))) {
  execFileSync(
    process.execPath,
    ["--check", path.join(root, "assets/js", file)],
    { stdio: "inherit" },
  );
}
console.log(
  `Verificado: ${projects.length} projetos; IDs, links, recursos e sintaxe JS válidos.`,
);
