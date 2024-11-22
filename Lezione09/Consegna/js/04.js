class Utente {
    constructor(nome, cognome, email, telefono, ruolo) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.telefono = telefono;
        this.ruolo = ruolo;
    }
}  

let nome = document.querySelector("#nome");
let cognome = document.querySelector("#cognome");
let email = document.querySelector("#email");
let numTel = document.querySelector("#numTel");
let ruolo = document.querySelector("#ruolo");

let mioForm = document.querySelector("#mioForm");

let fNome = document.querySelector("#fNome");
let fCognome = document.querySelector("#fCognome");
let fMail = document.querySelector("#fMail");
let fTel = document.querySelector("#fTel");
let fRuolo = document.querySelector("#fRuolo");

let svgNonValido = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>`;
let svgValido = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                    </svg>`;


function validaNome() {
    
    if (nome.value.trim().length < 2) {

        fNome.innerHTML = svgNonValido;

        nome.setAttribute("style", "border-color: red;");
        fNome.setAttribute("style", "color: red;");
        return false;

    } else {

        fNome.innerHTML = svgValido;

        nome.setAttribute("style", "border-color: green;");
        fNome.setAttribute("style", "color: green;");
        return true;

    }
}

function validaCognome() {
    if (cognome.value.trim().length < 2) {

        fCognome.innerHTML = svgNonValido;

        cognome.setAttribute("style", "border-color: red;");
        fCognome.setAttribute("style", "color: red;");
        return false;

    } else {

        fCognome.innerHTML = svgValido;

        cognome.setAttribute("style", "border-color: green;");
        fCognome.setAttribute("style", "color: green;");
        return true;

    }
}

function validaEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {

        fMail.innerHTML = svgNonValido;

        email.setAttribute("style", "border-color: red;");
        fMail.setAttribute("style", "color: red;");
        return false;

    } else {

        fMail.innerHTML = svgValido;

        email.setAttribute("style", "border-color: green;");
        fMail.setAttribute("style", "color: green;");
        return true;

    }
}

function validaNumeroTelefono() {
    if (numTel.value.trim().length < 8 || isNaN(numTel.value)) {

        fTel.innerHTML = svgNonValido;

        numTel.setAttribute("style", "border-color: red;");
        fTel.setAttribute("style", "color: red;");
        return false;

    } else {

        fTel.innerHTML = svgValido;

        numTel.setAttribute("style", "border-color: green;");
        fTel.setAttribute("style", "color: green;");
        return true;

    }
}

function validaRuolo() {
    if (ruolo.value === "") {

        fRuolo.innerHTML = svgNonValido;

        ruolo.setAttribute("style", "border-color: red;");
        fRuolo.setAttribute("style", "color: red;");
        return false;

    } else {

        fRuolo.innerHTML = svgValido;

        ruolo.setAttribute("style", "border-color: green;");
        fRuolo.setAttribute("style", "color: green;");
        return true;

    }
}

nome.addEventListener("blur", validaNome);
cognome.addEventListener("blur", validaCognome);
email.addEventListener("blur", validaEmail);
numTel.addEventListener("blur", validaNumeroTelefono);
ruolo.addEventListener("blur", validaRuolo);

mioForm.addEventListener("submit", function (event) {
    const isNomeValido = validaNome();
    const isCognomeValido = validaCognome();
    const isEmailValida = validaEmail();
    const isNumeroValido = validaNumeroTelefono();
    const isRuoloValido = validaRuolo();

    if (!isNomeValido || !isCognomeValido || !isEmailValida || !isNumeroValido || !isRuoloValido) {
        event.preventDefault();
        alert("Compila tutti i campi prima di inviare il form.");
    }

});