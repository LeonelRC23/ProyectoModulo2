let urlId = window.location.search.replace("?id=", "");
let objetoAlbum = [...albumes].filter((objeto) => objeto.id == urlId)[0];
const inyectarCancionDetalle = document.getElementById("inyectarAlbumDetalle");
let arrayCancionesAlbum = [];

const inyectarDetalleAlbum = () => {
  let objetoArtista = [...artistas].filter(
    (objeto) => objeto.id == objetoAlbum.idArtista
  )[0];

  for (let i = 0; i < canciones.length; i++) {
    if (canciones[i].idAlbum == objetoAlbum.id) {
      arrayCancionesAlbum.push(canciones[i]);
    }
  }

  inyectarCancionDetalle.innerHTML = `
  <div class="row m-0">
  <div class="col-12 col-sm-5 colImgCancion">
    <div class="d-flex">
      <img
        class="img-fluid"
        src="${objetoAlbum.imgURL}"
        alt=""
      />
    </div>
  </div>
  <div class="col-12 col-sm-7 colDetalleCancion">
    <div class="d-flex flex-column">
      <div class="d-flex flex-column">
        <h2>Nombre de la canción:</h2>
        <div>
          <p>${objetoAlbum.nombre}</p>
        </div>
      </div>
      <div class="d-flex flex-column">
        <h2>Detalle:</h2>
        <div class="d-flex flex-column">
          <div>
            <p><b>#ID:</b> ${objetoAlbum.id}</p>
          </div>
          <div>
            <p><b>Artista:</b> ${objetoArtista.nombre}</p>
          </div>
          
        
        </div>
      </div>
      <div class="d-flex flex-column">
        <h2>Canciones:</h2>
        <div class="d-flex flex-column ps-4">
          <ul id="inyectarListaCancionesEnAlbum">
            
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    `;

  const inyectarListaCancionesEnAlbum = document.getElementById(
    "inyectarListaCancionesEnAlbum"
  );

  for (let i = 0; i < arrayCancionesAlbum.length; i++) {
    inyectarListaCancionesEnAlbum.innerHTML += `
        <li class="text-white">${arrayCancionesAlbum[i].nombre}</li>
    `;
  }
};

inyectarDetalleAlbum();
