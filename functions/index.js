const path = require("path");
const fs = require("fs");

const { pathAbsolute } = require("./get_methods");
const { validateTypeFiles } = require("./get_methods.js");


const mdLinks = (imputRoute, options = {validate: false}) => {
  return new Promise((resolve) => {
    let pathAbs = pathAbsolute(imputRoute);
    validateTypeFiles(pathAbs, options).then((objectLinks) => {
      resolve(objectLinks);

    })
    .catch((err) => {
      console.log("❌ Error: No es una ruta válida: ", err);
    }
    );

   } 
  );
}
  //  end mdlinks

module.exports = mdLinks;
