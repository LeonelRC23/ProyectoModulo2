const inyectarFooter = document.getElementById(`inyectarFooter`);

const inyectarFoot = () => {
    inyectarFooter.innerHTML = `
    <div class="text-center py-3">
    <div class="row m-0">
      <div
        class="col-12 col-sm-12 col-md-12 col-lg-3"
        id="contenedorLogoFooter"
      >
        <a
          href="../index.html"
          class="contenedorLogo d-flex justify-content-center"
        >
          <img
            src="../img/logosoundg3.png"
            alt="Logo"
            class=""
            id="imgFooter"
          />
        </a>
      </div>
      <div class="col-12 col-sm-12 col-md-4 col-lg-3">
        <ul class="listaFooter">
          <li class="mt-3 list-unstyled">
            <h4 class="text-light fw-bold">Productos</h4>
          </li>
          <li class="mt-3 list-unstyled">
            <a
              href="./iniciarSesion.html"
              class="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light"
              >Ingresar</a
            >
          </li>
          <li class="mt-3 list-unstyled">
            <a
              href="./registro.html"
              class="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light"
              >Registro</a
            >
          </li>
        </ul>
      </div>
      <div class="col-12 col-sm-12 col-md-4 col-lg-3">
        <ul class="listaFooter">
          <li class="mt-3 list-unstyled">
            <h4 class="text-light fw-bold">Acerca de</h4>
          </li>
          <li class="mt-3 list-unstyled">
            <a
              href="../pages/sobreNosotros.html"
              class="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light"
              >Acerca de Nosotros</a
            >
          </li>
          <li class="mt-3 list-unstyled">
            <a
              href="./error404.html"
              class="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light"
              >Ayuda</a
            >
          </li>
        </ul>
        <div class="d-flex flex-column">
          <p class="text-light">Síguenos en nuestras redes:</p>
          <div class="d-flex justify-content-center">
            <a href="./error404.html"
              ><i class="bi bi-instagram fs-3 m-2"></i
            ></a>
            <a href="./error404.html"
              ><i class="bi bi-facebook fs-3 m-2"></i
            ></a>
            <a href="./error404.html"
              ><i class="bi bi-twitter fs-3 m-2"></i
            ></a>
            <a href="./error404.html"
              ><i class="bi bi-linkedin fs-3 m-2"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-4 col-lg-3">
        <ul class="listaFooter">
          <li class="mt-3 list-unstyled">
            <h4 class="text-light fw-bold">Legales</h4>
          </li>
          <li class="mt-3 list-unstyled">
            <a
              href="./error404.html"
              class="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light"
              >Información Legal</a
            >
          </li>
          <li class="mt-3 list-unstyled">
            <a
              href="./error404.html"
              class="link-light link-underline-opacity-10 link-underline-opacity-50-hover text-light"
              >Privacidad</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container-fluid d-flex justify-content-center">
    <p class="text-light">
      &copy; Sound G3 - Todos los derechos reservados
    </p>
  </div>
    `
}

inyectarFoot();