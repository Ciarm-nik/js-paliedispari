// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var sceltaUtente = parseInt(prompt("Scegli pari o dispari e inserisci un numero da 1 a 5"));

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var numeroComputer = Math.round(Math.random()*4) +1;
console.log(numeroComputer)

//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
var somma = sceltaUtente + numeroComputer
console.log(somma)

if((somma & 1) ==0  ) {
    console.log("La somma è pari")
} else {
    console.log("La somma è dispari")
}
// Dichiariamo chi ha vinto.

