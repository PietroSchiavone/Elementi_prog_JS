let miaStringa = "il Martedì pomeriggio abbiamo lezione in aula 2";

console.log(miaStringa.length);//conta i caratteri, spazi inclusi

//anche le stringhe sono 0-based
console.log(miaStringa.charAt(0));
console.log(miaStringa.charAt(11));
console.log(miaStringa.charCodeAt(0));//restituisce il valore in codice ashii

//metodi di ricerca
console.log(miaStringa.indexOf("Martedì"));//restituisce l'indice di inizio della parola
console.log(miaStringa.lastIndexOf("a")); //restituisce l'ultima ricorrenza

//metodi per il taglio
console.log(miaStringa.slice(5,22));

//metodi per la sostituzione
console.log(miaStringa.replace("Martedì", "Giovedì"))

//metodi split() e join()
//split taglia la stringa ogni volta che incontra il pattern dato
console.log(miaStringa.split(""));

console.log(miaStringa.split(" "));

//inverti l'ordine di "Immaginazione e lavoro"
let parola = "Immaginazione e lavoro"
console.log(parola.split("").reverse().join(""));