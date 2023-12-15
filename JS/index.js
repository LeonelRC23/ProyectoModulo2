const inyectarCarouselInner = document.getElementById(`inyectarCarouselInner`);
const inyectarCanciones = document.getElementById(`seccionCanciones`);

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
            href="./pages/artista.html"
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
            href="./pages/artista.html"
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
}

const cargarCancionesIndex = () => {
  for(let i = 0; i < canciones.length; i++){
    let arrayAux = [...albumes];
    let objetoAlbumes = arrayAux.filter(
      (albumes) => albumes.id == canciones[i].idAlbum)[0];
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
        <i class="bi bi-play-circle reproducir"></i>
      </div>

      <div class="col-4 d-flex flex-column align-items-center justify-content-center">
        <p class="card-title mb-0 fs-6">${canciones[i].nombre}</p>
        <p class="card-text fs-6">${nombreDelArtista}</p>
      </div>

      <div class="nombreAlbum col-4 d-flex align-items-center justify-content-center">
        <p class="card-text fs-6">${objetoAlbumes.nombre}</p>
      </div>
      <div class="btn-selecion col-2 d-flex align-items-center justify-content-center">
        <i
          id="corazon1"
          class="bi bi-heart d-flex flex-column align-items-center justify-content-center"
          onclick="cambiarIconoFavoritos('corazon1')"
        ></i>
        <i
          id="agregar1"
          class="bi bi-plus-circle d-flex flex-column align-items-center justify-content-center"
          onclick="cambiarIconoAgregar('agregar1')"
        ></i>
      </div>
    </div>
  </div>
    `
  }
}

cargarInformacion();
cargarCancionesIndex();