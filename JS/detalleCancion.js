let urlId = window.location.search.replace("?id=", "");
let objetoCancion = [...canciones].filter((objeto) => objeto.id == urlId)[0];
const inyectarCancionDetalle = document.getElementById(
  "inyectarCancionDetalle"
);

const inyectarDetalleCancion = () => {
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

  inyectarCancionDetalle.innerHTML = `
  <div class="row m-0">
  <div class="col-5 colImgCancion">
    <div class="d-flex">
      <img
        class="img-fluid"
        src="${objetoCancion.imgURL}"
        alt=""
      />
    </div>
  </div>
  <div class="col-7 colDetalleCancion">
    <div class="d-flex flex-column">
      <div class="d-flex flex-column">
        <h2>Nombre de la canción:</h2>
        <div>
          <p>${objetoCancion.nombre}</p>
        </div>
      </div>
      <div class="d-flex flex-column">
        <h2>Detalle:</h2>
        <div class="d-flex flex-column">
          <div>
            <p><b>#ID:</b> ${objetoCancion.id}</p>
          </div>
          <div>
            <p><b>Artista:</b> ${nombreDelArtista}</p>
          </div>
          <div>
            <p><b>Categoria:</b> ${objetoCancion.categoria}</p>
          </div>
          <div>
            <p><b>Canción: </b><a href="${objetoCancion.videoURL}" target="_blank">${objetoCancion.videoURL}</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
};

inyectarDetalleCancion();
