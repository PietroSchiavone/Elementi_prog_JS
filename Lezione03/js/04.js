//tutte le funzioni possono avere dei parametr di ingresso
function salutaQualcuno(nome, cognome) {
    let saluto = `ciao ${nome} ${cognome}`
    console.log(saluto);
    
}

let nomi = ["Pietro", "Dario", "Anna"];
let cognomi = ["Schiavone", "Rossi", "Bianchi"];

for (let i = 0; i < nomi.length; i++) {
    salutaQualcuno(nomi[i], cognomi[i]);
    
}