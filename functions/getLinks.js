// const fs = require('fs');
// // const fsp = require("fs").promises;



// // /* ---------- Obtener links archivo .md ---------- */
// const getLinksMd = (pathAbs) => new Promise((resolve, reject) => {
//     // pathAbs = pathAbs.replace(/\\/g, '/');
//     let fileLinks = pathAbs;
//     fs.readFile(fileLinks, 'utf-8', (error, data = [...globalFiles(fileLinks)] ) => {
//       // console.log('data', data);
//       const regularExpression = /\[([^\[]+)\](\(.*\))/g;
//     //   const internalLinks = data.match(regularExpression);
//       // console.log('links encontrados INTERNAL: ', internalLinks);
//       if (error) {
//         reject(new Error(`${error.code}, ' ❌ Error de lectura del archivo ${file}'`));
//       } else if (data.match(regularExpression) !== null && data !== '' && data !== undefined) {
//         const links = data.match(regularExpression);
//         const arrayLinksStructure = links.map(link => {
//           const linkName = link.match(/\[.*\]/)[0].replace(/\[|\]/g, '');
//           const linkUrl = link.match(/\(.*\)/)[0].replace(/\(|\)/g, '');
//           return {
//             text: linkName,
//             url: linkUrl,
//             file: fileLinks,
//           };
//         });
//         resolve([arrayLinksStructure]);
//         console.log('Destructure', arrayLinksStructure);
//       } else {
//         resolve([]);
//       }
//     });
//   });
  
//   /* ---------- opcion 1 Obtener links de array archivos .md ---------- */
//   // });
  
//   const getLinksFiles = (arrayPathAbs) => {
//     const filesPromises = [];
//     arrayPathAbs.map((file) => {
//       filesPromises.push(getLinksMd(file));
  
//       return Promise.all(filesPromises).then((arrayLinks) => {
//         // console.log('arrayLinks', arrayLinks);
//         return arrayLinks;
//       });
//     });
    
//   }; 

//   module.exports = {getLinksFiles, getLinksMd};
 