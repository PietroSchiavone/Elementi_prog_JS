let autori = [
    "Gabriel García Márquez", 
    "Virginia Woolf", 
    "Fëdor Dostoevskij", 
    "Jane Austen", 
    "Haruki Murakami", 
    "Franz Kafka", 
    "Italo Calvino", 
    "Toni Morrison", 
    "Mark Twain", 
    "Ernest Hemingway"
];

let libri = [
    "Cent'anni di solitudine", 
    "La signora Dalloway", 
    "Delitto e castigo", 
    "Orgoglio e pregiudizio", 
    "Kafka sulla spiaggia", 
    "Il processo", 
    "Le città invisibili", 
    "Beloved", 
    "Le avventure di Huckleberry Finn", 
    "Il vecchio e il mare"
];

// let autoriELibri = [
//     (autori[0] + ": " + libri[0]), 
//     (autori[1] + ": " + libri[1]), 
//     (autori[2] + ": " + libri[2]), 
//     (autori[3] + ": " + libri[3]), 
//     (autori[4] + ": " + libri[4]), 
//     (autori[5] + ": " + libri[5]), 
//     (autori[6] + ": " + libri[6]), 
//     (autori[7] + ": " + libri[7]), 
//     (autori[8] + ": " + libri[8]), 
//     (autori[9] + ": " + libri[9])
// ];

// // console.log(autoriELibri);

// autoriELibri.sort;

// console.log(autoriELibri[0]);
// console.log(autoriELibri[1]);
// console.log(autoriELibri[2]);
// console.log(autoriELibri[3]);
// console.log(autoriELibri[4]);
// console.log(autoriELibri[5]);
// console.log(autoriELibri[6]);
// console.log(autoriELibri[7]);
// console.log(autoriELibri[8]);
// console.log(autoriELibri[9]);

let autoriELibri = [];

for (let i = 0; i < autori.length; i++) {
    autoriELibri.push(autori[i] + ": " + libri[i]) ;
}
autoriELibri.sort;
for (let autoreELibro of autoriELibri ) {
    console.log(autoreELibro);
}