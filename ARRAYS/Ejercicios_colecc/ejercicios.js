// Sum of Resistors in Series
 

// Calculate the sum of all resistors connected in series.
// Examples:
// - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
// - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
// - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

// Note: This approach uses the absolute value of each resistance to ensure all values are positive.

function sumaResi(Resistencias) {
    let suma = 0;
  
    for (let i = 0; i < Resistencias.length; i++) {
      suma += Math.abs(Resistencias[i]);
    }
  
    return suma;
  }
  
  
   const sumResi1 = [-1, 5, 6, 3];
   const resultado1 = sumaResi(sumResi1);
   console.log (`${resultado1} ohms`);

   const sumResi2 = [14,3.5,6];
   const resultado2 = sumaResi(sumResi2);
   console.log (`${resultado2} ohms`);

   const sumResi3 = [8,15,100];
   const resultado3 = sumaResi(sumResi3);
   console.log (`${resultado3} ohms`);


// Given a number, return the number divided into its halves in an array.
 

// Examples:
// - `numDiv(4)` should return `[2, 2]`.
// - `numDiv(10)` should return `[5, 5]`.
 

// Note: The original example for `numDiv(10)` appears to be incorrect.
 

 function division (n) {
    let num = n/2;
    console.log([num, num]);
 }
 

 division(4);
 division(10);

// Secret Society
 

// Find the name of a secret society based on the first letter of each member's name.
 

// Examples:
// - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
// - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
// - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HRH'`.