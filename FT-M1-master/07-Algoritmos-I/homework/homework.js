'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
    // Array para almacenar los factores primos
    var factores = [];
  
    // Agregar el 1 al array de factores
    factores.push(1);
  
    // Comenzar con el primer número primo
    var divisor = 2;
  
    // Iterar mientras el número sea mayor que 1
    while (num > 1) {
      // Verificar si el número es divisible por el divisor actual
      while (num % divisor === 0) {
        // Agregar el divisor a la lista de factores
        factores.push(divisor);
        // Dividir el número por el divisor actual
        num /= divisor;
      }
  
      // Pasar al siguiente número primo
      divisor++;
    }
  
    return factores;
  }
  

  


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
    var n = array.length;
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - 1 - i; j++) {
        // Compara elementos adyacentes
        if (array[j] > array[j + 1]) {
          // Intercambia los elementos si están en el orden incorrecto
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }
  


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
    var n = array.length;
    for (var i = 1; i < n; i++) {
      var currentElement = array[i];
      var j = i - 1;
  
      // Mueve los elementos del array que son mayores que el elemento actual
      // a una posición adelante de su posición actual
      while (j >= 0 && array[j] > currentElement) {
        array[j + 1] = array[j];
        j--;
      }
  
      // Coloca el elemento actual en su posición correcta
      array[j + 1] = currentElement;
    }
  
    return array;

  
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
    var n = array.length;
  
    for (var i = 0; i < n - 1; i++) {
      var minIndex = i;
  
      for (var j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      // Intercambiar el elemento mínimo con el elemento en la posición actual
      var temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  
    return array;
  }


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
