/**
 * Ejercicio 2: En base a la siguiente lista de usuarios (1 punto)
 * 
 * Genera una función que retorne el 
 * listado Ids de los usuarios activos.
*/

interface IUser {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const users: IUser[] = [
    {

        id: 12345,
        name: "usuario 1",
        email: "usuario dos",
        isActive: true,
    },
    {
        id: 4563,
        name: "usuario 2",
        email: "usuario dos",
        isActive: true,
    },
    {
        id: 45634,
        name: "usuario 2",
        email: "usuario tres",
        isActive: false,
    }
];

function getIdsActives(users: IUser[]) {
    return users.filter((user) => user.isActive);
}

const resultUsers = getIdsActives(users);
console.log('Users Actives:', resultUsers);