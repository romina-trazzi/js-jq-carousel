/*==================================================
=            CODICE JS JQUERY CAROSELLO            =
====================================================*/

// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// Inoltre per scorrere le immagini permettere anche l'uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l'immagine attuale da visualizzare nello slider

// Ready document per caricare l'HTML prima dello script JS\JQ
$(function() {

    // Creo due variabili generali per selezionare i div avanti e indietro
    var next = $(".next");
    var prev = $(".prev");

    // Creo le variabili generali delle immagini e dei circle legando gli elementi CSS a JQuery
    var primaImmagine = $("img.first");
    var attivaImmagine = $("img.active");
    var primoCircle = $(".fa-circle.first");
    var attivoCircle = $(".fa-circle.active");

    // console.log(primaImmagine, attivaImmagine, primoCircle, attivoCircle);


    // Creo una funzione per mandare avanti lo slider + il pallino all'Evento click
    next.click(function() {
    // console.log("cliccato next");

        // Togliamo la classe active all'immagine e al pallino attivi
        attivaImmagine.removeClass("active");
        attivoCircle.removeClass("active");

        // Aggiungiamo la classe active all'immagine e al pallino successivi
        attivaImmagine.next("img").addClass("active");
        attivoCircle.next(".fa-circle").addClass("active");

    });



    // Creo una funzione per mandare "indietro" lo slider + il pallino all'evento Click
    prev.click(function () {
    console.log("cliccato prev");
        
        });

});