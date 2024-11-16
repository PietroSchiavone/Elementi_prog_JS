// let ul = document.querySelector("#miaLista");

// let li = document.createElement("li");
// li.textContent = "Dario";
// li.setAttribute("class", "txtBlue");
// li.addEventListener("click", function () {
//     li.classList.toggle("txtBlue");
// })

// ul.appendChild(li);

// let persone = ["laura", "Anna", "Marco", "Paolo"];

// persone.forEach(persona => {
//     let li= document.createElement("li");
//     li.textContent = persona;
//     li.setAttribute("clas", "txtBlue")

//     li.addEventListener("click", function () {
//         togliColore(this);
//     })

//     li.addEventListener("dblclick", function () {
//         ul.removeChild(this)
//     })

//     ul.appendChild(li);
// })



// function togliColore(li) {
//     li.classList.toggle("txtBlue");
// }

let ul = document.querySelector("#miaLista");
let btnAdd = document.querySelector("#btnAdd");
let inputNome = document.querySelector("#nomeStudente");

function aggiungiStudente() {
    let nomeStudente = document.querySelector("#nomeStudente").value;    
    ul.prepend(creali(nomeStudente));

    document.querySelector("#nomeStudente").value = "";     
}

function creali(nome) {
    let li = document.createElement("li");
    li.textContent = nome;

    li.addEventListener("click", function () {
        this.classList.toggle("txtBarrato")
    })

    let button = document.createElement("button");
    button.textContent = " X ";

    button.addEventListener("click", function () {
        ul.removeChild(li);
    })

    let buttonMod = document.createElement("button");
    buttonMod.textContent = " M ";
    buttonMod.addEventListener("click", function () {
        let testo = li.firstChild.textContent;
        inputNome.value = testo;
        button.click();
    })

    li.appendChild(button)
    li.appendChild(buttonMod);
    return li;    
}

btnAdd.addEventListener("click", aggiungiStudente);

inputNome.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        aggiungiStudente();
    }
})