let msg = "";

let lvl = 0;

switch (lvl) {
    case 1:
        msg = "ciao, buona fortuna per il primo livello";
        break;
    case 2:
        msg = "adesso vediamo come te la cavi con il secondo livello";
        break;
    case 3:
        msg = "sei contro il boss finale";
        break;
    default:
        msg = "benvenuto nel gioco";
        break;
}

console.log(msg);

let pssw = "1234";

switch (pssw) {
    case "1234":
        msg = "benvenuto";
        break;
    case "123":
        msg = "manca qualcosa";
        break;
     case "12":
        msg = "sei a metà password";
        break;
    default:
        msg = "password errata";
        break;
}

console.log(msg);