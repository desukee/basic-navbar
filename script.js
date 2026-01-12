const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  menuToggle.textContent = navLinks.classList.contains("show") ? "✕" : "☰";
});

// Close menu when a link is clicked (mobile polish)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.textContent = "☰";
  });
});
