class User {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;

        this.toString = function () {
            return `${this.nome} ${this.cognome}`;
        }
    }
}

let btnAdd = document.getElementById("btnAdd");
let nomeUser = document.getElementById("nomeUser");
let cognonomeUser = document.getElementById("cognonomeUser");
let listaIscritti = document.getElementById("listaIscritti");

let listaUtenti = [];

function aggiungiUser() {
    let nome = nomeUser.value;
    let cognome = cognonomeUser.value;

    let user = new User(nome, cognome);

    listaUtenti.push(user);

    console.log(listaUtenti);
    
}

function stampaUtenti() {
    listaIscritti.innerHTML = "";
    listaUtenti.forEach(utente => {

        /**
         * @param(User) utente
        */

        listaIscritti.innerHTML += `<li>${utente.toString()}</li>`;
    })
}

btnAdd.addEventListener("click", function () {
    aggiungiUser();
    stampaUtenti();
});

