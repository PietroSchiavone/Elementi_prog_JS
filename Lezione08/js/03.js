class Utente {
    constructor(nome, cognome, corso, ruolo, orario) {
        this.nome = nome;
        this.cognome = cognome;
        this.corso = corso;
        this.ruolo = ruolo;
        this.orario = orario;
    }

    toHtml() {
        let li = document.createElement("li");
        li.textContent = `${this.nome} ${this.cognome} - ${this.ruolo} - ${this.corso} - ${this.orario}`;
        
        let buttonDel = document.createElement("button");
        buttonDel.textContent = "x";
        buttonDel.addEventListener("click", () => {
            li.remove();
        });
       
        li.appendChild(buttonDel);
        return li;
    }
}

let utenti = [];

let inputNome = document.querySelector("#nome");
let inputCognome = document.querySelector("#cognome");
let inputCorso = document.querySelector("#corso");
let inputRuolo = document.querySelector("#ruolo");
let btnRec = document.querySelector("#btnRec");
let btnStmpLista = document.querySelector("#btnStmpLista");
let lista = document.querySelector("#lista");
let errors = document.querySelector("#errors");


function controllaCampiForm(nome, cognome, ruolo, corso) {
    if (nome.trim() === "" || cognome.trim() === "" || ruolo.trim() === "" || corso.trim() === "") {
        errors.innerHTML = "Stai dimenticando qualcosa";
        return false;
    } else {
        errors.innerHTML = ""; 
        return true;
    }
}


function aggiungiUser() {
    let nome = inputNome.value; 
    let cognome = inputCognome.value;
    let corso = inputCorso.value;
    let ruolo = inputRuolo.value;

    // Controllo dei campi
    if (!controllaCampiForm(nome, cognome, ruolo, corso)) {
        return;
    }

    let today = moment();
    let orario = today.format('LTS');
    let nuovoUtente = new Utente(nome, cognome, corso, ruolo, orario);
    utenti.push(nuovoUtente);

    inputNome.value = "";
    inputCognome.value = "";
    inputCorso.value = "";
    inputRuolo.value = "";
}


function stampa() {
    lista.innerHTML = "";
    utenti.forEach(utente => {
        lista.appendChild(utente.toHtml());
    });
}

btnRec.addEventListener("click", aggiungiUser);
btnStmpLista.addEventListener("click", stampa);

function adesso(id) {
    moment.locale('it');

    const today = moment();
    document.getElementById("data").innerHTML = today.format('LL');
    document.getElementById("time").innerHTML = today.format('LTS');

    setTimeout(() => adesso(id), 1000);    
}

adesso();