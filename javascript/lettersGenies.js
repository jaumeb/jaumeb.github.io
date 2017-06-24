'use strict'
// The document.addEventListener replicates $(document).ready() for
// modern browsers (including IE9+), and is slightly more robust than `onload`.
// More here: http://stackoverflow.com/a/21814964/1028230
document.addEventListener('DOMContentLoaded', function () {
    const inputNumbers = document.getElementById('inputNumbers') // input number
    const buttonEscriu = document.getElementById('buttonEscriu') // input button
    // div to place the name of the genius one by one each time
    const divLletresGeni = document.getElementById('lletresGeni')
    // div to place the table of the 72 genii names
    const divLletresGenis72 = document.getElementById('lletresGenis72')
    // array with the 72 Genii names of 5 letters each
    // build whith the code in https://gist.github.com/jaumeb/04d74de20d7ea68fc5dc
    const genis72 = [
        'והויה', 'יליאל', 'סיטאל', 'עלמיה', 'מהשיה', 'ללהאל', 'אכאיה', 'כהתאל',
        'הזיאל', 'אלדיה', 'לאויה', 'ההעיה', 'יזלאל', 'מבהאל', 'הריאל', 'הקמיה',
        'לאויה', 'כליאל', 'לוויה', 'פהליה', 'נלכאל', 'יייאל', 'מלהאל', 'חהויה',
        'נתהיה', 'האאיה', 'ירתאל', 'שאהיה', 'רייאל', 'אומאל', 'לכבאל', 'ושריה',
        'יחויה', 'להחיה', 'כוקיה', 'מנדאל', 'אניאל', 'חעמיה', 'רהעאל', 'ייזאל',
        'הההאל', 'מיכאל', 'ווליה', 'ילהיה', 'סאליה', 'עריאל', 'עשליה', 'מיהאל',
        'והואל', 'דניאל', 'החשיה', 'עממיה', 'ננאאל', 'ניתאל', 'מבהיה', 'פויאל',
        'נממיה', 'יילאל', 'הרחאל', 'מצראל', 'ומבאל', 'יההאל', 'ענואל', 'מחיאל',
        'דמביה', 'מנקאל', 'איעאל', 'חבויה', 'ראהאל', 'יבמיה', 'הייאל', 'מומיה'
    ]

    // puts cursor in the field for input the number
    inputNumbers.focus()
    // capture Return key
    inputNumbers.addEventListener('keydown', function (e) {
        const key = e.keyCode || e.which // valid in all browsers
        if (key === 13) {
            buttonEscriu.click()
            e.preventDefault() // for Firefox in a form
        }
    })

    /**
     * checks out if input is a valid number
     * @param {integer} numG el número del geni a mostrar
     *  des del 0, table amb tots el Genis, al 72, cada un dels Genis individualment
     */
    function isValid(numG) {
        // only numbers of 1 or 2 digits
        const numericExpression = /^[0-9]{1,2}$/
        // from 0 to 72
        if (numG.match(numericExpression) && numG < 73) {
            return true
        } else {
            alert("només números de l'1 al 72\n\n" +
                "escriu 0 per a la taula completa")
            inputNumbers.focus()
        }
    }

    /**
     * if there is a valid numbers in the input, execute the function that write the letters.
     */
    buttonEscriu.addEventListener('click', function () {
        let numG = inputNumbers.value
        if (isValid(numG)) {
            writeLetters(numG)
        }
    })

    /**
     * write the letters of the Genii,
     * individually or the whole 72 in a table
     * @param {number} numG
     */
    function writeLetters(numG) {
        if (numG == 0) {
            lletres72G(numG)
        } else
        if (numG > 0) {
            lletres1G(numG)
        }
    }
    /**
     * write the 5 letters of the Genie
     * @param {integer} numG
     */
    function lletres1G(numG) {
        // deletes leading zeros in numG
        numG = numG.replace(/^[0]+/g, "")
        divLletresGeni.innerHTML += '<h1>Geni ' +
            numG + ': ' +
            genis72[numG - 1] +
            '</h1>'
    }

    /**
     * builds the table of 72 Genii
     */
    function lletres72G() {
        let table72G =
            '<table> \
                <caption>Els 72 Genis</caption> \
                <thead> \
                    <tr> \
                        <th>#</td> <th>Serafins</td> \
                        <th>#</td> <th>Querubins</td> \
                        <th>#</td> <th>Trons</td> \
                        <th>#</td> <th>Dominacions</td> \
                        <th>#</td> <th>Virtuts</td> \
                        <th>#</td> <th>Potestats</td> \
                        <th>#</td> <th>Principats</td> \
                        <th>#</td> <th>Arcàngels</td> \
                        <th>#</td> <th>Àngels</td> \
                    </tr> \
                </thead> \
                <tbody>' // an order of angels in each column
        for (let i = 1; i < 9; i++) {
            // builds an eight column table
            table72G +=
                    '<tr>\
                        <td>' + i + '       </td> <td>' + genis72[i - 1] + '</td> \
                        <td>' + (i + 8) + ' </td> <td>' + genis72[i + 7] + '</td> \
                        <td>' + (i + 16) + ' </td> <td>' + genis72[i + 15] + '</td> \
                        <td>' + (i + 24) + ' </td> <td>' + genis72[i + 23] + '</td> \
                        <td>' + (i + 32) + ' </td> <td>' + genis72[i + 31] + '</td> \
                        <td>' + (i + 40) + ' </td> <td>' + genis72[i + 39] + '</td> \
                        <td>' + (i + 48) + ' </td> <td>' + genis72[i + 47] + '</td> \
                        <td>' + (i + 56) + ' </td> <td>' + genis72[i + 55] + '</td> \
                        <td>' + (i + 64) + ' </td> <td>' + genis72[i + 63] + '</td> \
                    </tr>'
        }

        table72G +=
                '</tbody> \
            </table>'
        divLletresGenis72.innerHTML = table72G
    }


}) // DOMContentLoaded