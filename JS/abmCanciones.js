const tabla = document.getElementById(`cuerpoTablaCanciones`);
const agregarNombreCancion = document.getElementById(`nombreCancionAgregar`);
const agregarImagenCancion = document.getElementById(`cancionImgURL`);
const agregarVideoCancion = document.getElementById(`cancionVideoURL`);
const botonAgregarCancion = document.getElementById(`botonAgregar`);
const listaAlbumes = document.getElementById(`listaAlbumes`);
const selectCategoria = document.getElementById(`selectCategoria`);
const cancionVideoURLIframe = document.getElementById("cancionVideoURLIframe");

class Cancion {
  constructor(
    id,
    nombre,
    idAlbum,
    imgURL,
    videoURL,
    categoria,
    iframeURLvideo
  ) {
    this.id = id;
    this.nombre = nombre;
    this.idAlbum = idAlbum;
    this.imgURL = imgURL;
    this.videoURL = videoURL;
    this.categoria = categoria;
    this.iframeURLvideo = iframeURLvideo;
  }
}

function borrarCancion(idCancion) {
  Swal.fire({
    title: "¿Estas seguro de borrar el cancion?",
    text: "No puedes revertir este paso posteriormente",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      let arrayAux = [...canciones];
      arrayAux = arrayAux.filter((objeto) => objeto.id != idCancion);
      localStorage.setItem(`cancionesKey`, JSON.stringify(arrayAux));
      window.location.reload();
    }
  });
}

const tomarDatosAgregar = () => {
  botonAgregarCancion.addEventListener("click", () => {
    let cancionObjeto = new Cancion(
      crypto.randomUUID(),
      agregarNombreCancion.value.trim(),
      listaAlbumes.value,
      agregarImagenCancion.value.trim(),
      agregarVideoCancion.value.trim(),
      selectCategoria.value,
      cancionVideoURLIframe.value.trim()
    );
    let arrayAux = [...canciones];
    arrayAux.push(cancionObjeto);
    localStorage.setItem(`cancionesKey`, JSON.stringify(arrayAux));
    window.location.reload();
  });
};

const listarAlbumes = () => {
  for (let i = 0; i < albumes.length; i++) {
    listaAlbumes.innerHTML += `
        <option value="${albumes[i].id}">${albumes[i].nombre}</option>
        `;
  }
};

