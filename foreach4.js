// ES6 JavaScript Moderno

function holahola() {
    console.log("hola hola");
}

// guardar una función en una variable
const duplicar = function (numero) {
    return numero * 2;
}

console.log(duplicar(4));

// función flecha
// Voy a crear una función que me devuelve el string que le pase en mayúsculas

const ponerEnMayusculas = (palabra) => {
    return palabra.toUpperCase();
};

console.log(ponerEnMayusculas("patata"));

// función flecha que tiene implícito un return pues se puede escribir en una sola línea
const ponerEnMinusculas = (palabra) => palabra.toLowerCase();

console.log(ponerEnMinusculas("ZIMBAWE"));

