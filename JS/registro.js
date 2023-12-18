const inputNombre = document.getElementById("nombre");
const inputNombredeUsuario = document.getElementById("nombredeUsuario");
const inputEmail = document.getElementById("email");
const inputContraseña = document.getElementById("contraseña");
const btnRegistrarse = document.getElementById("btnRegistrarse");
const localSTG = JSON.parse(localStorage.getItem(`usuariosKey`)) || [];

btnRegistrarse.addEventListener("click", () => {

  let usuario = {
    id: crypto.randomUUID(),
    nombreCompleto: inputNombre.value.trim(),
    usuario: inputNombredeUsuario.value.trim(),
    email: inputEmail.value.trim(),
    contraseña: inputContraseña.value.trim(),
    rol: "user",
    habilitado: false,
    listaFavoritos: [],
  };

  let arrayAux = [...localSTG];
  arrayAux.push(usuario);
  localStorage.setItem("usuariosKey", JSON.stringify(arrayAux));
  window.location.reload();
});
