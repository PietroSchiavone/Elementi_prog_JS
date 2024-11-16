//ARRAY

//Strutture contenitore di elementi simili tra di loro

let colori = ["bianco", "blu", "verde", "giallo", "rosso", "nero"];
//posizioni       0       1       2         3        4        5

console.log(colori[0]);
console.log(colori[1]);
console.log(colori[2]);
console.log(colori[3]);
console.log(colori[4]);
console.log(colori[5]);

//voglio sapere quanti elementi ci sono nel mio array

console.log("nel mio caso ci sono " + colori.length + " colori");

console.log(colori[colori.length - 1]);
//aggiungo un elemento
colori.push("rosa");
colori.push("arancione");

console.log(colori);

//Ordino in ordine alfabetico gli elementi
colori.sort();

console.log(colori);

//Inverto l'ordine delgi elementi
colori.reverse();

console.log(colori);

//elimino l'ultimo elemeneto 
colori.pop();

console.log(colori);

//verificare l'esistenza di un elemento nell'array
console.log(colori.includes("viola"));

//estrarre l'indice di un elemento
console.log(colori.indexOf("rosso"));


//Esempio
let frutta = ["pesca", "mela", "kiwi", "mandario"];
let verdura = ["spinaci", "broccoli", "cavolfiore", "lattuga"];

//Unisco i due array

let fruttaEVerdura = frutta.concat(verdura);

console.log(fruttaEVerdura);

//Cerco una frutta in particolare

let fruttoPreferito = "fragola";

if (fruttaEVerdura.includes(fruttoPreferito)) {
    console.log("Si, abbiamo il tuo frutto preferito, " + fruttoPreferito);
} else {
    console.log("Non abbiamo il tuo frutto preferito");
}

//cosa non fare con gli array ASSOLUTAMENTE:
let arrayMisto = ["ciao", 2, false, "bergamo"];

console.log(arrayMisto);