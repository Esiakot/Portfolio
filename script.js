// Fonction pour mettre à jour la barre de progression du fil d'Ariane
window.addEventListener("scroll", () => {
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY;
  const scrollProgress = (scrollTop / scrollHeight) * 100;

  const progressBar = document.getElementById("breadcrumbProgress");
  progressBar.style.width = `${scrollProgress}%`;
});

// Changement entre mode clair et sombre
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});
