const correoIniciarSesion = document.getElementById("correoIniciarSesion");
const claveIniciarSesion = document.getElementById("claveIniciarSesion");
const btnIniciarSesion = document.getElementById("btnIniciarSesion");
const localSTG = JSON.parse(localStorage.getItem(`usuariosKey`)) || [];

btnIniciarSesion.addEventListener("click", () => {
  let usuarioLogin = {
    email: correoIniciarSesion.value.trim(),
    contraseña: claveIniciarSesion.value.trim(),
  };

  let usuarioEncontrado = localSTG.filter(
    (objeto) =>
      objeto.email.toLowerCase().trim() == usuarioLogin.email &&
      objeto.contraseña == usuarioLogin.contraseña
  );

  if (usuarioEncontrado.length == 0) {
    alert("Email o contraseña incorrecto");
  } else {
    if (usuarioEncontrado[0].rol === "admin") {
      localStorage.setItem(
        "usuarioAutenticadoKey",
        JSON.stringify(usuarioEncontrado[0])
      );
      location.href = "../pages/abmArtistas.html";
    } else {
      localStorage.setItem(
        "usuarioAutenticadoKey",
        JSON.stringify(usuarioEncontrado[0])
      );
      location.href = "../index.html";
    }
    alert("Usuario autenticado");
  }
});
