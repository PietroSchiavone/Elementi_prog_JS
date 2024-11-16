// creo le varibili
let nome;
let cognome;
let eta;
let indirizzo;
let dataNascita;


nome = "Pietro";
cognome = "Schiavone";
eta = "22";
indirizzo = "Cuneo 2";
dataNascita = "11/01/2002"

let presentazione = "Ciao, mi chiamo " + nome + " " + cognome + ", sono nato il " + dataNascita + " e oggi ho " + eta +" anni, abito in via " + indirizzo;

console.log(presentazione);

document.write(presentazione);

let username = window.prompt("che user devo usare?")

document.write("il tuo user è " + username)
