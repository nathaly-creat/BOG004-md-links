/* Importa la funcion mdLinks.js */
const mdLinks = require('./functions/index.js');

/*Definir metodos de node para definir el argumento de la función*/
const process = require('process');
const inputRoute = process.argv[2];


mdLinks(inputRoute);