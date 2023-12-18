const inyectarCancionesFav = document.getElementById("inyectarCancionesFav");
let usuarioAutenticadoKey =
  JSON.parse(localStorage.getItem("usuarioAutenticadoKey")) || null;

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

const cargarCancionesFavoritas = () => {
  for (let i = 0; i < usuarioAutenticadoKey.listaFavoritos.length; i++) {
    let objetoCancion = [...canciones].filter(
      (objeto) => objeto.id == usuarioAutenticadoKey.listaFavoritos[i]
    )[0];

    let arrayAux = [...albumes];
    let objetoAlbumes = arrayAux.filter(
      (albumes) => albumes.id == objetoCancion.idAlbum
    )[0];

    let nombreDelArtista = "";
    for (let j = 0; j < albumes.length; j++) {
      if (objetoCancion.idAlbum == albumes[j].id) {
        for (let k = 0; k < artistas.length; k++) {
          if (albumes[j].idArtista == artistas[k].id) {
            nombreDelArtista = artistas[k].nombre;
          }
        }
      }
    }
    inyectarCancionesFav.innerHTML += `
        <div class="card">
        <div
          class="row m-0 card-body text-bg-dark pistaMusica"
        >
          <div class="d-flex justify-content-center btn-play col-2">
            <a href="${
              objetoCancion.videoURL
            }" target="_blank" data-bs-toggle="modal" data-bs-target="${
      "#verCancion" + objetoCancion.id
    }">
            <i class="bi bi-play-circle reproducir"></i>
            </a>
            
            <div class="modal fade" id="${
              "verCancion" + objetoCancion.id
            }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                 
                  <div class="modal-body d-flex">
                  <iframe width="560" height="315" src="${
                    objetoCancion.iframeURLvideo
                  }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  
                </div>
              </div>
  </div>
          </div>
    
          <div class="col-4 d-flex flex-column align-items-center justify-content-center">
            <p class="card-title mb-0 fs-6">${objetoCancion.nombre}</p>
            <p class="card-text fs-6">${nombreDelArtista}</p>
          </div>
    
          <div class="nombreAlbum col-4 d-flex align-items-center justify-content-center">
            <p class="card-text fs-6">${objetoAlbumes.nombre}</p>
          </div>
          <div class="btn-selecion col-2 d-flex align-items-center justify-content-center">
            <i
              id="corazon1"
              class="fa-regular fa-circle-xmark d-flex flex-column align-items-center justify-content-center"
              onclick="eliminarFavoritos('${objetoCancion.id}')"
            ></i>
          </div>
        </div>
      </div>
        `;
  }
};

cargarCancionesFavoritas();
