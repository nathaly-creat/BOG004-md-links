// const { isFileMd , isDirectory } = require('./index.js');
// const fsp = require("fs").promises;
const path = require('path');
const fs = require('fs');
const isFileMd = (pathAbs) => path.extname(pathAbs) === ".md";
const isDirectory = (pathAbs) => fs.lstatSync(pathAbs).isDirectory();

// /*MODELO 1 FUNCION DE RECURSIVIDAD*/
const getFiles = (pathAbs, globalFiles) => new Promise((resolve) => {
        let arrFiles = [];
    const files = fs.readdirSync(pathAbs);  
    files.forEach(file => {
        const filePath = path.join(pathAbs, file); 
        console.log('filePath', filePath);
        if (isFileMd(filePath)) {
          arrFiles.push(filePath);
        } else if (isDirectory(filePath)) {
          getFiles(filePath , globalFiles);
        }
        });
        Promise.all(arrFiles).then((files) => {
          globalFiles = files;
          if (globalFiles.length > 0) {
            // console.log('globalFiles', globalFiles);
            getLinksFiles(globalFiles);
          }
          // resolve(files);
          resolve(globalFiles);
        });
        
    }); 
    
    

    // /* ---------- Obtener links archivo .md ---------- */
const getLinksMd = (pathAbs) => new Promise((resolve, reject) => {
    // pathAbs = pathAbs.replace(/\\/g, '/');
    let fileLinks = pathAbs;
    fs.readFile(fileLinks, 'utf-8', (error, data = [...globalFiles(fileLinks)] ) => {
      // console.log('data', data);
      const regularExpression = /\[([^\[]+)\](\(.*\))/g;
    //   const internalLinks = data.match(regularExpression);
      // console.log('links encontrados INTERNAL: ', internalLinks);
      if (error) {
        reject(new Error(`${error.code}, ' ❌ Error de lectura del archivo ${file}'`));
      } else if (data.match(regularExpression) !== null && data !== '' && data !== undefined) {
        const links = data.match(regularExpression);
        const arrayLinksStructure = links.map(link => {
          const linkName = link.match(/\[.*\]/)[0].replace(/\[|\]/g, '');
          const linkUrl = link.match(/\(.*\)/)[0].replace(/\(|\)/g, '');
          return {
            text: linkName,
            url: linkUrl,
            file: fileLinks,
          };
        });
        resolve([arrayLinksStructure]);
        console.log('LinksDestructure', arrayLinksStructure);
      } else {
        resolve([]);
      }
    });
  });
  
  /* ---------- opcion 1 Obtener links de array archivos .md ---------- */
  // });
  
  
    const getLinksFiles = (arrayPathAbs) => {
    const filesPromises = [];
    arrayPathAbs.map((file) => {
      filesPromises.push(getLinksMd(file));
  
      return Promise.all(filesPromises).then((arrayLinks) => {
        // console.log('arrayLinks', arrayLinks);
        return arrayLinks;
      });
    });
    
  };

    module.exports = { getFiles, getLinksMd, getLinksFiles };
