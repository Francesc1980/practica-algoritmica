// foreach

let frutas = ["piña", "pera", "malacotón"];

// forEach va a ejecutar la función mostrarFruta tantas veces como elementos tiene el array. A cada ejecución le pasará uno de los elementos del array.

frutas.forEach(mostrarFruta);

function mostrarFruta(fruta) {
    console.log(fruta.length);
}


