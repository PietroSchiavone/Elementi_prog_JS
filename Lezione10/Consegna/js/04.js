class Pizza{
    constructor(nome, prezzo, ingredienti){
        this.nome = nome;
        this.prezzo = prezzo;
        this.ingredienti = ingredienti;
    }
}

let listaPizze = [];


let feedNome = document.querySelector("#feedNome");
let feedPrezzo = document.querySelector("#feedPrezzo");
let feedIngredienti = document.querySelector("#feedIngredienti");

let nome = document.querySelector("#nome");
let prezzo = document.querySelector("#prezzo");
let ingredienti = document.querySelector("#ingredienti");

let formRegPizza = document.querySelector("#formRegPizza");
let reset = document.querySelector("#reset")


function registraPizza(event) {

    listaPizze = JSON.parse(localStorage.getItem("listaPizze"));
    let nome = document.querySelector("#nome").value;
    let prezzo = document.querySelector("#prezzo").value;
    let ingredienti = document.querySelector("#ingredienti").value;

    
    if(checkNome(nome) && checkPrezzo(prezzo) && checkIngredienti(ingredienti)){
        
        let ingredientiArray = ingredienti.split(" ");

        console.log(ingredientiArray    );
        

        let miaPizza = new Pizza(nome, prezzo, ingredientiArray);

        listaPizze.push(miaPizza);

        let listaPizzeJson = JSON.stringify(listaPizze);

        localStorage.setItem("listaPizze", listaPizzeJson);

        localStorage.getItem

    }else{
        event.preventDefault();
    }

}

reset.addEventListener("click", function () {

    localStorage.setItem("listaPizze", "");
    demo.innerHTML = ""
})

formRegPizza.addEventListener("submit", registraPizza);

nome.addEventListener("blur", function(){
    let nome = document.querySelector("#nome").value;
    checkNome(nome);
})

prezzo.addEventListener("blur", function(){
    let prezzo = document.querySelector("#prezzo").value;
    checkPrezzo(prezzo);
})

ingredienti.addEventListener("blur", function(){
    let ingredienti = document.querySelector("#ingredienti").value;
    checkIngredienti(ingredienti);
})



function checkNome(nome){
    if(nome != ""){
        feedNome.textContent = ""
        return true;
    }else{
        feedNome.textContent = "Non hai inserito il nome";
        return false
    }
}

function checkPrezzo(prezzo){
    if(prezzo != ""){
        feedPrezzo.textContent = "";
        return true;
    }else{
        feedPrezzo.textContent = "Non hai inserito il prezzo";
        return false
    }
}


function checkIngredienti(ingredienti){
    
    if(ingredienti != ""){
        feedIngredienti.textContent = "";
        return true;
    }else{
        feedIngredienti.textContent = "ingredienti non selezionato";
        return false;
    }

}