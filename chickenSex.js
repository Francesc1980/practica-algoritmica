// https://www.codewars.com/kata/57ed40e3bd793e9c92000fcb/train/javascript

function correctness(bobsDecisions, expertDecisions) {

    let puntuacion = 0;
     
    
    for (let i = 0; i < bobsDecisions.length; i++) {

    // hay que comparar arrays
    // los arrays deben tener mismo tamañp
    if(bobsDecisions[i]==expertDecisions[i]){
        puntuacion = puntacion +1;
    }
    else if(bobsDecisions[i]=='?' || expertDecisions[i]=='?'){
        puntuacion = puntuacion +0.5;
    }
    
    }
    //comparar cada posicion en ambas arrays y aplicar reglas
    return puntuacion;
} 
console.log(correctness(['M', '?', 'M'], ['M', 'F', '?']))

// si bob y sexador axuerdo macho o hembra bob 1 punto o interrogante

//cuando no estan de acuerdo pero uno de ellos dice que no saben 
// y el otro ha dicho m o f suman 0.5

// en desacuerdo obtiene 0 puntos

// 1 + 0.5 + 0.5

