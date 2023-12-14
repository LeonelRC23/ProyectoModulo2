const tabla = document.getElementById(`cuerpoTablaArtistas`);
const agregarNombreArtista = document.getElementById(`nombreArtistaAgregar`);
const agregarImagenArtista = document.getElementById(`imagenURLAgregar`);
const agregarImagenBackgroundArtista = document.getElementById(`imagenBackgroundURLAgregar`);
const botonAgregarArtista = document.getElementById(`botonAgregar`);

class Artista {
    constructor(id, nombre, imgURL, backgroudURL){
        this.id = id;
        this.nombre = nombre;
        this.imgURL = imgURL;
        this.backgroudURL = backgroudURL;
    }
}

function borrarArtista(idArtista){
    Swal.fire({
        title: "¿Estas seguro de borrar el artista?",
        text: "No puedes revertir este paso posteriormente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar",
        cancelButtonText: "Cancelar",
      }).then((resultado) => {
        if(resultado.isConfirmed){
            let arrayAux = [...artistas];
            arrayAux = arrayAux.filter(objeto => objeto.id != idArtista);
            localStorage.setItem(`artistasKey`, JSON.stringify(arrayAux));
            window.location.reload();

        }
      })
}

const agregarArtista = () => {
    for(let i = 0; i < artistas.length; i++){
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <th scope="row">${i+1}</th>
        <td>${artistas[i].nombre}</td>
        <td>
          <div class="botonesABM">
            <div>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="${'#modificacionArtistas' + artistas[i].id}"
              >
                Modificar
              </button>
              <div
                class="modal fade"
                id="${'modificacionArtistas' + artistas[i].id}"
                tabindex="-1"
                aria-labelledby="modificacionArtistasLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1
                        class="modal-title fs-5"
                        id="modificacionArtistasLabel"
                      >
                        Modificar artista "${artistas[i].nombre}"
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
                      <label for="nombreArtista" class="form-label"
                        >Nombre del artista</label
                      >
                      <input
                        value="${artistas[i].nombre}"
                        type="text"
                        class="form-control"
                        id="${'nombreArtista' + artistas[i].id}"
                        maxlength="50"
                        minlength="1"
                      />
                      <div id="nombreArtista" class="form-text"></div>
                    </div>
                    <div class="mb-3">
                      <label for="imagenURL" class="form-label"
                        >URL de la imagen del artista</label
                      >
                      <input value="${artistas[i].imgURL}" type="url" class="form-control" id="${'imagenURL' + artistas[i].id}" />
                    </div>
                    <div class="mb-3">
                      <label for="imagenBackgroundURL" class="form-label"
                        >URL de la imagen de fondo del artista</label
                      >
                      <input
                        value="${artistas[i].backgroudURL}"
                        type="url"
                        class="form-control"
                        id="${'imagenBackgroundURL' + artistas[i].id}"
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
                      <button type="button" class="btn btn-primary" id="${'btnModificarArtista' + artistas[i].id}">
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
                onclick="borrarArtista('${artistas[i].id}')"
              >
                Eliminar
              </button>
            </div>
          </div>
        </td>
        `;
        tabla.appendChild(tr);

        const inputNombre = document.getElementById('nombreArtista' + artistas[i].id);
        const inputimagenURL = document.getElementById('imagenURL' + artistas[i].id);
        const inputimagenBackgroundURL = document.getElementById('imagenBackgroundURL' + artistas[i].id);
        const botonModificar = document.getElementById('btnModificarArtista' + artistas[i].id);
        botonModificar.addEventListener("click", () => {
            let arrayAux = [...artistas];
            let objetoMod = {
                id: artistas[i].id,
                nombre: inputNombre.value.trim(),
                imgURL: inputimagenURL.value.trim(),
                backgroudURL: inputimagenBackgroundURL.value.trim()
            }
            arrayAux = arrayAux.filter(objeto => objeto.id != artistas[i].id);
            arrayAux.push(objetoMod);
            localStorage.setItem(`artistasKey`, JSON.stringify(arrayAux));
            window.location.reload();
        })
    }
}

const tomarDatosAgregar = () => {
    botonAgregarArtista.addEventListener("click", () => {
        let artistaObjeto = new Artista(crypto.randomUUID() ,agregarNombreArtista.value.trim(), agregarImagenArtista.value.trim(), agregarImagenBackgroundArtista.value.trim());
        let arrayAux = [...artistas];
        arrayAux.push(artistaObjeto);
        localStorage.setItem(`artistasKey`, JSON.stringify(arrayAux));
        window.location.reload();
    });
}

agregarArtista();
tomarDatosAgregar();