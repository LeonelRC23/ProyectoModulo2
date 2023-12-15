const tabla = document.getElementById(`cuerpoTablaAlbumes`);
const agregarNombreAlbum = document.getElementById(`nombreAlbumAgregar`);
const agregarImagenAlbum = document.getElementById(`albumImgURL`);
const botonAgregarAlbum = document.getElementById(`botonAgregar`);
const listaArtistas = document.getElementById(`listaArtistas`);

class Album {
  constructor(id, nombre, imgURL, idArtista) {
    this.id = id;
    this.nombre = nombre;
    this.imgURL = imgURL;
    this.idArtista = idArtista;
  }
}

console.log(artistas);

function borrarAlbum(idAlbum) {
  Swal.fire({
    title: "¿Estas seguro de borrar el album?",
    text: "No puedes revertir este paso posteriormente",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      let arrayAux = [...albumes];
      arrayAux = arrayAux.filter((objeto) => objeto.id != idAlbum);
      localStorage.setItem(`albumesKey`, JSON.stringify(arrayAux));
      window.location.reload();
    }
  });
}

const tomarDatosAgregar = () => {
  botonAgregarAlbum.addEventListener("click", () => {
    let albumObjeto = new Album(
      crypto.randomUUID(),
      agregarNombreAlbum.value.trim(),
      agregarImagenAlbum.value.trim(),
      listaArtistas.value
    );
    let arrayAux = [...albumes];
    arrayAux.push(albumObjeto);
    localStorage.setItem(`albumesKey`, JSON.stringify(arrayAux));
    window.location.reload();
  });
};

const listarArtistas = () => {
  for (let i = 0; i < artistas.length; i++) {
    listaArtistas.innerHTML += `
        <option value="${artistas[i].id}">${artistas[i].nombre}</option>
        `;
  }
};

const agregarAlbum = () => {
  for (let i = 0; i < albumes.length; i++) {
    let arrayAux = [...artistas];
    let objetoArtista = arrayAux.filter(
      (artista) => artista.id == albumes[i].idArtista
    )[0];
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <th scope="row">${i + 1}</th>
        <td>${albumes[i].nombre}</td>
        <td>${objetoArtista.nombre}</td>
        <td>
          <div class="botonesABM">
            <div>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="${"#modificacionAlbumes" + albumes[i].id}"
              >
                Modificar
              </button>
              <div
                class="modal fade"
                id="${"modificacionAlbumes" + albumes[i].id}"
                tabindex="-1"
                aria-labelledby="modificacionAlbumesLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1
                        class="modal-title fs-5"
                        id="modificacionAlbumesLabel"
                      >
                        Modificar album "${albumes[i].nombre}"
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
                      <label for="nombreAlbum" class="form-label"
                        >Nombre del album</label
                      >
                      <input
                        value="${albumes[i].nombre}"
                        type="text"
                        class="form-control"
                        id="${"nombreAlbum" + albumes[i].id}"
                        maxlength="50"
                        minlength="1"
                      />
                      <div id="nombreAlbum" class="form-text"></div>
                    </div>
                    <div class="mb-3">
                    <select name="listaArtistas" class="form-select" id="${"listaArtistas" + albumes[i].id}">
                      <option value="">Ninguno</option>
                    </select>
                  </div>
                    <div class="mb-3">
                      <label for="imagenURL" class="form-label"
                        >URL de la imagen del album</label
                      >
                      <input value="${
                        albumes[i].imgURL
                      }" type="url" class="form-control" id="${
                        "imagenURL" + albumes[i].id
                      }" />
                    </div>
                    <div class="mb-3">
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Cerrar
                      </button>
                      <button type="button" class="btn btn-primary" id="${
                        "btnModificarAlbum" + albumes[i].id
                      }">
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
                onclick="borrarAlbum('${albumes[i].id}')"
              >
                Eliminar
              </button>
            </div>
          </div>
        </td>
        `;
    tabla.appendChild(tr);

    
    const inputNombre = document.getElementById(
      "nombreAlbum" + albumes[i].id
    );
    const selectArtistas = document.getElementById(`listaArtistas` + albumes[i].id);
    for (let j = 0; j < artistas.length; j++) {
        selectArtistas.innerHTML += `
            <option ${(albumes[i].idArtista == artistas[j].id) && "selected=selected"} value="${artistas[j].id}">${artistas[j].nombre}</option>
            `;
      }
    const inputimagenURL = document.getElementById(
      "imagenURL" + albumes[i].id
    );
    const botonModificar = document.getElementById(
      "btnModificarAlbum" + albumes[i].id
    );
    botonModificar.addEventListener("click", () => {
      let arrayAux = [...albumes];
      let objetoMod = {
        id: albumes[i].id,
        nombre: inputNombre.value.trim(),
        imgURL: inputimagenURL.value.trim(),
        idArtista: selectArtistas.value
      };
      arrayAux = arrayAux.filter((objeto) => objeto.id != albumes[i].id);
      arrayAux.push(objetoMod);
      console.log(arrayAux);
      localStorage.setItem(`albumesKey`, JSON.stringify(arrayAux));
      window.location.reload();
    });
  }
};

listarArtistas();
agregarAlbum();
tomarDatosAgregar();
