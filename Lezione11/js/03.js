let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");
let bottone = document.querySelector("#bottone");

function recuperaDati() {
    
    const URLEndpoint = "https://dummyjson.com/comments"

    fetch(URLEndpoint)
    .then(response => {
        return response.json();

    })
    .then(data => {

        commenti = data.comments;
        console.log(commenti);
        bottone.innerHTML = "Clicca sui nomi per visualizzare il commento";

        

        commenti.forEach(commento => {
            
            demo.appendChild(creaCard(commento))
            console.log(commento);
            
        });
    })
}

function creaCard(commento) {
    let card = document.createElement("div")
    card.innerHTML = `<li>${commento.user.fullName}</li><br>`;

    // let btnCommento = document.createElement("button");
    // btnCommento.textContent = "Mostra Commento";

    let infoAccessorie = commento.body;
    card.addEventListener("click", function () {
        card.innerHTML = `<li>${commento.user.fullName}</li> ${infoAccessorie}`;
    })  

    // card.appendChild(btnCommento);

    return card;
}