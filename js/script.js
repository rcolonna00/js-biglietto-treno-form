//parte all click sul bottone
var bottoneGenera = document.getElementById('bottone-genera');
bottoneGenera.addEventListener('click', function() {
    //operazioni che partono al click
    
    //leggo nome
    var userNameGenerator = document.getElementById('nome-utente-biglietto');
    var userName = userNameGenerator.value;
    //console.log(userName); 

    //leggo l'offerta eta scelta e faccio if
    var etàUtenteGenerator = document.getElementById( 'fascia-età' );
    var etàUtente = etàUtenteGenerator.value;
    //console.log( etàUtente );
    var offertaUtente = 'Prezzo standard';
    if ( etàUtente == 'Minorenne' ){
        offertaUtente = 'Sconto minorenne 20%';
    } else if ( etàUtente == 'Over 65' ){
        offertaUtente = 'Sconto over 40%';
    }

    //leggo numero dei chilometri e calcolo prezzo
    var kmBigliettoGenerator = document.getElementById('km-biglietto');
    var kmBiglietto = parseInt(kmBigliettoGenerator.value);
    console.log(kmBiglietto);
    
    var prezzoBiglietto = 0.21 * kmBiglietto;
    console.log(prezzoBiglietto);
    //calcolo 20%
    var percentMinorenni = prezzoBiglietto * 20 / 100;
    console.log(percentMinorenni)
    //calcolo 40%
    var percentPensionati = prezzoBiglietto * 40 / 100;
    console.log(percentPensionati)

    if ( etàUtente == 'Minorenne' ){
        prezzoBiglietto = prezzoBiglietto - percentMinorenni;
        } else if ( etàUtente == 'Over 65' ) {
        prezzoBiglietto = prezzoBiglietto - percentPensionati;
    }
    console.log(prezzoBiglietto);

    //Carrozza
    var codiceCarrozza = getRandomNumber(90000, 100000);

    //Codice CP
    var codiceCp = getRandomNumber(1, 10);

    //Stampare
    document.getElementById( 'stampa-user-name' ).innerHTML = userName;
    document.getElementById( 'stampa-offerta-utente' ).innerHTML = offertaUtente;
    document.getElementById( 'stampa-codice-carrozza' ).innerHTML = codiceCarrozza;
    document.getElementById( 'stampa-codice-cp' ).innerHTML = codiceCp;
    document.getElementById( 'stampa-prezzo-biglietto' ).innerHTML = prezzoBiglietto;

    document.getElementById('biglietto-stampato').className = 'show';
});

//rimaniamo in ascolto sul bottone annulla
var bottoneAnnulla = document.getElementById('bottone-annulla');
bottoneAnnulla.addEventListener('click', function() {
    //nascondiamo il biglietto
    document.getElementById('biglietto-stampato').className = 'hidden';

    //svuotiamo gli input
    document.getElementById( 'nome-utente-biglietto' ).value = '';
    document.getElementById( 'km-biglietto' ).value = '';
    document.getElementById( 'fascia-età' ).value = '';

    //svuotiamo gli altri elementi
    document.getElementById( 'stampa-user-name' ).innerHTML = '';
    document.getElementById( 'stampa-offerta-utente' ).innerHTML = '';
    document.getElementById( 'stampa-codice-carrozza' ).innerHTML = '';
    document.getElementById( 'stampa-codice-cp' ).innerHTML = '';
    document.getElementById( 'stampa-prezzo-biglietto' ).innerHTML = '';

});

//funzioni

//generatore numero random con max escluso
function getRandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min) ) + min;
    return randomNumber
}

