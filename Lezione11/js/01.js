//Scopo del gioco
//clicco sul pulsante, parte una funzione che esegue una fetch. Stampo il contenuto del file nel div#demo
let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");

function recuperaFile() {
    let pathFile = "./assets/mioTesto.txt";

    //se specifico solo l'url di default il metodo che utilizza fetch è GET
    fetch(pathFile)
    .then(response => {
        return response.text();
    })

    .then(data=> {
        demo.innerHTML = data;
    })
}

btn.addEventListener("click", recuperaFile);