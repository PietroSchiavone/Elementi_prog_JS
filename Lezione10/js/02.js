class Pizza{
    constructor(nome, prezzo, ingredienti){
    this.nome = nome;
    this.prezzo = prezzo;
    this.ingredienti = ingredienti;
    }
    
    toString( ) {
        let ingr= "";
        this.ingredienti.forEach(ing => {
            ingr += ing + " - ";
        })
    return `Pizza: $(this.nome} - € ${this.prezzo}. Ingredienti ${ingr}`
    }

    compraPizza() {
        return 
    }
}
let pizza1 = new Pizza("Margherita", 6, ["Pomodoro", "Mozzarella", "Basilico", "Olio Evo"])
let pizza2 = {
    nome: "Marinara",
    prezzo: 5,
    ingredienti: ["Pomodoro", "Mozzarella", "Basilico", "Olio Evo"],
}

console.log(pizza1.nome);
console.log(pizza2.toString());

let pizzaJson = JSON.stringify(pizza1)
console.log(typeof pizzaJson);