// foreach con función flecha

let numeros = [1, -4, -7, 6];

// Sumame los números POSITIVOS

let totalSuma = 0;

numeros.forEach((numero) => {
    if (numero > 0) {
        totalSuma = totalSuma + numero;
    }
});

conso