// module.exports = mdLinks = (imputRoute) => {
const path = require('path');
const fs = require('fs');
const process = require('process');
const { Console } = require('console');
const fsp = require("fs").promises;
const axios = require('axios').default;
const { get } = require('http');

// axios({
//   method: 'get',
//   url: 'www.google.com',
//   proxy: '127.0.0.1',
// }).then(response => {
//   console.log('PETICIONNNNNNNNNNNN', response.code);
// }).catch(error => {
//   console.log('erroHTTP', error);});


const imputRoute = process.argv[2];
const pathAbsolute = (imputRoute) => path.isAbsolute(imputRoute) ? imputRoute : path.resolve(imputRoute);
let pathAbs = pathAbsolute(imputRoute);
const isFileMd = (pathAbs) => path.extname(pathAbs) === ".md";
const isDirectory = (pathAbs) => fs.lstatSync(pathAbs).isDirectory();
// const isFile = (imputRoute) => fs.lstat(imputRoute).isFile();
// console.log('isFile', isFile(imputRoute));
console.log('ABSOLUTA', pathAbsolute(imputRoute));

// IDENTIFICAR TIPO ENTRADA Y EJECUTAR FUNCIONES DE CONTENIDO DE LA RUTA.

const readPath = fs.stat(pathAbs, (err, stats) => new Promise((resolve, reject) => {
  if (err) {
    console.log(' ❌ No es una ruta válida');
    reject(err);
  } else {
    if (stats.isFile()) {
      resolve('file');
    } else if (stats.isDirectory()) {
      resolve('directory', isDirectory(pathAbs));
    } else {
      reject(' ❌ No es un archivo.md o un directorio');
    }
  }
  return readPath;
}).then((type) => {
  if (type === 'file') {
    console.log('Es un archivo .md', isFileMd(pathAbs));
    getLinks(pathAbs); // Ejecuto la función en simultaneo para extraer links.
  } else if (type === 'directory') {
    console.log('Es un directorio', isDirectory(pathAbs));
    getFiles(pathAbs); // barrido de archivos .md en directorio.
    const filesDirectory = fs.readdirSync(pathAbs); /*conectar en esta línea la funcion recursiva*/
    switch (type) {
      case filesDirectory.length > 0:
        console.log('Hay archivos .md en el directorio');
        getLinksFiles(filesDirectory);
        break;
      case filesDirectory.length === 0:
        console.log('No hay archivos .md en el directorio');
        break;
        default:
        }
      }
    }
  )
  .catch((err) => console.log('Error', err))
);


// );
//     // return;
//   }).catch((err) => {        
//     console.log('Error', err);
//   }); 
  
  // if (filesDirectory.length === 0) {
  //   console.log('No hay archivos .md en el directorio');
  // } else {
  //   switch (type) {
  
  
  // (filesDirectory.length > 0) {
    // // console.log('globalFiles', filesDirectory);
// // pathAbsolute(imputRoute);
//     /* ESTA ES LA SECCION QUE ME RETORNA UNDEFINED*/
// getFiles(filesDirectory);
// console.log('directo > 0', getFiles(filesDirectory));
// // console.log('archivos recursivos TOTALES', getFiles(pathAbsolute(imputRoute)));
// }
// } 
// return ;
// }
// }).catch((err) => {



/*CODIGO ANTERIOR DE VALIDACION DE RUTA*/
// if (err) {
//   console.log('No es una ruta válida');
//   return;
// } else if (stats.isFile()) {
//   if (isFileMd(imputRoute)) {
//     console.log('Es un archivo .md', isFileMd(imputRoute));
//     getLinks(imputRoute);
//   } else {  
//     console.log('No es un archivo .md,'+' intente con una ruta válida');
//   }  
                                /*CAMBIAR ESTA LINEA EN README NO USAR readFileSync*/
//     const file = fs.readFileSync(imputRoute, 'utf8'); // NO USAR readFileSync
//     console.log(file);
//     return;
    
//   } else if (stats.isDirectory()) {
//     console.log('es un directorio', true);
  //   const filesDirectory = fs.readdirSync(imputRoute); /*conectar en esta línea la funcion recursiva*/
  //     if (filesDirectory.length === 0) {
  //       console.log('No hay archivos .md en el directorio');
  //     } else {
  //       console.log('este es el contenido del directorio:', filesDirectory);
  //       if (filesDirectory.length > 0) {
  //       console.log('globalFiles', filesDirectory);
  //       pathAbsolute(imputRoute);
  //           /* ESTA ES LA SECCION QUE ME RETORNA UNDEFINED*/
  //       console.log('archivos recursivos TOTALES', getFiles(imputRoute));
  //       }
  //     } 
  // return ;
  // };

// });

// /*MODELO 1 FUNCION DE RECURSIVIDAD*/
let globalLinks = [];
const getFiles = (pathAbs) => new Promise((resolve, reject) => {
    let arrFiles = [];
    const files = fs.readdirSync(pathAbs);  
    files.forEach(file => {
        const filePath = path.join(pathAbs, file); 
        if (isFileMd(filePath)) {
          resolve(arrFiles.push(filePath));
          // resolve(console.log('pushArchivos', arrFiles.push(filePath)));
        } else if (isDirectory(filePath)) {
          resolve(arrFiles = arrFiles.concat(getFiles(filePath)));
        }
        // else {
        //   reject(new Error('No se encontraron archivos .md'));
        //   // console.log('Fin del programa');
        // }
    });
   
    // console.log('filesFilterRecursividad', files.filter(file => isFileMd(file)));
    globalLinks.push(...files.filter(file => isFileMd(file)));
    console.log('Total de archivos.md: ', globalLinks);
});


// /* ---------- Obtener links archivo .md ---------- */
const getLinks = (pathAbs) => new Promise((resolve, reject) => {
  let fileLinks = pathAbs;

  fs.readFile(fileLinks, 'utf-8', (error, data) => {
    const regularExpression = /\[([^\[]+)\](\(.*\))/g;
    const internalLinks = data.match(regularExpression);
    console.log('links encontrados INTERNAL: ', internalLinks);
    if (error) {
      reject(new Error(`${error.code}, verifica la ruta del archivo`));
    } else if (data.match(regularExpression) !== null) {
      const links = data.match(regularExpression);
      resolve(links);
      const arrayLinksStructure = links.map(link => {
        const linkName = link.match(/\[.*\]/)[0].replace(/\[|\]/g, '');
        const linkUrl = link.match(/\(.*\)/)[0].replace(/\(|\)/g, '');
        return {
          text: linkName,
          url: linkUrl,
          file: fileLinks,

        };
      });
      console.log('Destructure', arrayLinksStructure);

       
    } else {
      
      resolve([]);
    }
  });
});

/* ---------- Obtener links de array archivos .md ---------- */
const filesPromises = [];

const getLinksFiles = (arrMdFiles) => {
  arrMdFiles.forEach((file) => filesPromises.push(getLinks(file)));
  return filesPromises;
};

// console.log('filesPromises', filesPromises);
// console.log('getLinksFiles', getLinksFiles(filesPromises));

// // } cierre de module.export




