const usuarios = JSON.parse(localStorage.getItem("usuariosKey")) || [];

const table = document.querySelector("table tbody");
usuarios.forEach((usuario) => {
  const newRow = table.insertRow();
  newRow.insertCell().textContent = usuario.id;
  newRow.insertCell().textContent = usuario.nombreCompleto;
  newRow.insertCell().textContent = usuario.usuario;
  newRow.insertCell().textContent = usuario.email;
  newRow.insertCell().textContent = usuario.contraseña;
  newRow.insertCell().textContent = usuario.rol;
  newRow.insertCell().textContent = usuario.habilitado;

  const cellAcciones = newRow.insertCell();

  const btnGroup = document.createElement("div");
  btnGroup.classList.add("btn-group");

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.classList.add("btn", "btn-danger", "btn-sm");
  btnEliminar.addEventListener("click", () => eliminarUsuario(usuario.id));
  btnGroup.appendChild(btnEliminar);

  const btnInhabilitar = document.createElement("button");
  btnInhabilitar.textContent = "Inhabilitar";
  btnInhabilitar.classList.add("btn", "btn-secondary", "btn-sm");
  btnInhabilitar.addEventListener("click", () =>
    inhabilitarUsuario(usuario.id)
  );
  btnGroup.appendChild(btnInhabilitar);

  cellAcciones.appendChild(btnGroup);
});

const eliminarUsuario = (id) => {
  const confirmacion = confirm(
    "¿Estás seguro de que quieres eliminar este usuario?"
  );
  if (confirmacion) {
    const nuevosUsuarios = usuarios.filter((usuario) => usuario.id !== id);
    localStorage.setItem("usuariosKey", JSON.stringify(nuevosUsuarios));
    window.location.reload();
  }
};
