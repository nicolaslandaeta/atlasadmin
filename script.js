document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Alternar la visibilidad del menú móvil al hacer clic en la hamburguesa
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Cerrar el menú móvil al hacer clic en un enlace
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });

  // Cerrar el menú móvil si la ventana se agranda
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});
