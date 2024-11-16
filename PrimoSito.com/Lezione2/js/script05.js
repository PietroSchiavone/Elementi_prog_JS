//estrai 6 numeri senza far avvenire la ripetizione di numeri
let tot = 100; //totale dei numeri estraibili
let estrazioni = 6; //numero di estrazioni effettuate
let numeriTot = []
let numeriEstratti = []

for (let i = 1; i < (tot + 1); i++) {
    numeriTot.push(i);
    
}

for (let i = 0; i < estrazioni; i++) {
    let numeroEstrattoIndice = Math.floor(Math.random() * numeriTot.length);
    numeriEstratti.push(numeriTot[numeroEstrattoIndice]);    
    numeriTot.splice(numeroEstrattoIndice, 1);
}

numeriEstratti.sort();
console.log("i numeri estratti sono: " + numeriEstratti);