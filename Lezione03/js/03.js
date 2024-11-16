//dichiaro una funzione

function saluta() {
    let nome = "Pietro";

    console.log("ciao " + nome);
}

//richiamo la funzione
//console.log(nome); // non c'è output dato che "nome" è una variabile di tipo locale

saluta();

let numeroStudenti = 10;

function contaStudenti() {
    numeroStudenti = 12;
    
}

contaStudenti();
console.log("in classe ci sono " + numeroStudenti + " studenti");
//le funzioni possono aggiornare variabili mondiali

calcolaMultipiDi2()

function calcolaMultipiDi2() {
    let numeri = [2,4,64,34,2,6,48,3,5,7,4];
    
    analizza(numeri);
}

function analizza(arrayDiNumeri) {
    for (let i = 0; i < arrayDiNumeri.length; i++) {
        if (arrayDiNumeri[i] % 2 == 0) {
            console.log(arrayDiNumeri[i] + " è un multiplo di 2");            
        } else {
            console.log(numeri[i]);            
        }
        
    }
}

