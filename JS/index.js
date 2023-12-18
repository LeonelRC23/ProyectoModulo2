const inyectarCarouselInner = document.getElementById(`inyectarCarouselInner`);
const inyectarCanciones = document.getElementById(`seccionCanciones`);
const rowInyectarCanciones = document.getElementById(`rowInyectarCanciones`);
const inputBuscarCancion = document.getElementById("inputBuscarCancion");
let usuarioAutenticadoKey =
  JSON.parse(localStorage.getItem("usuarioAutenticadoKey")) || null;

const agregarFavoritos = (idCancion) => {
  console.log(idCancion);
  if (usuarioAutenticadoKey == null) {
    window.location.href = "/pages/iniciarSesion.html";
  } else {
    let objetoCancionFav = [...canciones].filter(
      (objeto) => objeto.id == idCancion
    )[0];

    usuarioAutenticadoKey.listaFavoritos.push(objetoCancionFav.id);

    let arrayAux = [...usuarios].filter(
      (objeto) => objeto.id != usuarioAutenticadoKey.id
    );

    arrayAux.push(usuarioAutenticadoKey);

    localStorage.setItem("usuariosKey", JSON.stringify(arrayAux));
    localStorage.setItem(
      "usuarioAutenticadoKey",
      JSON.stringify(usuarioAutenticadoKey)
    );
    window.location.reload();
  }
};

const eliminarFavoritos = (idCancion) => {
  let arrayAux = [...usuarioAutenticadoKey.listaFavoritos].filter(
    (objeto) => objeto != idCancion
  );
  usuarioAutenticadoKey.listaFavoritos = arrayAux;

  let arrayAux2 = [...usuarios].filter(
    (objeto) => objeto.id != usuarioAutenticadoKey.id
  );

  arrayAux2.push(usuarioAutenticadoKey);

  localStorage.setItem("usuariosKey", JSON.stringify(arrayAux2));
  localStorage.setItem(
    "usuarioAutenticadoKey",
    JSON.stringify(usuarioAutenticadoKey)
  );
  window.location.reload();
};

const cargarTodasLasCanciones = (cancionesListado) => {
  rowInyectarCanciones.innerHTML = "";

  for (let i = 0; i < cancionesListado.length; i++) {
    rowInyectarCanciones.innerHTML += `
    <div class="col-6 col-md-4 d-flex colCaratulaCancion">
              <a class="d-flex mt-4" href="${
                "./pages/detalleCancion.html?id=" + cancionesListado[i].id
              }">
                <img
                  class="img-fluid"
                  src="${cancionesListado[i].imgURL}"
                  alt=""
                />
              </a>
            </div>
    `;
  }
};

const cargarInformacion = () => {
  for (let i = 0; i < artistas.length; i++) {
    if (i == 0) {
      inyectarCarouselInner.innerHTML += `
        <div class="carousel-item active h-100">
        <div
          class="d-flex flex-row justify-content-around h-100"
          style="
            background-image: url(${artistas[i].backgroudURL});
            background-size: cover;
          "
        >
          <a
            href="${"./pages/artista.html?id=" + artistas[i].id}"
            class="d-flex justify-content-center align-items-center flex-column selecion-artista w-100"
          >
            <img
              src=${artistas[i].imgURL}
              class="d-block"
              alt="imagen de artista"
            />
            <p class="text-center text-white">${artistas[i].nombre}</p>
          </a>
        </div>
      </div>
        `;
    } else {
      inyectarCarouselInner.innerHTML += `
        <div class="carousel-item h-100">
        <div
          class="d-flex flex-row justify-content-around h-100"
          style="
          background-image: url(${artistas[i].backgroudURL});
            background-size: cover;
          "
        >
          <a
          href="${"./pages/artista.html?id=" + artistas[i].id}"
            class="d-flex justify-content-center align-items-center flex-column selecion-artista w-100"
          >
            <img
            src=${artistas[i].imgURL}
              class="d-block"
              alt="imagen de artista"
            />
            <p class="text-center text-white">${artistas[i].nombre}</p>
          </a>
        </div>
      </div>
        `;
    }
  }
};

const cargarCancionesIndex = () => {
  for (let i = 0; i < 5; i++) {
    if (canciones[i]) {
      let arrayAux = [...albumes];
      let objetoAlbumes = arrayAux.filter(
        (albumes) => albumes.id == canciones[i].idAlbum
      )[0];
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
      inyectarCanciones.innerHTML += `
      <div class="card">
      <div
        class="row m-0 card-body text-bg-dark pistaMusica"
      >
        <div class="d-flex justify-content-center btn-play col-2">
          <a href="${
            canciones[i].videoURL
          }" target="_blank" data-bs-toggle="modal" data-bs-target="${
        "#verCancion" + canciones[i].id
      }">
          <i class="bi bi-play-circle reproducir"></i>
          </a>
          
          <div class="modal fade" id="${
            "verCancion" + canciones[i].id
          }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
               
                <div class="modal-body d-flex">
                <iframe width="560" height="315" src="${
                  canciones[i].iframeURLvideo
                }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                
              </div>
            </div>
</div>
        </div>
  
        <div class="col-4 d-flex flex-column align-items-center justify-content-center">
          <p class="card-title mb-0 fs-6">${canciones[i].nombre}</p>
          <p class="card-text fs-6">${nombreDelArtista}</p>
        </div>
  
        <div class="nombreAlbum col-4 d-flex align-items-center justify-content-center">
          <p class="card-text fs-6">${objetoAlbumes.nombre}</p>
        </div>
        <div class="btn-selecion col-2 d-flex align-items-center justify-content-center" id="${
          "btnFav" + canciones[i].id
        }">
        
         
        </div>
      </div>
    </div>
      `;

      let cancionEncontrada = usuarioAutenticadoKey.listaFavoritos.findIndex(
        (objeto) => objeto == canciones[i].id
      );

      const btnFavInyectar = document.getElementById(
        "btnFav" + canciones[i].id
      );

      if (cancionEncontrada != -1) {
        let iTag = document.createElement("i");
        iTag.classList.add(
          "fa-regular",
          "fa-circle-xmark",
          "d-flex",
          "flex-column",
          "align-items-center",
          "justify-content-center"
        );
        iTag.setAttribute(
          "onclick",
          "eliminarFavoritos('" + canciones[i].id + "')"
        );
        btnFavInyectar.appendChild(iTag);
      } else {
        let iTag = document.createElement("i");
        iTag.classList.add(
          "bi",
          "bi-heart",
          "d-flex",
          "flex-column",
          "align-items-center",
          "justify-content-center"
        );
        iTag.setAttribute(
          "onclick",
          "agregarFavoritos('" + canciones[i].id + "')"
        );
        btnFavInyectar.appendChild(iTag);
      }
    }
  }
};

cargarInformacion();
cargarCancionesIndex();
cargarTodasLasCanciones(canciones);

const buscarCancion = (busqueda) => {
  let arrayAux = [...canciones];
  let arrayCanciones = [];
  arrayAux.map(
    (objeto, i) =>
      objeto.nombre.toLowerCase().includes(busqueda.toLowerCase().trim()) &&
      arrayCanciones.push(objeto)
  );

  cargarTodasLasCanciones(arrayCanciones);
};

inputBuscarCancion.addEventListener("keyup", (e) => {
  buscarCancion(e.target.value);
});
