// creo le varibili
let nome;
let cognome;
let eta;
let indirizzo;
let dataNascita;


nome = window.prompt("Inserisci il tuo nome");
cognome = window.prompt("Inserisci il tuo cognome");
indirizzo = window.prompt("Inserisci il tuo indirizzo");
dataNascita = window.prompt("Inserisci il tuo anno di nascita");
eta = 2024 - Number(dataNascita);

let presentazione = "Ciao, mi chiamo " + nome + " " + cognome + ", sono nato il " + dataNascita + "\n e oggi ho " + eta +" anni, abito in via " + indirizzo;

console.log(typeof indirizzo);
console.log(typeof eta);
console.log(presentazione);

document.write(presentazione);
