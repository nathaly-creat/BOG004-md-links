// module.exports = mdLinks = (imputRoute) => {
const path = require('path');
const fs = require('fs');
const process = require('process');
const { Console } = require('console');
const fsp = require("fs").promises;
const axios = require('axios');

const imputRoute = process.argv[2];


const pathAbsolute = (imputimputRoute) => path.isAbsolute(imputimputRoute) ? imputimputRoute : path.resolve(imputimputRoute);
const isFileMd = (imputimputRoute) => path.extname(imputimputRoute) === ".md";
const isDirectory = (imputimputRoute) => fs.lstatSync(imputimputRoute).isDirectory();
const isFile = (imputimputRoute) => fs.lstat(imputimputRoute).isFile();
// console.log('isFile', isFile(imputRoute));
console.log('ABSOLIUTA', pathAbsolute(imputRoute));

// IDENTIFICAR TIPO ENTRADA Y EJECUTAR FUNCIONES DE CONTENIDO DE LA RUTA.
fs.stat(imputRoute, (err, stats) => {
if (err) {
  console.log('No es una ruta válida');
  return;
} else if (stats.isFile()) {
  if (isFileMd(imputRoute)) {
    console.log('Es un archivo .md', isFileMd(imputRoute));
    getLinks(imputRoute);
  } else {  
    console.log('No es un archivo .md,'+' intente con una ruta válida');
  }
  
  const file = fs.readFileSync(imputRoute, 'utf8');
  console.log(file);
  return;
} else if (stats.isDirectory()) {
  console.log('es un directorio', true);
  const filesDirectory = fs.readdirSync(imputRoute); /*conectar en esta línea la funcion recursiva*/
  // console.log('arrayVisto', files);
  if (filesDirectory.length === 0) {
    console.log('No hay archivos .md en el directorio');
  } else {
    console.log('este es el contenido del directorio:', filesDirectory);
    if (filesDirectory.length > 0) {
    console.log('archivos recursivos TOTALES', getFiles(imputRoute));
    }
  } 
  return;
  };

});

/*MODELO 1 FUNCION DE RECURSIVIDAD*/

// EXTRAER ARCHIVOS DE UN DIRECTORIO con accion recursividad.
const getFiles = (pathAbsolute) => {
    let arrFiles = [];
    console.log('mdEncontrados', arrFiles); // array vacio
    const files = fs.readdirSync(pathAbsolute);
    files.forEach(file => {
        const filePath = path.join(pathAbsolute, file);
        if (isFileMd(filePath)) {
            console.log('pushArchivos', arrFiles.push(filePath));
        } else if (isDirectory(filePath)) {
          arrFiles = arrFiles.concat(getFiles(filePath));
        }
        else {
          console.log('Fin del programa');
        }
    });
   
    console.log('filesFilterRecursividad', files.filter(file => isFileMd(file)));
    return arrFiles.push(files.filter(file => isFileMd(file)));
};

/* ---------- Obtener links archivo .md ---------- */
const getLinks = (imputRoute) => new Promise((resolve, reject) => {
  let fileLinks = imputRoute;

  fs.readFile(fileLinks, 'utf-8', (error, data) => {
    const regularExpression = /\[([^\[]+)\](\(.*\))/g;
    const internalLinks = data.match(regularExpression);
    console.log('links encontrados INTERNAL: ', internalLinks)

    fileLinks = pathAbsolute(imputRoute); 
    console.log('nueva', fileLinks); 

    if (error) {
      reject(new Error(`${error.code}, verifica la ruta del archivo`));
    } else if (data.match(regularExpression) === null) {
      const links = data.match(regularExpression);
      resolve(links);
      const arrayLinks = links.map(link => link.replace(/\[|\]|\(|\)/g, ''));
      console.log('links encontrados: ', links); /*array de links VALIDAR*/ 
      console.log('AQUIIII links encontrados: ', arrayLinks); /*array de links VALIDAR*/
      /*Crear la estructura del array de Links*/
      const arrayLinksStructure = arrayLinks.map(link => {
        const destructure = link.split(' ');
        const linkName = destructure[0].replace(/\[|\]/g, '').substring(0, destructure[50].length - 1);
        const linkUrl = destructure[1].replace(/\(|\)/g, '');

        return {
          name: linkName,
          url: linkUrl
        };
      });
      console.log('arrayLinksStructure', arrayLinksStructure);

        // const linkStructure = {
        //   text: link,
        //   href: `${internalLinks}${link}`
        //   fileLinks: fileLinks,
        // };
        // // return linkStructure;
        // console.log('links estructura Array: ', linkStructure); /*array de links VALIDAR*/
    // else if (data.match(regularExpression)) {
    //   const arr = data.match(regularExpression);

    //   const links = arr.map((item) => {
    //     const divideItem = item.split('](');
    //     const text = divideItem[0].replace('[', ''); // .substring(0, 50); ¿README?
    //     const href = divideItem[1].replace(')', '');
    //     return ({ href, text, fileLinks });
    //   });

    //   const getLinksWithUrl = links.filter((link) => !link.href.startsWith(internalLinks));
    //   resolve(getLinksWithUrl);
    } else {
      resolve({ href: 'No se encontraron links', text: 'No se encontraron links', file });
      // resolve([]);
    }
  });
});

/* ---------- Obtener links de array archivos .md ---------- */
const filesPromises = [];

const getLinksFiles = (arrMdFiles) => {
  arrMdFiles.forEach((file) => filesPromises.push(getLinks(file)));
  return filesPromises;
};
console.log('filesPromises', filesPromises);
console.log('getLinksFiles', getLinksFiles(filesPromises));




