/* Stampa il cubo dei primi N numeri dove N è un numero indicato dall'utente */

const cubeNumbers = [];
let repeat = 6;
// Chiedi per 6 volte all'utente di inserire un numero,
// let i = 0; i < repeat; i++
for (let i = repeat; i > 0; i--) {
    let singleNumber = Number(prompt('Scrivi un numero'))
    singleNumber = singleNumber ** 3
    cubeNumbers.push(singleNumber)
}
alert('Il cubo dei numeri è : ' + cubeNumbers)
console.log('Il cubo dei numeri è ' + cubeNumbers)