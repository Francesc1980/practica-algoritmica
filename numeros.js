function countPositivesSumNegatives(input) {

    // resultado: debe ser un array de dos posiciones. La primera posicion es 
    // la cantidad de números positivos. El segundo elemento del array debe
    // ser la suma de los números negativos
    let resultado = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    let totalPositivos = 0;
    let sumaNegativos = 0;
    
    input.forEach( numero => {
      // Si el número es positivo, incrementar la variable totalPositivos.
      if (numero > 0){
          totalPositivos = totalPositivos + numero;
          console.log(numero);
      }
      // Si el número es negativo, sumarlo a la variable sumaNegativos
      // Los ceros hay que ignorarlos
      else(numero < 0) {
          sumaNegativos=sumaNegativos + numero;
          console.log(numero);
      }
    });
    
    // Añadir a 'resultado', los valores de la variable totalPositivos y sumaNegativos
    
    return resultado;
  }
  
  let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
  console.log(countPositivesSumNegatives(testData)) // [8, -50]