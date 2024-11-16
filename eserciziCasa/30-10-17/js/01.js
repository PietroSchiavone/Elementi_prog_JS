let a = 5;
let b = 6;
let c = 7;

let perimetro;
let area;

perimetro = a + b + c;
console.log("il  perimetro del triangolo è: " + perimetro + "m");

area = Math.sqrt((perimetro / 2 ) * ((perimetro / 2 ) - a) * ((perimetro / 2 ) - b) * ((perimetro / 2 ) - c));
console.log("l'area del triangolo è: " + area + "m^2")