/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array
  */

const oddNumbers = [];

for(let i = 0; i < 6; i ++){
  const number = parseInt(prompt('Inserisci un numero'));

  if(number % 2 !==0){
    oddNumbers.push(number)
  }
}

console.log(oddNumbers)