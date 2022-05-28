function boolToWord(bool) {
    if (bool) {
        return "Yes";
    }

    return "No";
}

function boolToWord2(bool) {
    let resultado;

    if (bool) {
        resultado = "Yes";
    } else {
        resultado = "No";
    }

    return resultado;
}

function boolToWord3(bool) {
    let resultado = bool ? "Yes" : "No";

    return resultado;
}

console.log(boolToWord(true), 'Yes')
console.log(boolToWord(false), 'No')