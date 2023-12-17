const nombreCompleto = document.getElementById("nombreCompleto");
const emailUsuario = document.getElementById("emailUsuario");
const nombreUsuario = document.getElementById("nombreUsuario");
const contraseñaUsuario = document.getElementById("contraseñaUsuario");
const rolSelect = document.getElementById("rolSelect");
const habilitadoSelect = document.getElementById("habilitadoSelect");
const botonAgregar = document.getElementById("botonAgregar");
const tabla = document.getElementById("cuerpoTablaUsuarios");
let usuarioAutenticadoKey =
  JSON.parse(localStorage.getItem("usuarioAutenticadoKey")) || null;

function borrarUsuario(idUsuario) {
  Swal.fire({
    title: "¿Estas seguro de borrar el usuario?",
    text: "No puedes revertir este paso posteriormente",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      let arrayAux = [...usuarios];
      arrayAux = arrayAux.filter((objeto) => objeto.id != idUsuario);
      localStorage.setItem(`usuariosKey`, JSON.stringify(arrayAux));
      window.location.reload();
    }
  });
}

const tomarDatosAgregar = () => {
  botonAgregar.addEventListener("click", () => {
    let usuario = {
      id: crypto.randomUUID(),
      nombreCompleto: nombreCompleto.value.trim(),
      usuario: nombreUsuario.value.trim(),
      email: emailUsuario.value.trim(),
      contraseña: contraseñaUsuario.value.trim(),
      rol: rolSelect.value,
      habilitado: habilitadoSelect.value == "true" ? true : false,
    };

    if (
      nombreCompleto.value.trim() != "" &&
      nombreUsuario.value.trim() != "" &&
      emailUsuario.value.trim() != "" &&
      contraseñaUsuario.value.trim() != ""
    ) {
      if (
        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email.value)
      ) {
        alert("Email no valido");
      } else if (/\s/.test(contraseñaUsuario.value)) {
        alert("La contraseña no debe tener espacios");
      } else if (
        contraseñaUsuario.value.split("").length < 8 ||
        contraseñaUsuario.value.split("").length > 14
      ) {
        alert("Contraseña entre 8 y 14 caracteres");
      } else {
        let arrayAux = [...usuarios];
        arrayAux.push(usuario);
        localStorage.setItem(`usuariosKey`, JSON.stringify(arrayAux));
        window.location.reload();
      }
    } else if (
      nombreCompleto.value.trim() == "" ||
      nombreUsuario.value.trim() == "" ||
      emailUsuario.value.trim() == "" ||
      contraseñaUsuario.value.trim() == ""
    ) {
      alert("Cargue todos los campos");
    }
  });
};

