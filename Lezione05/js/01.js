function Studente(nome, cognome, matricola, corso){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.corso = corso;

    this.studia = function () {
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} - matricola n°${this.matricola}. Studio ${this.corso}`
    }
}

// let primoStudente = new Studente("Luca", "Braina", 2, "Frontend");
// let secondoStudente = new Studente("Alice", "D'alessandro", 3, "Frontend");

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

function stampaStudenti() {
    aula.forEach(studente => {
        console.log(studente.studia());        
    })
}

stampaStudenti();