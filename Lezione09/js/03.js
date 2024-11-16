let nome = document.querySelector("#nome");
let cognome = document.querySelector("#cognome");
let mioForm = document.querySelector("#mioForm");

mioForm.addEventListener("submit", function (event) {

    if (nome.value == "" || cognome.value == "") {
        // event.preventDefault();
        event.stopPropagation();
        console.log("stai dimenticando qualcosa");
                
    } else {
        console.log(`sto registrando ${nome.valore} ${cognome.valore}`);
        
    }
})

mioForm.addEventListener("reset", function () {
    console.log("Hai pulito tutti icampi");
    
})