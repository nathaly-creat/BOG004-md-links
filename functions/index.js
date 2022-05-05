const path = require("path");
const fs = require("fs");
const { getFiles, getLinksFiles } = require("./getFiles.js");
const { getLinksMd } = require("./getFiles.js");

const isFileMd = (pathAbs) => path.extname(pathAbs) === ".md";
const isDirectory = (pathAbs) => fs.lstatSync(pathAbs).isDirectory();

const pathAbsolute = (imputRoute) =>
  path.isAbsolute(imputRoute) ? imputRoute : path.resolve(imputRoute);

const checkPathType = (pathAbs) =>
  new Promise((resolve, reject) => {
    fs.stat(pathAbs, (err, stats) => {
      if (err) {
        console.log("❌ No es un archivo.md o un directorio");
        reject(err);
      } else {
        if (stats.isFile()) {
          resolve("file");
        } else if (stats.isDirectory()) {
          resolve("directory");
        }
      }
    });
  });

const mdLinks = (imputRoute, options) => {
  return new Promise((resolve) => {
    let pathAbs = pathAbsolute(imputRoute);
    checkPathType(pathAbs).then((type) => {
      if (type === "file") {
        // console.log("Es un archivo .md", isFileMd(pathAbs));
        getLinksMd(pathAbs, options).then((links) => {

          resolve(links);
        });
      } else if (type === "directory") {
        // console.log("Es un directorio 22222", isDirectory(pathAbs));
        const filesDirectory = fs.readdirSync(pathAbs);
        if (filesDirectory.length === 0) {
          console.log("No hay archivos .md en el directorio");
        } else {
          let files = [];
          getFiles(pathAbs, files);
          Promise.all(getLinksFiles(files, options)).then((links) => {
            let algo = links.flat();
            resolve(algo);
          });
        }
      }
    });
  });
};

module.exports = mdLinks;
