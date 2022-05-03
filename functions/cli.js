#!/usr/bin/env node

/* Importa la funcion mdLinks.js */
const mdLinks = require('./index.js');
const process = require('process');
const stats = require ('./stats.js');
const validate = require ('./validate.js');
const { resolve } = require('path');


const imputRoute = process.argv[2];
const options = process.argv[3];

mdLinks(imputRoute, options).then ((links) => {
    console.log('linkkkkkks', links);
    // console.log('linksdeCLI', links);
    // console.log('links2', links);
//   stats(links);
//   validate(links);
});
