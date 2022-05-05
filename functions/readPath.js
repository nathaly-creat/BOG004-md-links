const fs = require("fs");
const path = require("path");



const pathAbsolute = (imputRoute) => {
  return path.isAbsolute(imputRoute) ? imputRoute : path.resolve(imputRoute);}

const checkPathType = (pathAbs) =>
  new Promise((resolve, reject) => {
    fs.stat(pathAbs, (err, stats) => {
      if (err) {
        // console.log("❌ No es un archivo.md o un directorio");
        reject(err);
      } else {
        if (stats.isFile()) {
          // console.log("✅ Es un archivo .md", isFileMd(pathAbs));
          resolve("file");
        } else if (stats.isDirectory()) {
          // console.log("✅ Es un directorio", isDirectory(pathAbs));
          resolve("directory");
        }
      }
    });
  });

  module.exports = { pathAbsolute, checkPathType };