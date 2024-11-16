let punteggio = 45;
let messaggio = "";

if (punteggio >= 50) {
    messaggio = "Complimenti hai passato l livello";
}else{
    messaggio = "Mi spiace non hai passato il livello"
}

 console.log(messaggio)

 //giochino: per superare il livello i punti devono essere magggiori di 50 e i puntiSkill maggiori di 40
 
 let punti = 13;
 let puntiSkill = 8;


//  if (punti >= 50 && puntiSkill >= 40) {
//     console.log("bravo hai superato il livello")
//  }else{
//     console.log("Mi spiace non hai superato il livello")
//  }

if (punti >= 50 && puntiSkill >= 40) {
    console.log("bravo hai superato il livello")
 }else if (punti >= 50 && puntiSkill < 40) {
    console.log("Mi spiace non hai superato il livello perchè i puntiSkill non sono sufficienti")
 }else if (punti < 50 && puntiSkill >= 40) {
    console.log("Mi spiace non hai superato il livello perchè i punti non sono sufficienti")
 }else{
    console.log("Mi spiace non hai superato il livello, hai fatto schifo")
 }

 if (punti >= 50 || puntiSkill >= 40) {
    console.log("bravo hai superato il livello")
 }else{
    console.log("Mi spiace non hai superato il livello, hai fatto schifo")
 }
