const inyectarCarouselInner = document.getElementById(`inyectarCarouselInner`);

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
};

cargarInformacion();
