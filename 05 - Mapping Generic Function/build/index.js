"use strict";
/**
 * Ejercicio 5: Mapeo genérico con función  (5 puntos).
 *
 * Crea una función genérica llamada mapear que tome un array
 * y una función de mapeo, y devuelva un nuevo array con los elementos transformados.
*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reverse = (array) => {
    return array.reverse().fill(1, 1);
};
function mapping(array, callback) {
    return callback(array);
}
const result = mapping(numbers, reverse);
console.log('New Array:', result);
