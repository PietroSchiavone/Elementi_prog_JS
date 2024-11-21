class Pizza{
    constructor(nome, prezzo, ingredienti){
        this.nome = nome;
        this.prezzo = prezzo;
        this.ingredienti = ingredienti;
    }
}

let listaPizze = [];


// listaPizze.push(pizza1);

// let listaPizzeJson = JSON.stringify(listaPizze);

// localStorage.setItem("listaPizze", listaPizzeJson)



// -----------------------------------------------------------------------------------------------------

let feedNome = document.querySelector("#feedNome");
let feedPrezzo = document.querySelector("#feedPrezzo");
let feedIngrediente1 = document.querySelector("#feedIngrediente1");
let feedIngrediente2 = document.querySelector("#feedIngrediente2");
let feedIngrediente3 = document.querySelector("#feedIngrediente3");

let nome = document.querySelector("#nome");
let prezzo = document.querySelector("#prezzo");
let ingrediente1 = document.querySelector("#ingrediente1");
let ingrediente2 = document.querySelector("#ingrediente2");
let ingrediente3 = document.querySelector("#ingrediente3");

let formRegPizza = document.querySelector("#formRegPizza");



function registraPizza(event) {

    listaPizze = JSON.parse(localStorage.getItem("listaPizze"));
    let nome = document.querySelector("#nome").value;
    let prezzo = document.querySelector("#prezzo").value;
    let ingrediente1 = document.querySelector("#ingrediente1").value;
    let ingrediente2 = document.querySelector("#ingrediente2").value;
    let ingrediente3 = document.querySelector("#ingrediente3").value;

    if(checkNome(nome) && checkprezzo(prezzo) && checkingrediente1(ingrediente1) && checkingrediente2(ingrediente2) && checkingrediente3(ingrediente3)){
        
        let ingredienti = [ingrediente1, ingrediente2, ingrediente3];

        let miaPizza = new Pizza(nome, prezzo, ingredienti);

        listaPizze.push(miaPizza);

        let listaPizzeJson = JSON.stringify(listaPizze);

        localStorage.setItem("listaPizze", listaPizzeJson);

        localStorage.getItem

    }else{
        event.preventDefault();
    }

}

formRegPizza.addEventListener("submit", registraPizza);

nome.addEventListener("blur", function(){
    let nome = document.querySelector("#nome").value;
    checkNome(nome);
})

prezzo.addEventListener("blur", function(){
    let prezzo = document.querySelector("#prezzo").value;
    checkprezzo(prezzo);
})

ingrediente1.addEventListener("blur", function(){
    let ingrediente1 = document.querySelector("#ingrediente1").value;
    checkingrediente1(ingrediente1);
})

ingrediente2.addEventListener("blur", function(){
    let ingrediente2 = document.querySelector("#ingrediente2").value;
    checkingrediente2(ingrediente2);
})

ingrediente3.addEventListener("blur", function(){
    let ingrediente3 = document.querySelector("#ingrediente3").value;
    checkingrediente3(ingrediente3);
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

function checkprezzo(prezzo){
    if(prezzo != ""){
        feedPrezzo.textContent = "";
        return true;
    }else{
        feedPrezzo.textContent = "Non hai inserito il prezzo";
        return false
    }
}


function checkingrediente1(ingrediente1){
    
    if(ingrediente1 != ""){
        feedIngrediente1.textContent = "";
        return true;
    }else{
        feedIngrediente1.textContent = "ingrediente1 non selezionato";
        return false;
    }

}

function checkingrediente2(ingrediente2){
    
    if(ingrediente2 != ""){
        feedIngrediente2.textContent = "";
        return true;
    }else{
        feedIngrediente2.textContent = "ingrediente2 non selezionato";
        return false;
    }
}

function checkingrediente3(ingrediente3){
    if(ingrediente3 != ""){
        feedIngrediente3.textContent = "";
        return true;
    }else{
        feedIngrediente3.textContent = "ingrediente3 non selezionato"
        return false;
    }
}