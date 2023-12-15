let arrayArtistas = [
  {
    id: crypto.randomUUID(),
    nombre: "Daddy Yankee",
    imgURL: "https://www.cmtv.com.ar/imagenes_artistas/332.webp?Daddy%20Yankee",
    backgroudURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4M2CefqCFhOrtVOfHaqIhJjo-vktXXD2gkQ&usqp=CAU",
  },

  {
    id: crypto.randomUUID(),
    nombre: "Maria Becerra",
    imgURL:
      "https://www.hola.com/imagenes/belleza/actualidad/20221012218880/maria-becerra-maquillajes-peinados/1-150-580/maria-becerra-getty11-e.jpg",
    backgroudURL:
      "https://www.estiloytendencia.com/u/fotografias/m/2023/2/22/f425x230-19163_33145_55.jpg",
  },

  {
    id: crypto.randomUUID(),
    nombre: "Fito Paez",
    imgURL: "https://indiehoy.com/wp-content/uploads/2022/06/fito-paez.jpg",
    backgroudURL:
      "https://www.revistaanfibia.com/wp-content/uploads/2023/03/Portada-1-1.jpg",
  },

  {
    id: crypto.randomUUID(),
    nombre: "Bad Bunny",
    imgURL:
      "https://media.revistavanityfair.es/photos/641c6381130ff665e534b26e/1:1/w_3000,h_3000,c_limit/GettyImages-1412405003.jpg",
    backgroudURL: "https://i.ytimg.com/vi/gG2bqgt_6po/maxresdefault.jpg",
  },

  {
    id: crypto.randomUUID(),
    nombre: "Dimash",
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/Kudaibergen_at_New_Wave_in_2019.jpg",
    backgroudURL:
      "https://i.pinimg.com/originals/0e/bf/a2/0ebfa2d42383d39a4a45f80ddb01dde7.jpg",
  },
];

let arrayAlbumes = [
  {
    id: crypto.randomUUID(),
    nombre: "Album 1",
    imgURL:
      "https://assets.turbologo.com/blog/es/2022/04/07043402/06-958x575.png",
    idArtista: arrayArtistas[3].id
  },

  {
    id: crypto.randomUUID(),
    nombre: "Album 2",
    imgURL:
      "https://assets.turbologo.com/blog/es/2022/04/07043402/06-958x575.png",
      idArtista: arrayArtistas[0].id
  },

  {
    id: crypto.randomUUID(),
    nombre: "Album 3",
    imgURL:
      "https://assets.turbologo.com/blog/es/2022/04/07043402/06-958x575.png",
      idArtista: arrayArtistas[2].id
  },
];

// let arrayCanciones = [
//   {
//     id: crypto.randomUUID(),
//     nombre: "cancion 1",
//     imgURL:
//     album: "1"
//   },

//   {
//     id: crypto.randomUUID(),
//     nombre: "cancion 2",
//   },

//   {
//     id: crypto.randomUUID(),
//     nombre: "cancion 3",
//   },

//   {
//     id: crypto.randomUUID(),
//     nombre: "cancion 4",
//   },

//   {
//     id: crypto.randomUUID(),
//     nombre: "cancion 5",
//   },

//   {
//     id: crypto.randomUUID(),
//     nombre: "cancion 6",
//   },
// ];

let artistas = JSON.parse(localStorage.getItem(`artistasKey`)) || [];
if(artistas.length == 0){
localStorage.setItem(`artistasKey`, JSON.stringify(arrayArtistas));
}
let albumes = JSON.parse(localStorage.getItem(`albumesKey`)) || [];
if(albumes.length == 0){
localStorage.setItem(`albumesKey`, JSON.stringify([]));
}
let canciones = JSON.parse(localStorage.getItem(`cancionesKey`)) || [];
if(canciones.length == 0){
localStorage.setItem(`cancionesKey`, JSON.stringify([]));
}
