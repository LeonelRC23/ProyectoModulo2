function cambiarIconoFavoritos(id) {
  const miIcono = document.getElementById(id);
  if (miIcono.classList.contains("bi-heart")) {
    miIcono.classList.remove("bi-heart");
    miIcono.classList.add("bi-heart-fill");
  } else {
    miIcono.classList.remove("bi-heart-fill");
    miIcono.classList.add("bi-heart");
  }
}

function cambiarIconoAgregar(id) {
  const miIcono = document.getElementById(id);
  if (miIcono.classList.contains("bi-plus-circle")) {
    miIcono.classList.remove("bi-plus-circle");
    miIcono.classList.add("bi-check-circle-fill");
  } else {
    miIcono.classList.remove("bi-check-circle-fill");
    miIcono.classList.add("bi-plus-circle");
  }
}

const miIcono = document.getElementsByClassName("reproducir");
const arrayDeElementos = Array.from(miIcono);

arrayDeElementos.forEach(function (elemento) {
  elemento.addEventListener("click", function () {
    var indiceClickeado = arrayDeElementos.indexOf(elemento);
    for (i = 0; i <= arrayDeElementos.length; i++) {
      if (miIcono[i].classList.contains("bi-play-circle")) {
        if (indiceClickeado === i) {
          miIcono[i].classList.remove("bi-play-circle");
          miIcono[i].classList.add("bi-pause-circle");
        }
      } else {
        miIcono[i].classList.remove("bi-pause-circle");
        miIcono[i].classList.add("bi-play-circle");
      }
    }
  });
});
