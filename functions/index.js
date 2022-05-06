const path = require("path");
const fs = require("fs");

const { pathAbsolute } = require("./getFiles");
const { validateTypeFiles } = require("./getFiles.js");


const mdLinks = (imputRoute, options = {validate: false}) => {
  return new Promise((resolve) => {
    let pathAbs = pathAbsolute(imputRoute);
    validateTypeFiles(pathAbs, options).then((objectLinks) => {
      resolve(objectLinks);

    });
   } 
  );
}
  //  end mdlinks

module.exports = mdLinks;
