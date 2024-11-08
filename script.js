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

    const telefono = document.getElementById("telefono").value;

    const check = document.getElementById("invalidCheck").checked;

    let fasciaetà = ""
    if (!nome || !cognome || !email || !km || !check){
        alert("Inserire tutti i dati");
        return;
    }
    let prezzoTotale = parseInt(km) * prezzoKm;
    
    if (età === "0-14"){
        prezzoTotale *= 0.5;
    }else if (età === "14-35"){
        prezzoTotale *= 0.8;
    }
    console.log(nome)
    bigliettoGenerato.innerHTML = `
        <h1 class="white mb-3 mt-3">Dettagli Ticket</h1>
        <div class="row mb-3">
            <div class="col-4 mb-3">
                <p>Nome: ${nome}</p>
            </div>
            <div class="col-4 mb-3">
                <p>Cognome: ${cognome}</p>
            </div>
            <div class="col-4 mb-3">
                <p>Età: ${età}</p>
            </div>
            <div class="col-5 mb-3">
                <p>Email: ${email}</p>
            </div>
            <div class="col-5 mb-3">
                <p>Recapito telefonico: ${telefono}</p>
            </div>
            <div class="col-2 mb-3">
                <p>Costo biglietto: ${prezzoTotale.toFixed(2)}$</p>
            </div>
            <div class="col-12 mb-3 ">
                <a href="javascript:history.go(0)" class="btn btn-light" role="button">Torna sulla pagina principale!</a>
            </div>
        </div>
        `
}

bottone.addEventListener("click", function(event){
    event.preventDefault();
    ticket();
});

