let listaFilms = document.querySelectorAll("li");

listaFilms.forEach (li => {
    filmLink = aggiungiTrattini(li.textContent);
    li.innerHTML = '<a href="https://it.wikipedia.org/wiki/' + filmLink + '" target="_blank" > <div class = "foto"> <img src="img/' + filmLink + '.webp" alt=""> </div> <br>' + li.textContent + '</a>'
})


function aggiungiTrattini(film) {
    for (let ch = 0; ch < film.length; ch++) {
        if (ch == " ") {
            film[ch] = "_";
        }
        
    }

    return film;
}


let head = document.querySelector("head")


head.innerHTML += "<style> body {font-family: 'Helvetica';} .foto {width: 10rem;} img {width: 100%;} a {text-decoration: none; color: black;} ul {list-style-type: none;} li {margin-bottom: 2rem;} </style>"