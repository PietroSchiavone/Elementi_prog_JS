let num1 = 3;
let num2 = 3;

let valutazione = (num1 == num2);
console.log(valutazione);

let num3 = "4";
let num4 = 4;
console.log(num3 == num4); //true
console.log(num3 === num4); //false

let num5 = 5;
let num6 = 6;
console.log(num5 != num6); //true
console.log(num5 > num6); //false
console.log(num5 < num6); //true
console.log(num5 >= num6); //false
console.log(num5 <= num6); //true

//operatori di confronto logico
let num7 = 10;
let num8 = 20;

let num9 = 100;
let num10 = 200;

let confronto = (num7 >= num8) && (num9 <= num10);
console.log(confronto);


//Giochino: per superare il livello il tuo punteggioSkill deve essere maggiori di 50 e i punti devono essere maggiori di 70

let punti = 80;
let puntiSkill = 67;

let valutazione2 = (punti >= 70) && (puntiSkill >= 50);

console.log("hai superato il livello? " + valutazione2);

//or logico
let valutazione3 = (punti >= 70) || (puntiSkill >= 50);
console.log("hai superato il secondo livello? " + valutazione3);
