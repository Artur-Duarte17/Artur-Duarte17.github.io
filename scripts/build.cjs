const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const root = path.resolve(__dirname, "..");
const output = path.join(root, "dist");
if (
  path.dirname(output) !== root ||
  path.basename(output) !== "dist" ||
  fs.lstatSync(root).isSymbolicLink()
)
  throw new Error("Destino inválido");
if (fs.existsSync(output) && fs.lstatSync(output).isSymbolicLink())
  throw new Error("dist não pode ser link simbólico");
execFileSync(process.execPath, [path.join(__dirname, "render-catalog.cjs")], {
  stdio: "inherit",
});
execFileSync(process.execPath, [path.join(__dirname, "check.cjs")], {
  stdio: "inherit",
});
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output);
const allowed = /\.(html|css|js|svg|ico|png|jpe?g|webp|pdf|xml|txt|woff2)$/i;
const files = [];
function copy(relative) {
  const source = path.join(root, relative);
  const stat = fs.lstatSync(source);
  if (stat.isSymbolicLink())
    throw new Error(`Link simbólico não publicado: ${relative}`);
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(source)) {
      if (entry.startsWith(".")) continue;
      copy(path.join(relative, entry));
    }
  } else if (allowed.test(relative)) {
    const target = path.join(output, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(source, target);
    files.push({ path: relative.replaceAll("\\", "/"), bytes: stat.size });
  }
}
// Public allowlist. Archives, scripts and working documents stay out.
[
  "index.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "assets",
].forEach(copy);
fs.writeFileSync(path.join(output, ".nojekyll"), "");
console.log(
  `Publicação: ${files.length} arquivos, ${files.reduce((n, f) => n + f.bytes, 0).toLocaleString("pt-BR")} bytes. Saída: dist/`,
);
