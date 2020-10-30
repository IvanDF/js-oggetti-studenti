/**
 * 
 * Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare attraverso il for..in tutte le proprietà.
 * 
 * Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
 * 
 * Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.
 * 
 */

//  1 - Studente
$(document).ready(function (){
    
    var studente = {
        nome: 'Ivan',
        cognome: 'Del Fatti',
        eta: '23',
    };
    
    for ( var key in studente ) {
        console.log(studente[key]);
    }

}); // END DOC. READY