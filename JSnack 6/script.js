//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.


const limit = parseInt(prompt('Quante volte vuoi stampare il cubo?'))

for (let i = 1; i <= limit; i++){
  const cube = Math.pow(i, 3);
  console.log(cube)
}