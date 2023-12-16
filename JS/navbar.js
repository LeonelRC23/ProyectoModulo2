const inyectarNavbar = document.getElementById("inyectarNavbar");
let usuarioAutenticado =
  JSON.parse(localStorage.getItem("usuarioAutenticadoKey")) || null;

const inyectarNav = () => {
  inyectarNavbar.innerHTML = `
  <nav
  class="efectoBlur navbar navbar-expand-md bg-body-tertiary navbar bg-dark border-bottom border-body py-3"
  data-bs-theme="dark"
>
  <div class="container">
    <a class="navbar-brand m-lg-0" href="#">
      <img src="./IMG/logosoundg3.png" alt="g3SoundGIF" id="imglogo" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse align-items-center justify-content-center"
      id="navbarSupportedContent"
    >
      <div id="elementosNavbar">
        <ul class="navbar-nav mx-lg-5 mx-md-4" id="listaNavbar">
          <div class="d-flex mb-md-1" id="elementosNav">
            <li
              class="nav-item p-lg-2 px-xl-2 mx-md-2 py-md-2 py-sm-3 d-flex justify-content-center align-items-center justify-content-sm-start"
              id="itemNav"
            >
              <a
                class="nav-link active fs-5"
                aria-current="page"
                href="#"
              >
                Inicio
              </a>
            </li>
            <li
              class="nav-item p-lg-2 px-xl-2 mx-md-2 py-md-2 py-sm-3 d-flex justify-content-center align-items-center justify-content-sm-start"
            >
              <a
                class="nav-link fs-5"
                href="./pages/listaDeReproduccion.html"
              >
                Lista de reproduccion
              </a>
            </li>
            
            <li
              class="nav-item dropdown p-lg-2 px-xl-2 mx-md-2 py-md-2 py-sm-3 d-flex justify-content-center align-items-center justify-content-sm-start"
              id="inyectarAdmin"
              >
              
            </li>
          </div>
        </ul>
      </div>
      <div class="d-flex flex-column" id="btnNavbar">
       
      </div>
    </div>
  </div>
</nav>
    `;
  const inyectarAdmin = document.getElementById("inyectarAdmin");
  const btnNavbar = document.getElementById("btnNavbar");

  if (usuarioAutenticado) {
    if (usuarioAutenticado.rol == "admin") {
      inyectarAdmin.innerHTML = `
      <a
      class="nav-link dropdown-toggle fs-5"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Administrador
    </a>
    <ul class="dropdown-menu text-center">
      <li class="text-center">
        <a
          class="dropdown-item fs-5"
          href="./pages/abmCanciones.html"
          >ABM Canciones</a
        >
      </li>
      <li class="text-center">
        <a
          class="dropdown-item fs-5"
          href="./pages/abmAlbumes.html"
          >ABM Albumes</a
        >
      </li>
      <li class="text-center">
        <a
          class="dropdown-item fs-5"
          href="./pages/abmArtistas.html"
          >ABM Artistas</a
        >
      </li>
    </ul>
      `;
    }

    btnNavbar.innerHTML = `
    <button
    class="btn btn-success fs-6 botonesUsuario"
    type="submit"
    id="btnCerrarSesion"
    onclick="location.href='./pages/registro.html';"
  >
    Cerrar Sesión
  </button>
    `;

    const btnCerrarSesion = document.getElementById("btnCerrarSesion");

    btnCerrarSesion.addEventListener("click", () => {
      localStorage.removeItem("usuarioAutenticadoKey");
      location.href = "./index.html";
    });
  } else {
    btnNavbar.innerHTML = `
    <button
    class="btn btn-success my-3 fs-6 botonesUsuario"
    type="submit"
    onclick="location.href='./pages/iniciarSesion.html';"
  >
    Iniciar sesión
  </button>
  <button
    class="btn btn-success fs-6 botonesUsuario"
    type="submit"
    onclick="location.href='./pages/registro.html';"
  >
    Registrate
  </button>
    `;
  }
};

inyectarNav();
