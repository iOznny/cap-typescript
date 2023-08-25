"use strict";
/**
 * Ejercicio 1: Doble de los números (1 Punto)
 *
 * Dado un array de números, crea una función que devuelva
 * un nuevo array con el doble de cada número.
*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function doubleNumbersFn(numbers) {
    return numbers.map((number) => number * 2);
}
const resultNumbers = doubleNumbersFn(numbers);
console.log('Double Numbers:', resultNumbers);
