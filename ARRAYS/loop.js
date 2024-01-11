//console.log ('Archivo de loops');

//Blucle
//Algo que se repite

const names = ["Dafne", "Berenice", "Sanchez", "Uscanga", "De encantador"];

//console.log(names.length);

//For
//Algo que se repite n cantidad de veces y tiene un punto inicial

// for( let count = 0; count <= names.length; count++) {
//     console.log (names[count]);
// }

//for (let i=0; i <= names.length - 1; i++){
//     console.log(names[i]);
// }

// for (let i= 0; i < 1500; i++){
//     console.log(i);
// }



// for (let i= 1500; 1 >= 0; i--){
//     console.log(i);
// }


// for ( let se define el inicio del ciclo; límite; saltos)
// "i++" indica aumentar uno al valor de i y "i--" resta uno

//While primero confirma y despues realiza el procedimiento

let count =1;
// while (count <= 5){
//     console.log(count);
//     count++;
// }

//Do while primero realiza el procedimiento y despues confirma

do{
console.log(count);
count++;
} while (count< 1);

//forEach realiza un procedimient/bloque de codigo por cada elemento dentro de un array
// El bloque de codigo dentro de un forEach puede ser cualquier instruccion

names.forEach(name => console.log(name));

names.forEach((user) =>{
    console.log(user);
})

function printName(name){
    console.log(`Username: ${name}`)
}

names.forEach((user) => {
 printName(user);
})

//Función que use loops y que resulte en factorial de un
//numero n donde 1000 > n > 0

const n = 5;

const calcFact= (number) => {
    let res = 1;
    for (number; number >= 1; number--){
        res *= number;
    }
    return res;
}

console.log(calcFact(n));

//Recursividad
const factorial = (num) => {
    if (num === 1){
        factorial(num*num-1);
    }
    return num;
}