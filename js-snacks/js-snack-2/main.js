/* L'utente inserisce due parole in successione,con due prompt. Il software stampa prima la parola più corta poi la parola più lunga */

// L'utente inserisce due parole in successione,con due prompt.
const firstWord = prompt('Scrivi una parola')
const secondWord = prompt('Scrivi una seconda parola')

//  Il software stampa prima la parola più corta poi la parola più lunga
if (firstWord.length > secondWord.lentgh) {
    alert('La parola più lunga è : ' + firstWord)
    alert('La parola più corta è : ' + secondWord)
    console.log('La parola più lunga è : ' + firstWord)
    console.log('La parola più corta è : ' + secondWord)
} else if (firstWord < secondtWord) {
    alert('La parola più lunga è : ' + secondWord)
    alert('La parola più corta è : ' + firstWord)
    console.log('La parola più lunga è : ' + secondWord)
    console.log('La parola più corta è : ' + firstWord)
} else {
    alert('Le parole sono della stessa lunghezza')
    console.log('Le parole sono della stessa lunghezza')
}