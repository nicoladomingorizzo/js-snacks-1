/* Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array. */

// Crea un array vuoto.

const oddNumbers = [];
let repeat = 6;
// Chiedi per 6 volte all'utente di inserire un numero,
// let i = 0; i < repeat; i++
for (let i = repeat; i > 0; i--) {
    let singleNumber = Number(prompt('Scrivi un numero'))
    if (singleNumber % 2 == 1) {
        oddNumbers.push(singleNumber)
    }
}
console.log(oddNumbers)