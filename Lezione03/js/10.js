let demo = document.getElementById("demo");
let btnSum = document.getElementById("btnSum");
let btnSot = document.getElementById("btnSot");
let btnMolt = document.getElementById("btnMolt");
let btnDiv = document.getElementById("btnDiv");
let btnUguale = document.getElementById("btnUguale");
let risultato = 0;



function addizione() {
    let numero = Number(document.getElementById("numero1").value);
    risultato += numero;
    document.getElementById("numero1").value = "";
    demo.innerHTML = "<h1>" + risultato + "</h1>";
}

function sottrazione() {
    let numero = Number(document.getElementById("numero1").value);
    risultato = risultato - numero;
    document.getElementById("numero1").value = "";
    demo.innerHTML = "<h1>" + risultato + "</h1>";
}

function moltiplicazione() {
    let numero = Number(document.getElementById("numero1").value);
    risultato = risultato * numero;
    document.getElementById("numero1").value = "";
    demo.innerHTML = "<h1>" + risultato + "</h1>";
}

function divisione() {
    let numero = Number(document.getElementById("numero1").value);
    risultato = risultato / numero;
    document.getElementById("numero1").value = "";
    demo.innerHTML = "<h1>" + risultato + "</h1>";
}


function totale() {
    demo.innerHTML = "<h1>" + risultato + "</h1>";
    document.getElementById("numero1").value = "";
}

btnSum.addEventListener("click", addizione);
btnSot.addEventListener("click", sottrazione);
btnMolt.addEventListener("click", moltiplicazione);
btnDiv.addEventListener("click", divisione);
btnUguale.addEventListener("click", totale)