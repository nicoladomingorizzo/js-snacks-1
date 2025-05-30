/* L'utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore */

// L'utente inserisce due numeri in successione, con due prompt
const number1 = Number(prompt('Scrivi un numero'));
const number2 = Number(prompt('Scrivi un altro numero'));

// Il software stampa il maggiore
if (number1 > number2) {
    alert('Il numero maggiore è : ' + number1)
    console.log(number1)
} else if (number1 < number2) {
    alert('Il numero maggiore è : ' + number2)
    console.log(number2)
} else {
    alert('I numeri che hai scritto sono uguali')
    console.log(number1, number2)
}