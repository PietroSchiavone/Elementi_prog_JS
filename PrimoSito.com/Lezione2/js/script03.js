for (let i = 0; i < 10; i++){

    if (i % 3 == 0) {
        console.log(i + ", eccolo")
    } else {
        console.log(i + " non è multiplo di 3")
    }
}

let studenti = ["anna", "marco", "luisa", "pippo", "federica"]

//voglio leggere i valori del mio array

for (let i = 0; i < studenti.length; i++) {
    console.log("benvenuto/a " + studenti[i])
}

//tutte le volte che devo iterare gli lelementi di un array posso usare foreach

studenti.forEach(studente => {
    console.log(studente)
})

//stampa una lista di numeri da 1 a 100, quando incontri un multiplo di 3 stampa zoom, quando incontri un multiplo di 5 stampa broom, pe i multipli di enrtambi stampa zoombroom

for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0 ) {
        console.log(i + " zoomwroom")
    } else if (i % 3 == 0) {
        console.log(i + " zoom")
    } else if (i % 5 == 0) {
        console.log(i + " wroom")
    } else {
        console.log(i)
    }
}