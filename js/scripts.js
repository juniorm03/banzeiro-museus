// Exibir o modal de cadastro automaticamente
document.addEventListener("DOMContentLoaded", function () {
  const cadastroModal = new bootstrap.Modal(
    document.getElementById("cadastroModal")
  );
  cadastroModal.show();
});
