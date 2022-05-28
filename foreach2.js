// queremos sumar un array de números

let numeros = [10, 21, 33];

let totalSuma = 0;

numeros.forEach(function (num) {
    totalSuma = totalSuma + num;
    //console.log(num);
});

console.log("total: ", totalSuma)