/* O HTML contém o catálogo completo. Este arquivo acrescenta busca e navegação. */
const catalogueEntries = [...document.querySelectorAll(".catalog-entry")];
const filters = [...document.querySelectorAll("[data-filter]")];
const searchInput = document.querySelector("#project-search");
const status = document.querySelector("#result-count");
let selectedCategory = "Todos";
const normalize = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR");
const matchesQuery = (entry, query) =>
  query
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => normalize(entry.dataset.search).includes(term));

function applyFilters() {
  const query = normalize(searchInput.value.trim());
  let count = 0;
  catalogueEntries.forEach((entry) => {
    const matches =
      (selectedCategory === "Todos" ||
        entry.dataset.category === selectedCategory) &&
      matchesQuery(entry, query);
    entry.hidden = !matches;
    if (matches) count++;
  });
  filters.forEach((button) => {
    const active = button.dataset.filter === selectedCategory;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
    const amount = catalogueEntries.filter(
      (entry) =>
        (button.dataset.filter === "Todos" ||
          entry.dataset.category === button.dataset.filter) &&
        matchesQuery(entry, query),
    ).length;
    button.querySelector(".filter-count").textContent = String(amount);
  });
  status.textContent = `${count} de ${catalogueEntries.length} projetos${selectedCategory !== "Todos" ? " · " + selectedCategory : ""}${searchInput.value.trim() ? " · busca: “" + searchInput.value.trim() + "”" : ""}`;
  document.querySelector("#empty-state").hidden = count !== 0;
  document.dispatchEvent(new CustomEvent("portfolio:filtered"));
}
function clearFilters() {
  selectedCategory = "Todos";
  searchInput.value = "";
  applyFilters();
}
filters.forEach((button) => {
  const badge = document.createElement("span");
  badge.className = "filter-count";
  badge.setAttribute("aria-hidden", "true");
  button.append(badge);
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.filter;
    applyFilters();
  });
});
searchInput.addEventListener("input", applyFilters);
document.querySelector("#clear-filters").addEventListener("click", () => {
  clearFilters();
  searchInput.focus();
});
document.querySelector("#reset-empty").addEventListener("click", () => {
  clearFilters();
  searchInput.focus();
});
document.querySelector(".catalog-tools").hidden = false;
applyFilters();

const projectDialog = document.querySelector("#project-dialog");
let dialogTrigger;
document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-project]");
  if (!trigger) return;
  const source = document.querySelector(`#projeto-${trigger.dataset.project}`);
  if (!source) return;
  // Os links continuam levando ao conteúdo na página se dialog não estiver disponível.
  if (typeof projectDialog.showModal !== "function") {
    source.open = true;
    return;
  }
  event.preventDefault();
  dialogTrigger = trigger;
  const content = document.querySelector("#dialog-content");
  const heading = document.createElement("h2");
  heading.id = "dialog-title";
  heading.tabIndex = -1;
  heading.textContent = source.querySelector(".catalog-title").textContent;
  const stack = document.createElement("p");
  stack.className = "dialog-category";
  stack.textContent = source.querySelector(".catalog-stack").textContent;
  const body = source.querySelector(".catalog-details").cloneNode(true);
  content.replaceChildren(heading, stack, body);
  projectDialog.showModal();
  document.body.classList.add("modal-open");
  heading.focus();
});
document
  .querySelector("#close-dialog")
  .addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("click", (event) => {
  if (event.target !== projectDialog) return;
  const rect = projectDialog.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  )
    projectDialog.close();
});
projectDialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  dialogTrigger?.focus();
});
const revealHashTarget = () => {
  const id = location.hash.slice(1);
  const target = document.getElementById(id);
  if (target?.classList.contains("catalog-entry")) {
    clearFilters();
    target.open = true;
  }
};
window.addEventListener("hashchange", revealHashTarget);
revealHashTarget();
const copyButton = document.querySelector("#copy-email");
copyButton.hidden = false;
copyButton.addEventListener("click", async () => {
  const feedback = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText("monteiroarturduarte@gmail.com");
    feedback.textContent = "Email copiado.";
  } catch {
    feedback.textContent =
      "Não foi possível copiar. Use o link de email ou selecione o endereço acima.";
  }
});