const agregarCancion = () => {
  for (let i = 0; i < canciones.length; i++) {
    let nombreDelArtista = "";
    for (let j = 0; j < albumes.length; j++) {
      if (canciones[i].idAlbum == albumes[j].id) {
        for (let k = 0; k < artistas.length; k++) {
          if (albumes[j].idArtista == artistas[k].id) {
            nombreDelArtista = artistas[k].nombre;
          }
        }
      }
    }
    let arrayAux = [...albumes];
    let objetoAlbumes = arrayAux.filter(
      (albumes) => albumes.id == canciones[i].idAlbum
    )[0];
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <th scope="row">${i + 1}</th>
        <td>${canciones[i].nombre}</td>
        <td>${canciones[i].categoria}</td>
        <td>${objetoAlbumes.nombre}</td>
        <td>${nombreDelArtista}</td>
        <td>
          <div class="botonesABM">
            <div>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="${"#modificacionCanciones" + canciones[i].id}"
              >
                Modificar
              </button>
              <div
                class="modal fade"
                id="${"modificacionCanciones" + canciones[i].id}"
                tabindex="-1"
                aria-labelledby="modificacionCancionesLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1
                        class="modal-title fs-5"
                        id="modificacionCancionesLabel"
                      >
                        Modificar album "${canciones[i].nombre}"
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
                      <label for="nombreCancion" class="form-label"
                        >Nombre de la cancion</label
                      >
                      <input
                        value="${canciones[i].nombre}"
                        type="text"
                        class="form-control"
                        id="${"nombreCancion" + canciones[i].id}"
                        maxlength="50"
                        minlength="1"
                      />
                      <div id="nombreCancion" class="form-text"></div>
                    </div>
                    <div class="mb-3">
                    <label for="listaAlbumes" class="form-label">Album</label>
                    <select name="listaAlbumes" class="form-select" id="${
                      "listaAlbumes" + canciones[i].id
                    }">
                      <option value="">Ninguno</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="selectCategoria" class="form-label"
                      >Categoria</label
                    >
                    <select
                      name="selectCategoria"
                      class="form-select"
                      id="${"selectCategoria" + canciones[i].id}"
                    >
                      <option value="">Ninguno</option>
                      <option ${
                        canciones[i].categoria == "categoria1" &&
                        "selected=selected"
                      } value="categoria1">Categoria 1</option>
                      <option ${
                        canciones[i].categoria == "categoria2" &&
                        "selected=selected"
                      } value="categoria2">Categoria 2</option>
                      <option ${
                        canciones[i].categoria == "categoria3" &&
                        "selected=selected"
                      }value="categoria3">Categoria 3</option>
                      <option ${
                        canciones[i].categoria == "categoria4" &&
                        "selected=selected"
                      } value="categoria4">Categoria 4</option>
                    </select>
                  </div>
                    <div class="mb-3">
                      <label for="imagenURL" class="form-label"
                        >URL de la imagen de la cancion</label
                      >
                      <input value="${
                        canciones[i].imgURL
                      }" type="url" class="form-control" id="${
      "imagenURL" + canciones[i].id
    }" />
                    </div>
                    <div class="mb-3">
                    <label for="cancionVideoURL" class="form-label"
                      >URL del video de la cancion</label
                    >
                    <input  value="${
                      canciones[i].videoURL
                    }" type="url" class="form-control" id="${
      "cancionVideoURL" + canciones[i].id
    }" />
                  </div>
                  <div class="mb-3">
                    <label for="cancionVideoURLIframe" class="form-label"
                      >URL del video-IFRAME de la cancion</label
                    >
                    <input
                    value="${canciones[i].iframeURLvideo}"
                      type="url"
                      class="form-control"
                      id="${"cancionVideoURLIframe" + canciones[i].id}"
                    />
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
                        "btnModificarCancion" + canciones[i].id
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
                onclick="borrarCancion('${canciones[i].id}')"
              >
                Eliminar
              </button>
            </div>
          </div>
        </td>
        `;
    tabla.appendChild(tr);

    const inputNombre = document.getElementById(
      "nombreCancion" + canciones[i].id
    );
    const selectAlbumes = document.getElementById(
      "listaAlbumes" + canciones[i].id
    );
    const selectCategoria = document.getElementById(
      "selectCategoria" + canciones[i].id
    );
    for (let j = 0; j < albumes.length; j++) {
      selectAlbumes.innerHTML += `
            <option ${
              canciones[i].idAlbum == albumes[j].id && "selected=selected"
            } value="${albumes[j].id}">${albumes[j].nombre}</option>
            `;
    }
    const inputimagenURL = document.getElementById(
      "imagenURL" + canciones[i].id
    );
    const inputVideoURL = document.getElementById(
      "cancionVideoURL" + canciones[i].id
    );
    const inputVideoURLIframe = document.getElementById(
      "cancionVideoURLIframe" + canciones[i].id
    );
    const botonModificar = document.getElementById(
      "btnModificarCancion" + canciones[i].id
    );
    botonModificar.addEventListener("click", () => {
      let arrayAux = [...canciones];
      let objetoMod = {
        id: canciones[i].id,
        nombre: inputNombre.value.trim(),
        idAlbum: selectAlbumes.value,
        imgURL: inputimagenURL.value.trim(),
        videoURL: inputVideoURL.value.trim(),
        categoria: selectCategoria.value,
        iframeURLvideo: inputVideoURLIframe.value.trim(),
      };
      arrayAux = arrayAux.filter((objeto) => objeto.id != canciones[i].id);
      arrayAux.push(objetoMod);
      console.log(arrayAux);
      localStorage.setItem(`cancionesKey`, JSON.stringify(arrayAux));
      window.location.reload();
    });
  }
};

listarAlbumes();
agregarCancion();
tomarDatosAgregar();
