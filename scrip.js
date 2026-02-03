document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("mensagem").textContent =
    "Obrigado! Em breve entraremos em contato.";
});

