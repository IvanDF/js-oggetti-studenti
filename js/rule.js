/**
 * 
 * Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare attraverso il for..in tutte le proprietà.
 * 
 * Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
 * 
 * Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.
 * 
 */

$(document).ready(function (){
    
    //  1 - Studente

    var studente = {
        nome: 'Ivan',
        cognome: 'Del Fatti',
        eta: '23',
    };
    
    for ( var key in studente ) {
        console.log( 'Esercizio 1: ', studente[key]);
    }

    // 2 - Array di oggetti di studenti

    var studenti = [
        {
            nome: 'Luca',
            cognome: 'Bianchi',
            eta: '43',
        },
        {
            nome: 'Brambilla',
            cognome: 'Fumagalli',
            eta: '32',
        },
        {
            nome: 'Marco',
            cognome: 'Girola',
            eta: '28',
        },
        {
            nome: 'Ajeje',
            cognome: 'Brazorf',
            eta: '55',
        },
        {
            nome: 'Luca',
            cognome: 'Bianchi',
            eta: '43',
        },
        {
            nome: 'Brambilla',
            cognome: 'Fumagalli',
            eta: '32',
        },
        {
            nome: 'Marco',
            cognome: 'Girola',
            eta: '28',
        },
        {
            nome: 'Ajeje',
            cognome: 'Brazorf',
            eta: '55',
        },
        {
            nome: 'Luca',
            cognome: 'Bianchi',
            eta: '43',
        },
        {
            nome: 'Brambilla',
            cognome: 'Fumagalli',
            eta: '32',
        },
        {
            nome: 'Marco',
            cognome: 'Girola',
            eta: '28',
        },
        {
            nome: 'Ajeje',
            cognome: 'Brazorf',
            eta: '55',
        },
    ]

    // PROVA CON HANDLEBARS
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    for ( var i = 0; i < studenti.length; i++ ) {
        console.log('Esercizio 2: ', studenti[i].nome, studenti[i].cognome);

        // INSERIMENTO LISTA PREDEFINITA NEL HTML
        var data = {
            cognome: studenti[i].cognome,
            nome: studenti[i].nome,
            eta: studenti[i].eta,
        };
    
        var html = template(data);
        $('.studenti').append(html);
    }

    // 3 - Inserire il nuovo studente nella lista di oggetti precedente
    $('.registrati').click(function(){
        var nomeUtente = prompt('Inserisci il tuo Nome')
        var cognomeUtente = prompt('Inserisci il tuo Cognome')
        var etaUtente = prompt('Quanti anni hai')
        
        studenti.push({nome:nomeUtente, cognome:cognomeUtente, eta:etaUtente})
    
        console.log( 'Esercizio 3', studenti);
    })

}); // END DOC. READY

