
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// Il prezzo del biglietto è definito in base ai km(0.21 € al km).
// Va applicato uno sconto del 20 % per i minorenni.
// Va applicato uno sconto del 40 % per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// PASSAGGI
// Chiedere chilometri da percorrere
// chiedere età
// calcolare prezzo biglietto in base ai chilometri
// sconto 20% se l'età è minore di 18 anni
// sconto 40% se l'età è maggiore di 64 anni
// calcola prezzo finale biglietto con due decimali

const totKm = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));
let priceTicket = totKm * 0.21

if (age < 18) {
    let priceTicketUnder = priceTicket - [(priceTicket * 20) / 100]
    console.log(priceTicketUnder.toFixed(2));

}
else if (age > 64) {
    let priceTicketOver = priceTicket - [(priceTicket * 40) / 100]
    console.log(priceTicketOver.toFixed(2));
}
else {
    priceTicket
    console.log(priceTicket.toFixed(2));
}