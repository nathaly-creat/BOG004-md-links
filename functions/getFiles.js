// const { isFileMd , isDirectory } = require('./index.js');
// const fsp = require("fs").promises;
const path = require("path");
const fs = require("fs");
const isFileMd = (pathAbs) => path.extname(pathAbs) === ".md";
const isDirectory = (pathAbs) => fs.lstatSync(pathAbs).isDirectory();
const validate = require("./validate.js");

// /*MODELO 1 FUNCION DE RECURSIVIDAD*/

// let globalFiles = [];
const getFiles = (pathAbs, globalFiles) => {
  const files = fs.readdirSync(pathAbs);
  files.forEach((file) => {
    const filePath = path.join(pathAbs, file);
    // console.log('filePath', filePath);
    if (isDirectory(filePath)) {
      getFiles(filePath, globalFiles);
    } else {
      if (isFileMd(filePath)) {

        console.log("✅ Archivo .md", filePath);
        globalFiles.push(filePath);
      } 
      // else {

      //   getLinksMd(filePath, options).then ((links) => {
      //     console.log('linksFILEEEE', links);
      //     resolve(links);
      //   });
      // }
    }
  });
  return globalFiles;
};


// /* ---------- Obtener links archivo .md ---------- */
const getLinksMd = (pathAbs, options) => {
  
  let promesa = [];
  let objTotal = {}
  let valideOptions;
  
  return new Promise((resolve, reject) => {
    let fileLinks = pathAbs;
    fs.readFile(fileLinks, "utf8", (err, data) => {
      if (err) {
        console.log("❌ No es un archivo.md o un directorio");
        reject(err);
      } else {
        let links = data.match(/\[(.*?)\]\((.*?)\)/g);
        if (links !== null) {
          let linkObj = {};
          links.forEach((objeto) => {
            const linkName = objeto.match(/\[.*\]/)[0].replace(/\[|\]/g, "");
            const linkUrl = objeto.match(/\(.*\)/)[0].replace(/\(|\)/g, "");
            linkObj = {
              text: linkName.substring(0, 50),
              href: linkUrl,
              file: fileLinks,
            };
            promesa.push(linkObj);
            // ****************seccion de optios********************
            if (options.validate) {
              // console.log('promesa', promesa);
              // return Promise.all(
              valideOptions =  promesa.map((link) => {
            
                  return validate(link.href)
                  .then((response) => {
                 
                    objTotal = { ...link, ...response };
                    // console.log('objTotal', objTotal);
                      return objTotal;
                    })
                    .catch((error) => {
                      console.log('error', error);
                      

                      return link;
                    });
                })
                
              // )
              // .then((promesa) => {
              //   console.log('promesa después del map', promesa);
              //   return promesa;
              // });
      
            } else {
              return valideOptions = promesa; }

            // *************Fin de options*************
          });
          // console.log('links', valideOptions);
          // console.log('promesa después del map', promesa);
          Promise.all(valideOptions).then((links) => {
            resolve(links);
          });
        } else {
          reject(
            new Error(
              `${error.code}, ' ❌ Error de lectura del archivo ${file}'`
            )
          );
          resolve([]);
        }
      }
    });
  });
};

/* ---------- opcion 1 Obtener links de array archivos .md ---------- */
// });

const getLinksFiles = (arrayPathAbs, options) => {
  // const filesPromises = [];
  return arrayPathAbs.map((file) => {
    return getLinksMd(file, options);
  });
};

module.exports = { getFiles, getLinksMd, getLinksFiles };
