const path = require("path");
const fs = require("fs");
const isFileMd = (pathAbs) => path.extname(pathAbs) === ".md";
const isDirectory = (pathAbs) => fs.lstatSync(pathAbs).isDirectory();
// const validate = require("./validate.js");

// // ************funtion validate route****************
const pathAbsolute = (imputRoute) => {
  return path.isAbsolute(imputRoute) ? imputRoute : path.resolve(imputRoute);}

const checkPathType = (pathAbs) =>
  new Promise((resolve, reject) => {
    fs.stat(pathAbs, (err, stats) => {
      if (err) {
        // console.log("❌ No es un archivo.md o un directorio");
        reject(' No es un archivo.md o un directorio',err);
      } else {
        if (stats.isFile()) {
          // console.log("✅ Es un archivo .md", isFileMd(pathAbs));
          resolve("file");
        } else if (stats.isDirectory()) {
          // console.log("✅ Es un directorio", isDirectory(pathAbs));
          resolve("directory");
        } 
        }
    }
    );
  }
  );

// function recursive */

const getFiles = (pathAbs, globalFiles) => {
  const files = fs.readdirSync(pathAbs);
  files.forEach((file) => {
    const filePath = path.join(pathAbs, file);
    if (isDirectory(filePath)) {
      getFiles(filePath, globalFiles);
    } else {
      if (isFileMd(filePath)) {
        globalFiles.push(filePath);
      }
    }
  });
  return globalFiles;
};

"use strict";
let fetch = require("node-fetch");
const validate = (link) => {
  return fetch(link)
    .then((response) => {
      if (response.status >= 200 && response.status < 400) {
        // console.log('response in validate ok:', response.status, link);
        return {
          status: response.status,
          str: "OK",
        };
      } else {
        // console.log('response in validate fail:', response.status, link);
        return {
          status: response.status,
          str: "Fail",
        };
      }
    })
    .catch((error) => {
      console.log("error in validate", error.status, link);
      // return link;
    });
};


// /* ---------- Obtener links archivo .md ---------- */
const getLinksMd = (pathAbs, options) => new Promise ((resolve, reject) => {
  let promesa = [];
  // let objTotal = {};
  let valideOptions;
    let fileLinks = pathAbs;
    fs.readFile(fileLinks, "utf8", (err, data) => {
      if (err) {
        reject(errMessage = "No es un archivo .md");
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
            // // ****************seccion de options********************
            if (options.validate) {
              valideOptions = promesa.map((link) => {
                return validate(link.href)
                  .then((response) => {
                    objTotal = Object.assign(linkObj, response);
                    
                    return objTotal;
                  })
                  .catch((error) => {
                    console.log("error", error);
                    return link;
                  });
              });
            } else {
              return (valideOptions = promesa);
            }
            // // *************Fin de options*************
          });
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

/* ---------- opcion 1 Obtener links de array archivos .md ---------- */
// });

const getLinksFiles = (arrayPathAbs, options) => {
   return arrayPathAbs.map((file) => {
    return getLinksMd(file, options);
  });
};


const validateTypeFiles = (pathAbs, options) => new Promise (resolve => {
  const isDirResult = fs.statSync(pathAbs).isDirectory(); // es directorio? booleano
  if(isDirResult === false){
    getLinksMd(pathAbs, options).then((links) => {
      resolve(links);
    });
  } else {
    const filesDirectory = fs.readdirSync(pathAbs);
        if (filesDirectory.length === 0) {
          resolve("No hay archivos .md en el directorio");
        } else {
          let files = [];
          getFiles(pathAbs, files);
          Promise.all(getLinksFiles(files, options)).then((links) => {
            let generalLinks = links.flat();
            resolve(generalLinks);
          });
        }
      }
  });
// fin

module.exports = {validateTypeFiles, getFiles, getLinksMd, getLinksFiles, pathAbsolute, checkPathType};
