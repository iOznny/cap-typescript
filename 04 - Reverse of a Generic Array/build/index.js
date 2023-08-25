"use strict";
/**
 * Ejercicio 4: Reverso de un array genérico (1 punto).
 *
 * Crea una función genérica llamada reversoArray que tome
 * un array como argumento y devuelva el mismo array en orden inverso.
*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function reverseArray(array) {
    return array.reverse();
}
// User Uno
const result = reverseArray(numbers);
console.log('Reverse Array:', result);
