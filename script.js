const prezzoKm = 0.21;

const bottone = document.querySelector("button");

const bigliettoGenerato=document.querySelector(".containerTicket");
console.log(bigliettoGenerato)
console.log(nome)
function ticket(){
    const nome = document.getElementById("nome").value;
    console.log(nome);

    const cognome = document.getElementById("cognome-utente").value;

    const età = document.getElementById("età").value;

    const email = document.getElementById("input-email").value;

    const km = document.getElementById("km-input").value;
    let prezzoTotale = parseInt(km) * prezzoKm;
    
    if (età === 1){
        prezzoTotale *= 0.5;
    }else if (età === 2){
        prezzoTotale *= 0.8;
    }
    console.log(nome)
    bigliettoGenerato.innerHTML = `
        <h2>Dettagli Ticket</h2>
        <p>${nome}</p>
        <p>${cognome}</p>
        <p>${email}</p>
        <p>${prezzoTotale.toFixed(2)}$</p>`
}

bottone.addEventListener("click", function(event){
    event.preventDefault();
    ticket();
});

