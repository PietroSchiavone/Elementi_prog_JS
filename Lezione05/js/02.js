class Studente{

    constructor(nome, cognome, matricola, corso){
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
        this.corso = corso;

        this.studia = function () {
            return `Sto studiando per il corso di ${this.corso};`
        }

        this.toString = function () {
            return `Ciao, mi chiamo ${this.nome} ${this.cognome} - matricola n°${this.matricola}. Studio ${this.corso}`
        }
    }
}

let aula = [
    new Studente("Luca", "Braina", 2, "Frontend"),
    new Studente("Alice", "D'alessandro", 3, "Frontend"),
    new Studente("Pietro", "Schiavone", 5, "Frontend"),
    new Studente("Gabriel", "Tamburo", 6, "Frontend"),
    new Studente("Davide", "Vasi", 7, "Frontend"),
    new Studente("Luisella", "Augello", 8, "Frontend"),
    new Studente("Freddy", "Delnardo", 9, "Frontend"),
    new Studente("Jesus", "Martinez", 10, "Frontend"),
]

let btnShowStud = document.getElementById("btnShowStud");
let elencoStudenti = document.getElementById("elencoStudenti");

function stampaElenco() {
    aula.forEach(studente => {
        elencoStudenti.innerHTML += "<li>" + studente.toString() + "</li>";
    })
}

btnShowStud.addEventListener("click", stampaElenco);