const agregarCancion = () => {
  for (let i = 0; i < usuarios.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
          <th scope="row">${i + 1}</th>
          <td>${usuarios[i].nombreCompleto}</td>
          <td>${usuarios[i].email}</td>
          <td>${usuarios[i].usuario}</td>
          <td>${usuarios[i].habilitado}</td>
          <td>${usuarios[i].rol}</td>
          <td>
            <div class="botonesABM" id="btnAdmin">
              <div>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="${"#modificacionUsuario" + usuarios[i].id}"
                >
                  Modificar
                </button>
                <div
                  class="modal fade"
                  id="${"modificacionUsuario" + usuarios[i].id}"
                  tabindex="-1"
                  aria-labelledby="modificacionUsuarioLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1
                          class="modal-title fs-5"
                          id="modificacionUsuarioLabel"
                        >
                          Modificar usuario "${usuarios[i].nombreCompleto}"
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <form>
                        <div class="mb-3">
                            <label for="nombreCompleto" class="form-label"
                            >Nombre completo</label
                            >
                            <input
                            type="text"
                            value="${usuarios[i].nombreCompleto}"
                            class="form-control"
                            id="${"nombreCompleto" + usuarios[i].id}"
                            maxlength="50"
                            minlength="1"
                            />
                            <div id="nombreCompleto" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="emailUsuario" class="form-label">Email</label>
                            <input
                            type="text"
                            value="${usuarios[i].email}"
                            class="form-control"
                            id="${"emailUsuario" + usuarios[i].id}"
                            maxlength="50"
                            minlength="1"
                            />
                            <div id="emailUsuario" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="nombreUsuario" class="form-label"
                            >Nombre usuario</label
                            >
                            <input
                            type="text"
                            value="${usuarios[i].usuario}"
                            class="form-control"
                            id="${"nombreUsuario" + usuarios[i].id}"
                            maxlength="50"
                            minlength="1"
                            />
                            <div id="nombreUsuario" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="contraseñaUsuario" class="form-label"
                            >Contraseña</label
                            >
                            <input
                            type="text"
                            value="${usuarios[i].contraseña}"
                            class="form-control"
                            id="${"contraseñaUsuario" + usuarios[i].id}"
                            maxlength="50"
                            minlength="1"
                            />
                            <div id="contraseñaUsuario" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="rolSelect" class="form-label">Rol</label>
                            <select ${
                              usuarios[i].id == usuarioAutenticadoKey.id &&
                              "disabled"
                            } name="rolSelect" class="form-select" id="${
      "rolSelect" + usuarios[i].id
    }">
                            <option ${
                              usuarios[i].rol == "user" && "selected=selected"
                            } value="user">Usuario</option>
                            <option ${
                              usuarios[i].rol == "admin" && "selected=selected"
                            } value="admin">Administrador</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="habilitadoSelect" class="form-label"
                            >Habilitado</label
                            >
                            <select
                            ${
                              usuarios[i].id == usuarioAutenticadoKey.id &&
                              "disabled"
                            }
                            name="habilitadoSelect"
                            class="form-select"
                            id="${"habilitadoSelect" + usuarios[i].id}"
                            >
                            <option ${
                              usuarios[i].habilitado == false &&
                              "selected=selected"
                            } value="false">No</option>
                            <option ${
                              usuarios[i].habilitado == Boolean("true") &&
                              "selected=selected"
                            }  value="true">Si</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <button
                            type="button"
                            class="btn btn-danger"
                            data-bs-dismiss="modal"
                            >
                            Cerrar
                            </button>
                            <button
                            type="button"
                            class="btn btn-primary"
                            id="${"botonAgregar" + usuarios[i].id}"
                            >
                            Guardar cambios
                            </button>
                        </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <button
                type="button"
                class="btn btn-primary"
                onclick="borrarUsuario('${usuarios[i].id}')"
                ${usuarios[i].id == usuarioAutenticadoKey.id && "disabled"}
                >
                Eliminar
                </button>
            </div>
            </div>
          </td>
          `;
    tabla.appendChild(tr);

    const nombreCompletoMod = document.getElementById(
      "nombreCompleto" + usuarios[i].id
    );
    const emailUsuarioMod = document.getElementById(
      "emailUsuario" + usuarios[i].id
    );
    const nombreUsuarioMod = document.getElementById(
      "nombreUsuario" + usuarios[i].id
    );
    const contraseñaUsuarioMod = document.getElementById(
      "contraseñaUsuario" + usuarios[i].id
    );
    const rolSelectMod = document.getElementById("rolSelect" + usuarios[i].id);
    const habilitadoSelectMod = document.getElementById(
      "habilitadoSelect" + usuarios[i].id
    );
    const botonAgregarMod = document.getElementById(
      "botonAgregar" + usuarios[i].id
    );

    botonAgregarMod.addEventListener("click", () => {
      let arrayAux = [...usuarios];
      let usuarioMod = {
        id: usuarios[i].id,
        nombreCompleto: nombreCompletoMod.value.trim(),
        usuario: nombreUsuarioMod.value.trim(),
        email: emailUsuarioMod.value.trim(),
        contraseña: contraseñaUsuarioMod.value.trim(),
        rol: rolSelectMod.value,
        habilitado: habilitadoSelectMod.value == "true" ? true : false,
      };

      if (
        nombreCompletoMod.value.trim() != "" &&
        nombreUsuarioMod.value.trim() != "" &&
        emailUsuarioMod.value.trim() != "" &&
        contraseñaUsuarioMod.value.trim() != ""
      ) {
        if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email.value)
        ) {
          alert("Email no valido");
        } else if (/\s/.test(contraseña.value)) {
          alert("La contraseña no debe tener espacios");
        } else if (
          contraseñaUsuarioMod.value.split("").length < 8 ||
          contraseñaUsuarioMod.value.split("").length > 14
        ) {
          alert("Contraseña entre 8 y 14 caracteres");
        } else {
          arrayAux = arrayAux.filter((objeto) => objeto.id != usuarios[i].id);
          arrayAux.push(usuarioMod);
          localStorage.setItem(`usuariosKey`, JSON.stringify(arrayAux));
          window.location.reload();
        }
      } else if (
        nombreCompletoMod.value.trim() == "" ||
        nombreUsuarioMod.value.trim() == "" ||
        emailUsuarioMod.value.trim() == "" ||
        contraseñaUsuarioMod.value.trim() == ""
      ) {
        alert("Cargue todos los campos");
      }
    });
  }
};

agregarCancion();
tomarDatosAgregar();
