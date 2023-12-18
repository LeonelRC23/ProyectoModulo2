(function validarDato() {
  let usuarioAutenticado =
    JSON.parse(localStorage.getItem("usuarioAutenticadoKey")) || null;

  if (usuarioAutenticado == null) {
    location.href = "/pages/iniciarSesion.html";
  }
})();
