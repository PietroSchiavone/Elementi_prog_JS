let automobile = {
    marca: "BMW",
    modello: "i5",
    cilindrata: 2000,
    colore: "blue",
    trasmissione: "automatica",

    marciaAttuale: 0,
    accesa: false,
    numGiri: 0,
    velocita: 0,

    descriviAuto(){
        let descrizione = `${this.marca} ${this.modello} - cilindrata: ${this.cilindrata}cc - colcore: ${this.colore} - trasmissione ${this.trasmissione}`

        return descrizione;
    },

    guidaAuto(numGiri, marciaAttuale) {
        this.numGiri = numGiri;
        this.marciaAttuale = marciaAttuale;

        this.velocita = (this.numGiri * this.marciaAttuale) / 100;

        return this.velocita;
    },

    calcoloVelocita(){
        this.accesa = true;

        this.guidaAuto(this.numGiri, this.marciaAttuale);

        let infoGuida = "L'auto è accesa: " + this.accesa + " stai guidando la tua auto alla velocità di " + this.velocita + "km/h. Marcia attuale: " + ", Numero di giri: " + this.numGiri + "giri/min";

        return infoGuida;

    }
}

// console.log(automobile.descriviAuto());
// console.log(automobile.guidaAuto(3500, 3));
// console.log(automobile.calcoloVelocita());

let numGiri = document.getElementById