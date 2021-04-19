// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var sceltaUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Hai scelto il numero: " + sceltaUtente)

var sceltaUtente_2 = prompt("Scegli pari o dispari")
console.log("Hai scelto: " + sceltaUtente_2)

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var numeroComputer = Math.round(Math.random() * 4) + 1;
console.log("Questo è il numero del computer: " + numeroComputer)

//Sommiamo i due numeri 2Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
var somma = sceltaUtente + numeroComputer
console.log("La somma dei due numeri è: " + somma)

if ((somma & 1) == 0) {
    console.log("La somma è pari")
} else {
    console.log("La somma è dispari")
}
// Dichiariamo chi ha vinto.
