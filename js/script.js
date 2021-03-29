//parte all click sul bottone
var bottoneGenera = document.getElementById('bottone-genera');
bottoneGenera.addEventListener('click', function() {
    //operazioni che partono al click
    
    //leggo nome e numero
    var userNameGenerator = document.getElementById('nome-utente-biglietto');
    var userName = userNameGenerator.value;
    console.log(userName);

    //leggo l'offerta scelta e faccio if
    var etàUtenteGenerator = document.getElementById( 'fascia-età' );
    var etàUtente = etàUtenteGenerator.value;
    console.log( etàUtente );
    var offertaUtente = 'Prezzo standard';
    if ( etàUtente == 'Minorenne' ){
        offertaUtente = 'Sconto minorenne'
    } else if ( etàUtente == 'Over 65' ){
        offertaUtente = 'Sconto over'
    }
    console.log(offertaUtente)

    //Carrozza

    //Codice CP

    //Costo Biglietto

    //Stampare
    document.getElementById('stampa-user-name').innerHTML = userName;
    document.getElementById('stampa-offerta-utente').innerHTML = offertaUtente;
});
console.log(bottoneGenera)