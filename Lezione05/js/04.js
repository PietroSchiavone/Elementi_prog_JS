const adesso = new Date();
console.log(adesso);

let giorno = adesso.getDate();
let mese = adesso.getMonth();
let anno = adesso.getFullYear();
let ora = adesso.getHours();
let minuti = adesso.getMinutes();
let secondi = adesso.getMinutes();

let giornoParlato = adesso.getDay();

console.log(giorno, mese, anno);

console.log(ora, minuti, secondi);

console.log(giornoParlato);

let data = moment().format('MMMM Do YYYY, h:mm:ss a')
console.log(data);

