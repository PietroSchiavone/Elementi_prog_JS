let lisSpesa = document.querySelectorAll("#listaSpesa li");

lisSpesa.forEach(li => {
    li.setAttribute("class", ".txtPurple");
})

// voglio leggere il valore di un attributo
let h1 = document.querySelector("h1");
console.log(h1.getAttribute("class"));

let aIL = document.querySelector("#linkIL");
aIL.setAttribute("href", "https://immaginazioneelavoro.it/");

// per aggiungere una classe
h1.classList.add("txtUnder");

// per rimuovere una classe
h1.classList.remove("txtRed");

// Dark Mode
let btnDM = document.querySelector("#btnDM");

function applicaDM() {
    let body = document.querySelector("body");
    
    body.classList.toggle("dark");
}

btnDM.addEventListener("click", applicaDM);