//return

function calcolo() {
    let numero1 = 5;
    let numero2 = 3;
    let somma = numero1 + numero2;

    return somma;
}

//quando ho un valore di return devo raccoglierlo

let risulatato = calcolo();
console.log(risulatato);

//GEOMETRIA

function calcolaArea(base, altezza) {
    let area = base * altezza;
    return area;
}

console.log("L'area del rettangolo vale: " + calcolaArea(4, 5));

function calcolaVolume(base, altezza, profondità) {
    let volume = calcolaArea(base, altezza) * profondità;
    return volume;
}

console.log(`il volume è: ${calcolaArea(5, 9, 7)}`);

function calcolaVolume2(area, profondità) {
    let volume = area * profondità;
    return volume;
}

console.log(`il volume è: ${calcolaVolume2(calcolaArea(5,6), 7)}`);


//funzione anonima
//ES: foreach, addEventListener
(base, altezza) => {
    return base * altezza
}

let colori = ["bianco", "rosso", "blu"];

colori.forEach((col) => {
    console.log(col);    
})


//CLOSURE - simula l'incapsulamento
function primaFunzione() {
    let mioNome = "pietro";

    function secondaFunzione() {
        return mioNome + " schiavone"
    }

    return secondaFunzione();
}

console.log(primaFunzione);

//questo metodo serve per proteggere la variabile miocognome in modo che non sia accessibile in nessun modo, non è possibile richiamare secondaFunzione
