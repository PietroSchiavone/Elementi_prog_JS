function saluta() {
    console.log("ciao utente");    
}

//recupero il pulsante
let btn = document.getElementById("btn")

//con questo sistema aggancio la funzione all'evento onclick, la funzione non ha parentesi tonde

// btn.onclick = saluta
//METODO VECCHIO

//METODO CORRENTE

btn.addEventListener("click", saluta);

//possono essere usate funzioni anonime
btn.addEventListener("click", function(){
    saluta()
    console.log("Ciao Pietro");
    
});

