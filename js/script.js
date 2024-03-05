// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// chiedere quanti km vuole percorere l'utente
const userKm = parseInt(prompt('Quanti KM vorresti percorrere?'));
console.log(userKm)

// chiedere l'età dell'utente
const userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge)

// calcolare prezzo biglietto : 0,21 * km 
let priceTicket = 0.21 * userKm;
console.log(priceTicket);

// applicare sconto 20% se minorenne o 40% se over 65 
let discount = 0; 

if (userAge < 18){

  discount = priceTicket * 20 / 100;

} else if (userAge >= 65){

  discount = priceTicket * 40 / 100;
  
}
 console.log(discount)

// formula per avere il prezzo finale meno lo sconto 
const priceFinal = priceTicket - discount ;
console.log(priceFinal)

// al prezzo finale del biglietto vedere max 2 decimali dopo la virgola
const priceFinalRounded = priceFinal.toFixed(2)
console.log(priceFinalRounded)

// comunicare prezzo finale all'utente 
let userMessage = 'Il costo del biglietto è di: '+ priceFinalRounded +'€';
alert(userMessage)