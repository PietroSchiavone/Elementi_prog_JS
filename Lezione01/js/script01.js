let oraDelGiorno;
oraDelGiorno = 15;
console.log(oraDelGiorno)

let numeroStudenti = 10;

let miaVariabile = "ciao";
miaVariabile = "cia, arrivederci";
miaVariabile = 24;
// Su JS si può convertire una varibile in ogni tipo di dato, ma è una tecnica sconsigliata

let miaEta = "35";
// per trattare una sctringa come un numero devo usare il cast del dato

let somma = Number(miaEta) + 1 ;
console.log(somma);

//esempio

let num1 = "22";
let num2 = "34";

let somma1 = num1 + num2;
console.log(somma1);

let somma2 = Number(num1) + Number(num2);
console.log(somma1);

// Custanti
const piGreco = Math.PI;
console.log(piGreco);

//Booleane

let varBool = true;

let pioggia = true;

if (pioggia) {
    console.log("porto l'ombrello");
} else {
    console.log("non porto l'ombrello");
}

// possono essere utilizzati 1 e 0 come variabili booleane, sono validi come argomendo di comparazione e si può utilizzare BooLean() per eseguire il cast
