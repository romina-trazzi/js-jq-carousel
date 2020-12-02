/*==================================================
=            CODICE JS JQUERY CAROSELLO            =
====================================================*/

/* Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
Inoltre per scorrere le immagini permettere anche l'uso delle frecce sinistra e destra della tastiera
Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l'immagine attuale da visualizzare nello slider */

// Ready document per caricare l'HTML prima dello script JS\JQ
$(function () {

    // Creo due variabili generali per selezionare i div avanti e indietro
    var next = $(".next");
    var prev = $(".prev"); 

    // Creo le variabili generali delle immagini e dei circle legando gli elementi CSS a JQuery
    var primaImmagine = $("img.first");
    var ultimaImmagine = $("img.last");

    var ultimoCircle = $("i.last");
    var primoCircle = $("i.first");
   
    // console.log(primaImmagine, ultimaImmagine, primoCircle, ultimoCircle);

    next.click(function () {
        // console.log("cliccato next");        
        avanti();
    });

    prev.click(function () {
        // console.log("cliccato prev");
        indietro();

    });

    // Creo una funzione per mandare avanti lo slider + il pallino all'Evento click
    function avanti () {

        // Per il riavvio dello slider facciamo lo scambio prima-ultima attivaImmagine
        if ($("img.active").hasClass("last")) {
            ultimaImmagine.removeClass("active");
            primaImmagine.addClass("active");
            ultimoCircle.removeClass("active");
            primoCircle.addClass("active");
        // Spostiamo la classe active da un elemento all'altro
        } else {
            $("img.active").next().addClass("active");
            $("img.active").prev(".active").removeClass("active");
            $("i.active").next().addClass("active");
            $("i.active").prev(".active").removeClass("active");
        }

    }

    // Creo una funzione per mandare "indietro" lo slider + il pallino all'evento Click
    function indietro() {

        // Per il riavvio dello slider facciamo lo scambio prima-ultima attivaImmagine
        if ($("img.active").hasClass("first")) {
            primaImmagine.removeClass("active");
            ultimaImmagine.addClass("active");
            primoCircle.removeClass("active");
            ultimoCircle.addClass("active");
        // Spostiamo la classe active da un elemento all'altro
        } else {
            $("img.active").prev().addClass("active");
            $("img.active").next(".active").removeClass("active");
            $("i.active").prev().addClass("active");
            $("i.active").next(".active").removeClass("active");
        }

    }
        
});