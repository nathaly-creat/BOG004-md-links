// const { isFileMd , isDirectory } = require('./index.js');
// const fsp = require("fs").promises;
const path = require("path");
const fs = require("fs");
const isFileMd = (pathAbs) => path.extname(pathAbs) === ".md";
const isDirectory = (pathAbs) => fs.lstatSync(pathAbs).isDirectory();
const validate = require("./validate.js");

// /*MODELO 1 FUNCION DE RECURSIVIDAD*/

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

// /* ---------- Obtener links archivo .md ---------- */
const getLinksMd = (pathAbs, options) => {
  let promesa = [];
  let objTotal = {};
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
            if (options) {
              valideOptions = promesa.map((link) => {
                return validate(link.href)
                  .then((response) => {
                    objTotal = { ...link, ...response };
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

            // *************Fin de options*************
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
};

/* ---------- opcion 1 Obtener links de array archivos .md ---------- */
// });

const getLinksFiles = (arrayPathAbs, options) => {
  return arrayPathAbs.map((file) => {
    return getLinksMd(file, options);
  });
};

module.exports = { getFiles, getLinksMd, getLinksFiles };
