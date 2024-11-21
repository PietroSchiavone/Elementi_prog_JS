// leggo le informazioni del local storage

// let pizzeLS = localStorage.getItem("listaPizze");

// console.log(pizzeLS);

// let pizzeLSOBJ = JSON.parse(pizzeLS);

// console.log(pizzeLSOBJ);

let pizze = JSON.parse(localStorage.getItem("listaPizze"));
console.log(pizze);

let demo = document.querySelector("#demo");
let stampa = document.querySelector("#stampa");

function stampaMenu() {
    pizze.forEach(pizza => {
        demo.innerHTML += `<li> ${pizza.nome} - ${pizza.prezzo} € - ${pizza.ingredienti}`
    });
}

stampa.addEventListener("click", stampaMenu);