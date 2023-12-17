(function validarDato() {
  let usuarioAutenticado =
    JSON.parse(localStorage.getItem("usuarioAutenticadoKey")) || null;

  if (usuarioAutenticado !== null) {
    if (usuarioAutenticado.rol === "user") {
      location.href = "/index.html";
    }
  }
})();
