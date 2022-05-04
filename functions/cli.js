#!/usr/bin/env node

/* Importa la funcion mdLinks.js */
const mdLinks = require("./index.js");
const process = require("process");
const chalk = require("chalk");
const figlet = require('figlet');
console.log(chalk.yellow(figlet.textSync('mdLinks', { horizontalLayout: 'full' })));

const imputRoute = process.argv[2];
const argsValidator = process.argv[3];
let args = process.argv;

const mixOptionsBoolean =
  (args.includes("--stats") || args.includes("--s")) &&
  (args.includes("--validate") || args.includes("--v"));

if (args.includes("--validate") || args.includes("--v")) {
  console.log(chalk.bgYellow(chalk.black("Reporte.")));
  validateLinks();
} else if (args.includes("--stats") || args.includes("--s")) {
  console.log(chalk.bgYellow(chalk.black("Reporte.")));
  stats();
} else if (mixOptionsBoolean) {
  console.log(chalk.bgYellow(chalk.black("Reporte.")));
  brokenLinks();
} else if (args.includes("--help") || args.includes("--h")) {
//   console.log(chalk.blue("Ayuda."));
  console.log('Ingresar CLI:', chalk.bgYellowBright("md-links [ruta] [opciones]", '\n'));
    console.log(chalk.bgWhite('[ruta] y [opciones] se ingresa sin [].') , chalk.bgYellowBright('\n'));
  help();
} else if (argsValidator === undefined) {
  console.log(chalk.bgYellow(chalk.black("Reporte.")));
  validateFalse();
}

function validateLinks() {
  mdLinks(imputRoute, { validate: true })
    .then((links) => {
      if (mixOptionsBoolean) {
        brokenLinks();
      } else if (!mixOptionsBoolean) {
        console.log(links);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function validateFalse() {
  mdLinks(imputRoute)
    .then((links) => {
      console.log(links);
    })
    .catch((err) => {
      console.log(err);
    });
}

function stats() {
  mdLinks(imputRoute, { validate: false })
    .then((links) => {
      if (mixOptionsBoolean) {
        brokenLinks();
      } else {
        const totalLinks = links.map((link) => link.href);
        const totalLinksLength = totalLinks.length;
        const uniqueLinks = [...new Set(totalLinks)];
        const uniqueLinksLength = uniqueLinks.length;
        
        const printStats = {Total: totalLinksLength, Unique: uniqueLinksLength};
        
        console.table(printStats);
        // console.table({totalLinksLength, uniqueLinksLength});
        
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function brokenLinks() {
  mdLinks(imputRoute, mixOptionsBoolean)
    .then((links) => {
      const totalLinks = links.map((link) => link.href);
      const totalLinksLength = totalLinks.length;
      const uniqueLinks = [...new Set(totalLinks)];
      const uniqueLinksLength = uniqueLinks.length;
      const brokenLinks = links.filter((link) => link.str !== "OK");
      const brokenLinksLength = brokenLinks.length;
        const brokenList = {
            Total: totalLinksLength,
            Unique: uniqueLinksLength,
            Broken: brokenLinksLength,
        }
      console.table(brokenList);
    
    })
    .catch((err) => {
      console.log(err);
    });
}

function help () {
    console.log(chalk.blueBright.bold('🔷', chalk.white.bold('[ruta]:'), chalk.bgYellowBright('\n'), chalk.white('Puede ingresar ruta absoluta o relativa.')));
    
    const help = chalk.white.bold(`
    
╭─────────────────────
│    Tus opciones son las siguientes:
╰─────────────────────


↪️  --sin opciones:
       - Se muestra un reporte de todos los enlaces de un archivo markdown. \t \n
↪️  --validate o --v:
       - Validará cada link dentro del archivo.
       - Retornará un reporte con los links validados. 
       - El reporte arrojara: Mensaje (str) de OK o FAIL, estado del link (HTTP).\t \n

Estadísticas del archivo markdown: \n
↪️  --stats o --s : 
       - Obtendrá el total de links dentro del archivo.
       - Genera un reporte de la cantidad de links únicos y totales dentro del archivo markdown.\t \n
↪️  --validate --stats o --v --s:
       - Validará cada link dentro del archivo.
       - Podras tener toda la informacion sobre las estadísticas --stats y los links rotos dentro del archivo. \t \n
`);
console.log(help);
//   console.log(chalk.blue("Ayuda."));
//   console.log(chalk.blue("mdLinks [ruta] [opciones]"));
//   console.log(chalk.blue("[ruta]"));
//   console.log(chalk.blue("Ruta absoluta o relativa del archivo o directorio que contiene los archivos .md."));
//   console.log(chalk.blue("[opciones]"));
//   console.log(chalk.blue("--stats, --s"));
//   console.log(chalk.blue("Muestra el reporte de estadísticas."));
//   console.log(chalk.blue("--validate, --v"));
//   console.log(chalk.blue("Muestra el reporte de validación."));
//   console.log(chalk.blue("--help, --h"));
//   console.log(chalk.blue("Muestra la ayuda."));
}

// const help = chalk.magenta.bold(`
// ╭─────────────────────❀
// │    Tus opciones son las siguientes:
// ╰─────────────────────❀

// ▷ --validate o -v:
//        -validara cada link dentro del archivo.
//        -obtiene ruta del archivo href, 
//        -mensaje de OK o FAIL, estado del link y texto.\t
// ▷ --stats o -s : 
//        -para obtener el total de links 
//        -cantidad de links únicos.
//        -links rotos\t
// ▷ --validate --stats :
//        - podras tener toda la informacion junta.
// `);
// console.log(help);
