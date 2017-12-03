'use strict';
// The document.addEventListener replicates $(document).ready() for
// modern browsers (including IE9+), and is slightly more robust than `onload`.
// More here: http://stackoverflow.com/a/21814964/1028230
// suprimit document.addEvenListener; 2017-08-23

// input number

var inputNumbers = document.getElementById('inputNumbers');
// input button
var buttonEscriu = document.getElementById('buttonEscriu');
// div to place the name of the genius one by one each time
var divLletresGeni = document.getElementById('lletresGeni');
// div to place the table of the 72 genii names
var divLletresGenis72 = document.getElementById('lletresGenis72');
// array with the 72 Genii names of 5 letters each
// build whith the code in https://gist.github.com/jaumeb/04d74de20d7ea68fc5dc
var genis72 = ['והויה', 'יליאל', 'סיטאל', 'עלמיה', 'מהשיה', 'ללהאל', 'אכאיה', 'כהתאל', 'הזיאל', 'אלדיה', 'לאויה', 'ההעיה', 'יזלאל', 'מבהאל', 'הריאל', 'הקמיה', 'לאויה', 'כליאל', 'לוויה', 'פהליה', 'נלכאל', 'יייאל', 'מלהאל', 'חהויה', 'נתהיה', 'האאיה', 'ירתאל', 'שאהיה', 'רייאל', 'אומאל', 'לכבאל', 'ושריה', 'יחויה', 'להחיה', 'כוקיה', 'מנדאל', 'אניאל', 'חעמיה', 'רהעאל', 'ייזאל', 'הההאל', 'מיכאל', 'ווליה', 'ילהיה', 'סאליה', 'עריאל', 'עשליה', 'מיהאל', 'והואל', 'דניאל', 'החשיה', 'עממיה', 'ננאאל', 'ניתאל', 'מבהיה', 'פויאל', 'נממיה', 'יילאל', 'הרחאל', 'מצראל', 'ומבאל', 'יההאל', 'ענואל', 'מחיאל', 'דמביה', 'מנקאל', 'איעאל', 'חבויה', 'ראהאל', 'יבמיה', 'הייאל', 'מומיה'];

// puts cursor in the field for input the number
inputNumbers.focus();

// capture Return key
inputNumbers.addEventListener('keydown', function (e) {
  var key = e.keyCode || e.which; // valid in all browsers
  return key === 13 ? (buttonEscriu.click(), e.preventDefault()) : false;
  // preventDefault() is for Firefox in a form
});

/**
 * if there is a valid numbers in the input,
 * execute the function that write the letters.
 */
buttonEscriu.addEventListener('click', function () {
  var numG = inputNumbers.value;
  isValid(numG) ? writeLetters(numG) : window.alert("només números de l'1 al 72\n\n" + 'escriu 0 per a la taula completa');
});

/**
 * checks out if input is a valid number
 * @param {integer} numG el número del geni a mostrar
 *  des del 0, table amb tots el Genis, al 72, cada un dels Genis individualment
 */
function isValid(numG) {
  // only numbers of 1 or 2 digits
  var numericExpression = /^[0-9][0-9]?$/;
  // from 0 to 72
  // used !! to force a boolean, avoiding an undefined
  return !!(numG.match(numericExpression) && numG < 73);
}

/**
 * called by buttonEscriu.
 * write the letters of the Genii,
 * individually or the whole 72 in a table
 * @param {number} numG
 */
function writeLetters(numG) {
  parseInt(numG) === 0 ? lletres72G(numG) : lletres1G(numG);
}
/**
 * write the 5 letters of the Genie
 * @param {integer} numG
 */
function lletres1G(numG) {
  // the number of one digit always with a leading zero
  // to align the posible list of more than one name
  var paddedNumber = function (numG) {
    var nG = parseInt(numG, 10);
    return nG < 10 ? '&nbsp;&nbsp; ' + nG : nG;
  }(numG);
  divLletresGeni.innerHTML += '<span style="color: red;">\n              Geni ' + paddedNumber + ':\n              <div style="display: inline;\n                          float: right;\n                          text-align: right;\n                          font-size: 2em;\n                          color: #727272;" >\n              ' + genis72[numG - 1] + '\n            </div></span>\n            <br>';
}

/**
 * builds the table of 72 Genii
 */
function lletres72G() {
  var table72G = '\n        <table>\n          <caption>Els 72 Genis</caption>\n          <thead>\n            <tr>\n              <th>#</td> <th>Serafins</td>\n              <th>#</td> <th>Querubins</td>\n              <th>#</td> <th>Trons</td>\n              <th>#</td> <th>Dominacions</td>\n              <th>#</td> <th>Virtuts</td>\n              <th>#</td> <th>Potestats</td>\n              <th>#</td> <th>Principats</td>\n              <th>#</td> <th>Arc\xE0ngels</td>\n              <th>#</td> <th>\xC0ngels</td>\n            </tr>\n          </thead>\n          <tbody>'; // an order of angels in each column
  for (var i = 1; i < 9; i++) {
    // builds an 18 column table
    table72G += '\n            <tr>\n              <td> ' + i + '      </td> <td>' + genis72[i - 1] + '</td>\n              <td>' + (i + 8) + '</td> <td>' + genis72[i + 7] + '</td>\n              <td>' + (i + 16) + '</td> <td>' + genis72[i + 15] + '</td>\n              <td>' + (i + 24) + '</td> <td>' + genis72[i + 23] + '</td>\n              <td>' + (i + 32) + '</td> <td>' + genis72[i + 31] + '</td>\n              <td>' + (i + 40) + '</td> <td>' + genis72[i + 39] + '</td>\n              <td>' + (i + 48) + '</td> <td>' + genis72[i + 47] + '</td>\n              <td>' + (i + 56) + '</td> <td>' + genis72[i + 55] + '</td>\n              <td>' + (i + 64) + '</td> <td>' + genis72[i + 63] + '</td>\n            </tr>';
  }

  table72G += '\n          </tbody>\n        </table>';
  divLletresGenis72.innerHTML = table72G;
}