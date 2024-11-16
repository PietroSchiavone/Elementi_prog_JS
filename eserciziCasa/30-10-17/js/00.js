function salutaUtente() {
    // Chiedi il nome all'utente
    let nome = prompt("Inserisci il tuo nome:");
    
    // Se l'utente ha inserito un nome, mostra il saluto
    if (nome) {
        document.getElementById("saluto").innerHTML = "Ciao, " + nome + "!";
    }
}