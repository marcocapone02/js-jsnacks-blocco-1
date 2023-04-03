/* 
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
 */

const numbers = prompt('Inserisci un numero di 4 cifre');
let sumNumbers = 0;

for (let i = 0; i < numbers.length; i++){
  sumNumbers += parseInt(numbers[i]);
}

console.log(sumNumbers)