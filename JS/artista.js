let urlId = window.location.search.replace("?id=", "");
let objetoArtista = [...artistas].filter((objeto) => objeto.id == urlId)[0];
const inyectarCancionDetalle = document.getElementById(
  "inyectarCancionDetalle"
);
let usuarioAutenticadoKey =
  JSON.parse(localStorage.getItem("usuarioAutenticadoKey")) || null;

const inyectarArtistaDetalle = document.getElementById(
  "inyectarArtistaDetalle"
);
const inyectarTopCanciones = document.getElementById("inyectarTopCanciones");

// elimina repetidos
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

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

const cargarArtista = () => {
  let arrayAlbumesArtistaInyectado = [];
  let arrayCancionesArtistaInyectado = [];
  for (let i = 0; i < albumes.length; i++) {
    if (albumes[i].idArtista == objetoArtista.id) {
      arrayAlbumesArtistaInyectado.push(albumes[i]);
    }
  }

  for (let i = 0; i < canciones.length; i++) {
    for (let j = 0; j < arrayAlbumesArtistaInyectado.length; j++) {
      if (canciones[i].idAlbum == arrayAlbumesArtistaInyectado[j].id) {
        arrayCancionesArtistaInyectado.push(canciones[i]);
      }
    }
  }

  let generosArtista = [];

  for (let i = 0; i < arrayCancionesArtistaInyectado.length; i++) {
    generosArtista.push(arrayCancionesArtistaInyectado[i].categoria);
  }

  generosArtista = generosArtista.filter(onlyUnique);

  inyectarArtistaDetalle.innerHTML = `
    <div class="col-sm-12 col-md-5 col-lg-3 pt-5 pb-4 contenedorImagen">
        <img
            src="${objetoArtista.imgURL}"
            alt="caratula maria becerra"
            class="img-fluid artistaImg"
        />
    </div>
    <div class="col-sm-12 col-md-7 col-lg-5 datosArtista">
    <p class="text-center text-light mb-0 artistNombre">Artista:</p>
    <h2 class="text-light text-center">${objetoArtista.nombre}</h2>
    <p class="text-center text-light mb-0 artistaGenero">Género:</p>
    <p class="text-center text-light pb-5 h4">${generosArtista.map(
      (objeto) => " " + objeto + ""
    )}</p>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-4 p-0">
    <h2 class="text-light p-0 text-center albumSugeridos">
        Albumes sugeridos
    </h2>
    <div class="row m-0" id="inyectarAlbumesSugeridos">
        
    </div>
    </div>
    `;

  const inyectarAlbumesSugeridos = document.getElementById(
    "inyectarAlbumesSugeridos"
  );

  if (arrayAlbumesArtistaInyectado.length != 0) {
    for (let i = 0; i < arrayAlbumesArtistaInyectado.length; i++) {
      if (i < 4 && arrayAlbumesArtistaInyectado[i]) {
        inyectarAlbumesSugeridos.innerHTML += `
        <div class="col-6 d-flex p-0 pe-2">
        <a href="${
          "../pages/detalleAlbum.html?id=" + arrayAlbumesArtistaInyectado[i].id
        }" class="w-100  h-100 d-flex">
        <img
        src="${arrayAlbumesArtistaInyectado[i].imgURL}"
        alt="caratula album maria becerra"
        class="conjuntoAlbum img-fluid h-100 w-100"
        />
        </a>
        </div>
        `;
      }
    }
  } else {
    inyectarAlbumesSugeridos.innerHTML += `
    <div class="col-6 d-flex align-items-center p-0 pe-2 mx-auto" style="height:10rem;">
        <p class="text-white">Sin albumes sugeridos</p>
    </div>
    `;
  }

  console.log(arrayCancionesArtistaInyectado);

  if (arrayCancionesArtistaInyectado.length != 0) {
    for (let i = 0; i < arrayCancionesArtistaInyectado.length; i++) {
      let arrayAux = [...albumes];
      let objetoAlbumes = arrayAux.filter(
        (albumes) => albumes.id == canciones[i].idAlbum
      )[0];
      inyectarTopCanciones.innerHTML += `
              <div class="row border imgFondoPista">
              <div class="col-2 col-md-4 col-lg-1 pt-1 ps-2">
              <a href="#" data-bs-toggle="modal" data-bs-target="${
                "#verTopCancion" + arrayCancionesArtistaInyectado[i].id
              }"
                ><i
                class="bi bi-play-circle text-light fs-1 ps-3 iconsPistas"
                ></i
                ></a>
                
                
            <div class="modal fade" id="${
              "verTopCancion" + arrayCancionesArtistaInyectado[i].id
            }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
               
                <div class="modal-body d-flex">
                <iframe width="560" height="315" src="${
                  arrayCancionesArtistaInyectado[i].iframeURLvideo
                }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                
                </div>
                </div>
                </div>
                </div>
                <div class="col-7 text-light col-md-4 col-lg-4 ps-3 px-0">
                <p class="pt-2 mb-0 text-center">${
                  arrayCancionesArtistaInyectado[i].nombre
                }</p>
                <p class="pe- text-center">${objetoArtista.nombre}</p>
                </div>
                <div class="col-12 col-md-4 col-lg-4 text-light infoAlbum">
                <p class="pt-4">Album: ${objetoAlbumes.nombre}</p>
                </div>
                <div
                class="col-3 col-md-4 col-lg-3 text-center px-0 iconsPistas2 pt-2 d-flex justify-content-center"
                id="${"btnFav" + arrayCancionesArtistaInyectado[i].id}">
               
                </div>
                </div>
                `;

      let cancionEncontrada = usuarioAutenticadoKey.listaFavoritos.findIndex(
        (objeto) => objeto == arrayCancionesArtistaInyectado[i].id
      );

      const btnFavInyectar = document.getElementById(
        "btnFav" + arrayCancionesArtistaInyectado[i].id
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
          "eliminarFavoritos('" + arrayCancionesArtistaInyectado[i].id + "')"
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
          "agregarFavoritos('" + arrayCancionesArtistaInyectado[i].id + "')"
        );
        btnFavInyectar.appendChild(iTag);
      }
    }
  } else {
    inyectarTopCanciones.innerHTML = `
    <div class="px-5">
        <p class="text-white">Sin canciones</p>
    </div>
    
    `;
  }
};

cargarArtista();
