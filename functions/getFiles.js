// const { isFileMd , isDirectory } = require('./index.js');
// const fsp = require("fs").promises;
const path = require('path');
const fs = require('fs');
const isFileMd = (pathAbs) => path.extname(pathAbs) === ".md";
const isDirectory = (pathAbs) => fs.lstatSync(pathAbs).isDirectory();


// /*MODELO 1 FUNCION DE RECURSIVIDAD*/

  // let globalFiles = [];
  const getFiles = (pathAbs, globalFiles) => {
  const files = fs.readdirSync(pathAbs);  
  files.forEach(file => {
    const filePath = path.join(pathAbs, file); 
    // console.log('filePath', filePath);
    if(isDirectory(filePath)) {
      getFiles(filePath, globalFiles);
    } else {
      if (isFileMd(filePath)) {
      globalFiles.push(filePath);
    } 
  }
    });
  }; 

    // Promise.all(arrFiles).then((files) => {
    //   // console.log('filesB', files);
    //   globalFiles = files;
    //   if (globalFiles.length > 0) {
    //     // console.log('globalFiles', globalFiles);
    //     getLinksFiles(globalFiles);
    //   }
    //   // resolve(files);
    //   resolve(globalFiles);
    // });
    



    // /* ---------- Obtener links archivo .md ---------- */
    const getLinksMd = (pathAbs) => { return new Promise((resolve, reject) => {
      let fileLinks = pathAbs;
      fs.readFile(fileLinks, 'utf8', (err, data) => {
        if (err) {
          console.log('❌ No es un archivo.md o un directorio');
          reject(err);
        } else {
          let links = data.match(/\[(.*?)\]\((.*?)\)/g);
          if (links !== null) {
            let promesa = [];
            links.forEach((objeto) => {
              const linkName = objeto.match(/\[.*\]/)[0].replace(/\[|\]/g, '');
              const linkUrl = objeto.match(/\(.*\)/)[0].replace(/\(|\)/g, '');             
              let linkObj = {
                text: linkName,
                href: linkUrl,
                file: fileLinks,
              };
              promesa.push(linkObj);
              });
              Promise.all(promesa).then((links) => {
                // console.log('links', links);
                resolve(links);
              });
          } else {
            reject(new Error(`${error.code}, ' ❌ Error de lectura del archivo ${file}'`));
            resolve([]);
          }
          
          }
        });
      });
    };

       
      /* ---------- opcion 1 Obtener links de array archivos .md ---------- */
  // });
  
  
  const getLinksFiles = (arrayPathAbs) => {
    const filesPromises = [];
    return arrayPathAbs.map((file) => {
      return getLinksMd(file)
     
    });
    
  };

    module.exports = { getFiles, getLinksMd, getLinksFiles };