
// foreach itera sobre todos los elementos del array, sean del tipo sea

let imagenes = [{
    src: "casa1.jpg",
    alt: "Casa 1 Bonita"
}, {
    src: "casa2.jpg",
    alt: "Casa de las flores"
}];

imagenes.forEach(function (imagen, index) {
    console.log("Me encuentro en la posición del array número : " + index);
    console.log(imagen.src);
});