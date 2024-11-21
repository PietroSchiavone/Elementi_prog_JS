// trasformo un json in un oggetto

let pizza3Json = `{"nome": "diavola", "prezzo": 8, "ingredienti": ["pomodoro", "mozzarela", "olio evo"]}`;

console.log(pizza3Json.nome);

let pizza3 = JSON.parse(pizza3Json);

console.log(pizza3);
console.log(pizza3.nome);

class Pizza{
    constructor(nome, prezzo, ingredienti){
        this.nome = nome;
        this.prezzo = prezzo;
        this.ingredienti = ingredienti;
    }
}

let pizza3Obj = new Pizza(pizza3.nome, pizza3.prezzo, pizza3.ingredienti);

console.log(pizza3Obj);
console.log(pizza3Obj.prezzo);