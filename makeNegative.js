// Tenemos una función que se llama makeNegative, que lo que hace es que tu le pasas un número y tienes que devolver siempre el mismo valor pero negativo. 

// Si te pasan un número positivo lo tienes que devolver en negativo. Si te pasan un número negativo, debes devolverlo tal cual, igual que un 0. 

function makeNegative(num) {

    if (num == 0) {
        return 0;
    }

    return Math.abs(num) * -1;

}

console.log(makeNegative(1));    // return -1
console.log(makeNegative(-5));   // return -5
console.log(makeNegative(0));    // return 0
console.log(makeNegative(0.12)); // return -0.12