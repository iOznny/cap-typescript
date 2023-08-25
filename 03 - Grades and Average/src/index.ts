/**
 * Ejercicio 3: Calificaciones y promedio (2 puntos).
 * 
 * Dado un array de objetos que representan calificaciones de 
 * estudiantes, calcula el promedio de calificaciones y muestra los 
 * estudiantes que tienen calificaciones por encima de ese promedio.
*/

interface ICalificacion {
    name: string;
    qualification: number;
}

const UserUno: ICalificacion[] = [
    {
        name: "Materia 1",
        qualification: 10,
    },
    {
        name: "Materia 2",
        qualification: 10,
    },
    {
        name: "Materia 3",
        qualification: 10,
    },
];

const UserDos: ICalificacion[] = [
    {
        name: "Materia 1",
        qualification: 10,
    },
    {
        name: "Materia 2",
        qualification: 9,
    },
    {
        name: "Materia 3",
        qualification: 8,
    },
];

function calculate(user: ICalificacion[]) {
    let length: number = user.length;
    return user.reduce((previuesValue, user) => (previuesValue += user.qualification / length), 0);
}

// User Uno
const resultUserUno = calculate(UserUno);
console.log('User Uno Promedio:', resultUserUno);

// User Dos
const resultUserDos = calculate(UserDos);
console.log('User Dos Promedio:', resultUserDos);