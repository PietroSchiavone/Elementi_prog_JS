//estrai 6 numeri senza far avvenire la ripetizione di numeri
let tot = 100; //totale di numeri estraibili
let estrazioni = 6; //quante estrazioni eseguire
let numeriTot = []
let numeriEstratti = []
for (let i = 1; i < (tot + 1); i++) {
    numeriTot.push(i);
    
}

//console.log(numeriTot);

for (let i = 0; i < estrazioni; i++) {
    let numeroEstratto = Math.floor(Math.random() * numeriTot.length);
    numeriEstratti.push(numeriTot[numeroEstratto]);
    numeriTot.splice(numeroEstratto, 1);
}

numeriEstratti.sort();
console.log("i numeri estratti sono: " + numeriEstratti);