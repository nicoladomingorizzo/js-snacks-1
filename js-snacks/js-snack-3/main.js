/* Il software deve chiedere per 10 volte all'utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti */


// Il software deve chiedere per 10 volte all'utente di inserire un numero.
const number1 = Number(prompt('Scrivi il primo numuero,  ne dovrai inserire 10 in successione'))
const number2 = Number(prompt('Scrivi un numuero, ancora 9'))
const number3 = Number(prompt('Scrivi un numuero, ancora 8'))
const number4 = Number(prompt('Scrivi un numuero, ancora 7'))
const number5 = Number(prompt('Scrivi un numuero, ancora 6'))
const number6 = Number(prompt('Scrivi un numuero, ancora 5'))
const number7 = Number(prompt('Scrivi un numuero, ancora 4'))
const number8 = Number(prompt('Scrivi un numuero, ancora 3'))
const number9 = Number(prompt('Scrivi un numuero, ancora 2'))
const number10 = Number(prompt("Scrivi un numuero, ci siamo è l'ultimo"))

// Il programma stampa la somma di tutti i numeri inseriti

const allNumbers = [number1, number2, number3, number4, number5, number6, number7, number8, number9, number10]
let numbersSum = 0
for (let i = 0; i < allNumbers.length; i++) {
    numbersSum += allNumbers[i]
}
alert('La somma dei numeri è : ' + numbersSum)
console.log('La somma dei numeri è : ' + numbersSum)