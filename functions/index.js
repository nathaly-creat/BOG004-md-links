const path = require('path');
const fs = require('fs');
const { getFiles } = require('./getFiles.js');
const { getLinksMd } = require('./getFiles.js');

const isFileMd = (pathAbs) => path.extname(pathAbs) === ".md";
const isDirectory = (pathAbs) => fs.lstatSync(pathAbs).isDirectory();


const mdLinks = (imputRoute) => { return new Promise ((resolve) => {
    let files = [];
    const pathAbsolute = (imputRoute) => path.isAbsolute(imputRoute) ? imputRoute : path.resolve(imputRoute);
    console.log('ABSOLUTA', pathAbsolute(imputRoute));
    let pathAbs = pathAbsolute(imputRoute);    
    fs.stat(pathAbs, (err, stats) => new Promise((resolve, reject) => {
      if (err) {
        console.log('❌ No es un archivo.md o un directorio');
        reject(err);
      } else {
        if (stats.isFile()) {
          resolve ('file', isFileMd(pathAbs));
        } else if (stats.isDirectory()) {
          resolve ('directory', isDirectory(pathAbs));
        } 
        // else {
        // reject(' ❌ No es un archivo.md o un directorio');
        // }
      }
      return readPath;
      }).then((type) => {
      console.log('type', type);
      if (type === 'file') {
        console.log('Es un archivo .md', isFileMd(pathAbs));
        getLinksMd(pathAbs).then ((links) => {
          // console.log('links', links);
          resolve(links);
        });
      } else if (type === 'directory') {
        console.log('Es un directorio', isDirectory(pathAbs));
        const filesDirectory = fs.readdirSync(pathAbs); /*conectar en esta línea la funcion recursiva*/
        if(filesDirectory.length === 0){
          console.log('No hay archivos .md en el directorio');
        } else {
          getFiles(pathAbs, files)
            .then(resp => resp)
          Promise.all (files.map(file => {  
            return getLinksMd(file);
          })).then((links) => {
            resolve(links);
          });
    
      };

      }})
      .catch((err) => console.log('Error', err))
  );
    
});
};

     
// mdLinks('means').then ((links) => {
//   console.log('links', links);
// });


 module.exports = mdLinks;
//  module.exports = {isFileMd, isDirectory};
