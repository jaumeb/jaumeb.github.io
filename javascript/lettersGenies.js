'use strict'
// The document.addEventListener replicates $(document).ready() for
// modern browsers (including IE9+), and is slightly more robust than `onload`.
// More here: http://stackoverflow.com/a/21814964/1028230
document.addEventListener('DOMContentLoaded', function () {
    var inputNumbers = document.getElementById('inputNumbers') // input number
    var buttonEscriu = document.getElementById('buttonEscriu') // input button
    var divLletresGeni = document.getElementById('lletresGeni') // div
    var divLletresGenis72 = document.getElementById('lletresGenis72') // div    

    if (inputNumbers && buttonEscriu) {
        // capture Return key
        inputNumbers.addEventListener('keydown', function(e) {
            var key = e.keyCode || e.which // valid in all browsers
            if (key === 13) {
                buttonEscriu.click()
                e.preventDefault() // for Firefox in a form
            }
        })
        buttonEscriu.addEventListener('click', function () {
	    var numG = inputNumbers.value
            if (isValid(numG)) {writeLetters(numG)}
        })
    }


    function isValid(numG) {
        var numericExpression = /^[0-9]{1,2}$/
        if (numG.match(numericExpression)) {
	    return true
        } else {
            alert("només números de l'1 al 72\n\n" + 
            "escriu 0 per a la taula completa")
            inputNumbers.focus()
        }
    }
    
    function writeLetters(numG) {
        if (numG == 0) {
            lletres72G(numG)
        } else
        if (numG > 0) {
            lletres1G(numG)
        }
    }
    
    function lletres1G(numG) {
        divLletresGeni.innerHTML += '<h1>Geni ' +
        numG + ': ' +
        genis[parseInt(numG - 1, 10)] +
        '</h1>'
    }
    
    function lletres72G(numG) {
        var table72G = '\
            <table> \
                <caption>Els 72 Genis</caption> \
                <thead> \
                <tr> \
                <th>#</td> \
                <th>lletres</td> \
                <th>#</td> \
                <th>lletres</td> \
                </tr> \
                </thead> \
                <tbody> '
        for (var i = 1; i < 37; i++) {
            // builds the two column table
            table72G += '\
                <tr> \
                <td>' + i + ' </td> \
                <td>' + genis[i - 1] + '</td> \
                <td>' + (i + 36) + ' </td> \
                <td>' + genis[i + 35] + '</td></tr> '
        }
        table72G += '\
                </tbody>\
            </table>'
        divLletresGenis72.innerHTML = table72G
    }
    
    
    // https://en.wikipedia.org/wiki/Shemhamphorasch
    // builds de names of the 72 genii of Kabbalah
    // the three constants below are each of the 72 letters
    // of Exodus, chapter 14, verses 19, 20, 21
    var EXODE1419 = 'ויסעמלאךהאלהיםההלךלפנימחנהישראלוילךמאחריהםויסעעמודהענןמפניהםויעמדמאחריהם'
    var EXODE1420 = 'ויבאביןמחנהמצריםוביןמחנהישראלויהיהענןוהחשךויאראתהלילהולאקרבזהאלזהכלהלילה'
    var EXODE1421 = 'ויטמשהאתידועלהיםויולךיהוהאתהיםברוחקדיםעזהכלהלילהוישםאתהיםלחרבהויבקעוהמים'
    // F1 contains the number of the genie whose name is finished in יה
    var F1 = [1, 4, 5, 7, 10, 11, 12, 16, 17, 19, 20, 24, 25, 26, 28, 32, 33,
    34, 35, 38, 43, 44, 45, 47, 51, 52, 55, 57, 65, 68, 70, 72]
    // array that must contain the letters of the genii
    var genis = []
    // finalsNo() receives a letter that if it's a 'final',
    // it's changed to the 'regular'
    function finalsNo (fno) {
        // busca el valor de la lletra final
        var lletresFinals = { 'ך': 'כ' ,'ם': 'מ' ,'ן': 'נ' ,'ף': 'פ' , 'ץ': 'צ' }[fno]
        // si fno és una lletra final
        if (lletresFinals) {
            return lletresFinals
        } else {
            return fno
        }
    }
    
    // grab each letter of the verse of exodus
    // which will build the name of the genie,
    // add the suffix אל / יה that corresponds to.
    ;
    (function geniNom () {
        var finals // to save the final letters
        var f1ih = 0 // var for the following 'for'
        for (var i = 0; i < 72; i++) {
            var lletra1 = finalsNo(EXODE1419[i])
            var lletra2 = finalsNo(EXODE1420[EXODE1420.length - (i + 1)])
            var lletra3 = finalsNo(EXODE1421[i])
            // If i + 1 is equal to the number of the genius in f1
            if (i + 1 === F1[f1ih]) {
                finals = 'יה'
                f1ih++ // increase the value to point to the next index of F1
            } else {
                finals = 'אל'
            }
            // saves the letters of the genius in the array genis
            genis[i] = lletra1 + lletra2 + lletra3 + finals
        }
    })(); // fills the array genis

}) // DOMContentLoaded
