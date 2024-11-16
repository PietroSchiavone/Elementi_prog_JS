let studente = {
    nome: "Laura",
    cognome: "Verdi",
    eta: 25,
    presenza: true,
    materie: ["js", "html & css", "angular", "java"],
    corso: {
        titolo: "tecnico informatico",
        responsabile: "Egle Risola",
        docenti: [
            {
                nome: "Dario Mennillo",
                materia: "JS",
            },
            {
                nome: "Davide Ghione",
                materia: "html & css"
            }
        ]
    }
}

console.log(studente.nome, studente.cognome, "iscritta al corso " + studente.corso.titolo);
console.log("docente preferito " + studente.corso.docenti[0].nome);

let materieEsame = "";
for (let i = 0; i < studente.materie.length; i++) {
    console.log(studente.materie[i]);
        
}

let docente = {
    nome: "Mario",
    cognome: "Gialli",
    citta: "Torino",
    status: "online",
    materia: "",

    presentati: function () {
        let presentazone = "Ciao, sono il docente: " + this.nome + " " + this.cognome + ". Vivo a " + this.citta + " e in questo momento sono " + this.status + ". Sto insegnando " + this.materia;

        return presentazone;
    },

    cambiaStatus: function () {
        // if (this.status == "online") {
        //     this.status = "offline";
        // } else {
        //     this.status = "online";
        // }

        this.status == "online" ? this.status = "offline" : this.status = "online";
    },

    assegnaMateria: function(materia) {
        this.materia = materia;
    }
}

docente.assegnaMateria("Unreal engine");

docente.presentati();

let btn = document.getElementById("btn");
let demo = document.getElementById("demo");

btn.addEventListener("click", function () {
    let materia = document.getElementById("materia").value;
    if (materia != "") {
        docente.assegnaMateria(materia);
        demo.innerHTML = docente.presentati(); 
    } else {
        demo.innerHTML = "Non hai inserito nessuna materia";
    }
        
})