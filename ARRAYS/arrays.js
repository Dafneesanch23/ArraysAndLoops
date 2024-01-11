let names = ["Dafne", "Berenice", "Sanchez", "Uscanga"];

let numbers = [10 , -1000, 5.5, 40, 30];

let mix = ["Dafne", 10, 20, "Sanchez", "Generation México", true];

let booleanMix = [true, false, false , true];

//Acceder a la info de un array
const userData = ["Dafne Sanchez", 27, "Generation Mexico", "Artimonki"];

// Print
console.log (userData);

//Print length
console.log(userData.length);

//Mejor práctica de lo anterior
const arrLength = userData.length;
console.log(arrLength);

//Imprime el dato en la posición que se indique dentro de []
console.log(userData[0]);

const username = userData[0];
console.log(`Mi nombre es: ${username}`);

//MATRICES
const matrix = [[-1, 0], [1, -1]];
console.log(matrix[0][1]);

const londonCoord = [[51, "30'30 N'"], [0, "7'32 O'"]];
console.log(londonCoord[0][0]);


//Pop elimina el último dato que encuentre dentro de un array
userData.pop()
console.log (userData);

// Push agrega un dato en la última posición dentro de un array
userData.push ("ABBA");
console.log(userData);


// Une los elementos de la constante con un "_" o lo que se le indique
console.log(userData.join("_"));

//Shift elimina el primer elemento y recorre el resto e imprime el elemento eliminado
console.log(userData.shift());


//Para imprimir el array que queda despues de la eliminación de shift
console.log(userData);

//unshift agrega algun dato al inicio del array e imprime la longitud del array
console.log(userData.unshift("pompompurin"));
console.log(userData); // Imprime el nuevo array