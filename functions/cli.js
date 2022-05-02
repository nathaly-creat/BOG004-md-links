#!/usr/bin/env node

/* Importa la funcion mdLinks.js */
const mdLinks = require('./index.js');
const process = require('process');
const stats = require ('./stats.js');
const validate = require ('./validate.js');


/*Definir metodos de node para definir el argumento de la función*/

const imputRoute = process.argv[2];
const options = process.argv[3];

// console.log('hola');
mdLinks(imputRoute).then ((links) => {
    // console.log('links2', links);
    // stats(links);
    // validate(links);
});

// .then(response => console.log('response', response))
// .catch(error => console.log('error', error));


// aqui debo construir la funcion validate
// cosntruir condicional ara los csos de si exsite o no en la path validate y el siguiente es de stats
