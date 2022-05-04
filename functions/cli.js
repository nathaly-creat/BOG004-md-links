#!/usr/bin/env node

/* Importa la funcion mdLinks.js */
const mdLinks = require('./index.js');
const process = require('process');
const stats = require ('./stats.js');
const chalk = require('chalk');
// const validate = require ('./validate.js');
const { resolve } = require('path');


const imputRoute = process.argv[2];
// const options = process.argv[3];
const options = { validate: process.argv.includes('--v') || process.argv.includes('--validate')}

mdLinks(imputRoute, options).then ((links) => {
    console.log(chalk.blue(chalk.blue.underline.bold('COMAND LINE INTERFACE' + '(CLI'+ '✅)'), '\n'));
    console.log(links);
    // console.log(chalk.blue(chalk.blue.underline.bold('STATS' + '(STATS'+ '✅)'), '\n'));
    // stats(links);
});


