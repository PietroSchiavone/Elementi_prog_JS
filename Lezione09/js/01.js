let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");



// Primo metodo

// function saluta() {
//     demo.innerHTML = "Ciao Dario";
// }

// btn.addEventListener("click", saluta);



// Secondo metodo

function saluta(nome) {
    demo.innerHTML = `Ciao ${nome}`;
}

// usare una funzione anonima mi permette di usare una funzione che necessita parametri
btn.addEventListener("click", function () {

    let nomeUtente = document.querySelector("#nomeUtente").value;
    saluta(nomeUtente);

})

btn.addEventListener("dbclick", function () {
    document.querySelector("#nomeUtente").value = "";
    demo.innerHTML = "";
})

demo.addEventListener("mouseover", function () {
    demo.classList.add("txtBlue");
})

demo.addEventListener("mouseout", function () {
    demo.classList.remove("txtBlue");
})

// eventi tastiera
let frase = document.querySelector("#frase");
let feed = document.querySelector("#feed");
let feed2 = document.querySelector("#feed2");

frase.addEventListener("input", () => {
    feed.textContent = "";
    feed.textContent += frase.value;
})

frase.addEventListener("keydown", function(event) {
    console.log(event);
    console.log(event.key);
    console.log(event.target);
    console.log(event.code);
    
    feed2.textContent = `Stai scrivendo il seguente carttere: ${event.key}`

    if (event.key == "Enter") {
        btn.click();
    }
})

document.addEventListener("keydown", function (event) {
    console.log(`stai cliccando ${event.key} nella pagina`);
    
})