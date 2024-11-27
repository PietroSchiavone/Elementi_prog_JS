let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");

function recuperaDati() {
    const URLEndpoint = "https://dummyjson.com/users"

    fetch(URLEndpoint)
    .then(response => {
        return response.json();

    })
    .then(data => {

        utenti = data.users;

        utenti.forEach(utente => {
            // demo.innerHTML += `<li> ${utente.firstName} ${utente.lastName} <img src='${utente.image}'></li>`
            demo.appendChild(creaCard(utente))
        });
    })
}

function creaCard(utente) {
    let card = document.createElement("div")
    card.innerHTML = `<li> ${utente.firstName} ${utente.lastName} <img src='${utente.image}'></li>`

    let btnUser = document.createElement("button");
    btnUser.innerHTML = "Mostra Info";

    let infoAccessorie = utente.age + " " + utente.phone + " " + utente.role;
    btnUser.addEventListener("click", function () {
        mostraInfo(infoAccessorie)
    })

    card.appendChild(btnUser);

    return card;
}

function mostraInfo(info) {
    console.log(info);
    
}

btn.addEventListener("click", recuperaDati);