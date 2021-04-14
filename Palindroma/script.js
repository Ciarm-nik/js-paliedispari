// Palidroma

// Chiedere all’utente di inserire una parola
var inserisciParola = prompt("Inserisci una parola!!!")

// Applico il metodo split per suddividere il testo in sottostringhe
var parolaDivisa = inserisciParola.split("");
// console.log(parolaDivisa);

// Utilizzo il metodo reverse per invertire l'array
var parolaDivisa = parolaDivisa.reverse();
// console.log(parolaDivisa);

// Riunisco le lettere per ottenere di nuovo una stringa con join
var parolaInvertita = parolaDivisa.join("");
console.log(parolaInvertita);

// Uso il condizionale per capire se quella parola è palindroma
if (inserisciParola == parolaInvertita) {
    console.log("la parola è palindroma");
} else {
    console.log("la parola non è palindroma")
}

// Creare una funzione per capire se la parola inserita è palindroma



