// const fs = require("fs");
// const path = require("path");
// // const getFiles = require("../functions/getFiles.js");

// const isFileMd = (pathAbs) => path.extname(pathAbs) === ".md";
// const isDirectory = (pathAbs) => fs.lstatSync(pathAbs).isDirectory();

// const pathAbsolute = (imputRoute) => {
//   return path.isAbsolute(imputRoute) ? imputRoute : path.resolve(imputRoute);}

// const checkPathType = (pathAbs) =>
//   new Promise((resolve) => {
//     fs.stat(pathAbs, (err, stats) => {
//       if (err) {
//         resolve ('No es un archivo.md o un directorio');
//         // // console.log(" No es un archivo.md o un directorio");
//         // reject(err);
//       } else {
//         if (stats.isFile()) {
//           console.log("✅ Es un archivo .md", isFileMd(pathAbs));
//           resolve("file");
//         } else if (stats.isDirectory()) {
//           console.log("✅ Es un directorio", isDirectory(pathAbs));
//           resolve("directory");
//         } 
//         }
//     }
//     );
//   }
//   );
// module.exports = { pathAbsolute, checkPathType };


  