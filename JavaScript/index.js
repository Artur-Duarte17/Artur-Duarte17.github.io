document.getElementById("button-toggle").addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});
