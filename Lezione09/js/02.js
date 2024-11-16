let nome = document.querySelector("#nome");
let cognome = document.querySelector("#cognome");
let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");

// Focus
nome.addEventListener("focus", function (event) {
    console.log(`Mi trovo nel campo ${event.target.id}`);
    this.setAttribute("style", "")
    demo.textContent = "Ricorda che non puoi usare numeri"
})

// Blur
nome.addEventListener("blur", function (event) {
    console.log(`Sei uscito dal campo ${this.getAttribute("id")}`);
    demo.textContent = "";
    if (this.value == "") {
        demo.textContent = "Guarda che non hai inserito nulla"
        this.setAttribute("style", "border-color: red;")
    }
})

cognome.addEventListener("focus", function (event) {
    if (this.value.length < 8 ) {
        this.setAttribute("style", "border: 3px solid red")
        }
})

cognome.addEventListener("input", function (event) {
    if (this.value.length >= 8 ) {
        this.removeAttribute("style");
    }else{
        this.setAttribute("style", "border: 3px solid red")
    }
})