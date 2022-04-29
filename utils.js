/* CODIGOS VIEJOS*/

// module.exports = () => {
//   // ...
// };

// // const mdLinks = require('./mdLinks');



// // const isDirectory = stats.isDirectory();
// // const isFile = stats.isFile();
// if (isFile(inputRoute)) {
//     console.log('Es un archivo', true);
//     const file = fs.readFileSync(inputRoute, 'utf8');
//     console.log(file);
// } else if (isDirectory(inputRoute)) {
//     console.log('Es un directorio', true);
//     const files = fs.readdirSync(inputRoute);
//     console.log(files);
// }
// });



// // const readFile = (imputRoute) => {
// //   console.log('readFile', imputRoute);
// //     const pathAbsolute = (imputRoute) => path.isAbsolute(imputRoute) ? imputRoute : path.resolve(imputRoute);
// //     return new Promise((resolve, reject) => {
// //         fs.readFile(rutaAbsoluta, 'utf8', (err, data) => {
// //             if (err) {
// //                 reject(err);
// //             } else {
// //                 resolve(data);
// //             }
// //         });
// //     });
// // };


// // const fileOrDirectory = (route) => {
// //   const files = [];
// //   if (path.extname(route) === '.md') {
// //     files.push(route);
// //     return files;
// //   } 
// //   else {
// //     const directory = fs.readdir(route);
// //     const filterFile = directory.filter(file => path.extname(file) === '.md')
// //     filterFile.forEach((elem) => {
// //       const validFiles = path.join(route, elem);
// //       files.push(validFiles);
// //     })
// //     return files;
// //   }
// // }



// // captura de argumentos desde la terminal.
// const args = process.argv;
// // console.log('ARGS', args[2]);
// const rutaArgumento = args[2];

// const rutaAbsoluta = path.isAbsolute(rutaArgumento) ? rutaArgumento : path.resolve(rutaArgumento);
// const extension = path.extname('.md');
// console.log('RUTA ABSOLUTA', rutaAbsoluta);

// const typeRoute = function (rutaAbsoluta) {
//   if (extension === '.md') {
//     const isFile = stats.isFile();
//     console.log('isFile', isFile);
//     // return 'file';
//   } else {
//     const pathList = fs.readdirSync(__dirname+args[2], 'utf8', (err, data) => {
//       console.log('hola');
//         if (err) throw err;
//         console.log('este es el contenido del directorio:', data);
//     });
    
//     pathList.forEach(element => {
//       console.log(element);
//     }); 
//     return 'directory';
//   }
// }

// const dirName = path.dirname(__dirname); 
// const fileName = path.dirname(__filename); 


// // Calling fs.Stats isDirectory()
// fs.stat(path.normalize(__dirname+rutaArgumento), (err, stats) => {
//   if (err) {
//       console.log('no es una ruta válida');
//       return;
//   } else {
//     const isDirectory = stats.isDirectory();
//     const isFile = stats.isFile();
//     if (isDirectory) {
//         console.log('Es un directorio', isDirectory);
//     } else if (isFile && extension === '.md') {
//         console.log('Es un archivo', isFile);
//     };
//   }
// });



// const pathList = fs.readdirSync(__dirname+args[2], 'utf8', (err, data) => {
//   if (err) {
//     console.log('error', err);
//   } else if (data.length === 0) {
//     console.log('No hay archivos en el directorio');
//   } else if (data.length > 0) {
//     console.log('este es el contenido del directorio:', data);
//   } 
// });
    

// pathList.forEach(element => {
//   console.log('este es el contenido del directorio:', element);
// }); 






// /* MODELO 2 FUNCION DE RECURSIVIDAD */

// const getMdFiles = (imputRoute) => {
//   console.log('getMdFiles', imputRoute);
//   let filesArray = [];
//   const pathAbsolute = absolutePath(inputRoute);
//   return new Promise((resolve) => {
//     isFile(pathAbsolute).then((stats) => {
//       //validar si la ruta es archivo
//       if (stats) {
//         if (isFileMd(pathAbsolute)) {
//           //valida que sea .md
//           filesArray.push(pathAbsolute); //empuja los archivos al arreglo
//           resolve(filesArray);
//         } else {
//           resolve(filesArray);
//         }
//       } else {
//         //si no es archivo valida que sea directorio
//         const arrayPromises = fs.readdirSync(pathAbsolute).map((files) => {
//           return getMdFiles(path.join(pathAbsolute, files));
//           //llama la funcion uniendo la ruta resulta  con los nuevos archivos que encontro
//         });
//         Promise.all(arrayPromises).then((responses) => {
//           // resulve arreglo /*SUSTITUIR OPCION DEL CODIGO CON BASE A LA LINEA 93*/
//           responses.forEach((response) => {
//             if (response.length > 0) {
//               filesArray = filesArray.concat(response); //concatena archivos encontrados en directorios al arrray
//             }
//           });
//           resolve(filesArray);
//         });
//       }
//     });
//   });
// };

//           /*// isDirectory(pathAbsolute).then((stats) => {
//           //   if (stats) {
//           //     //si es directorio
//           //     responses.forEach((response) => {
//           //       filesArray.push(...response);
//           //     });
//           //     resolve(filesArray);
//           //   }*/
// //           });
// //         });
// //       }
// //     });
// //   });
// // };

// codigo de opcion de push de filter array
 //         let arrDirectorio = getFiles(filePath);
    //         const allFiles = arrFiles.concat(arrDirectorio);
    //         // console.log('arrFiles', allFiles);
    //         console.log('pusheados', arrFiles.concat(arrDirectorio));
    //         // console.log(arrFiles.push(...getFiles(filePath)));
    //    }
    // });

    

// /* MODELO 2 FUNCION DE RECURSIVIDAD */

// const getMdFiles = (imputRoute) => {
//   console.log('getMdFiles', imputRoute);
//   let filesArray = [];
//   const pathAbsolute = absolutePath(inputRoute);
//   return new Promise((resolve) => {
//     isFile(pathAbsolute).then((stats) => {
//       //validar si la ruta es archivo
//       if (stats) {
//         if (isFileMd(pathAbsolute)) {
//           //valida que sea .md
//           filesArray.push(pathAbsolute); //empuja los archivos al arreglo
//           resolve(filesArray);
//         } else {
//           resolve(filesArray);
//         }
//       } else {
//         //si no es archivo valida que sea directorio
//         const arrayPromises = fs.readdirSync(pathAbsolute).map((files) => {
//           return getMdFiles(path.join(pathAbsolute, files));
//           //llama la funcion uniendo la ruta resulta  con los nuevos archivos que encontro
//         });
//         Promise.all(arrayPromises).then((responses) => {
//           // resulve arreglo /*SUSTITUIR OPCION DEL CODIGO CON BASE A LA LINEA 93*/
//           responses.forEach((response) => {
//             if (response.length > 0) {
//               filesArray = filesArray.concat(response); //concatena archivos encontrados en directorios al arrray
//             }
//           });
//           resolve(filesArray);
//         });
//       }
//     });
//   });
// };

//           /*// isDirectory(pathAbsolute).then((stats) => {
//           //   if (stats) {
//           //     //si es directorio
//           //     responses.forEach((response) => {
//           //       filesArray.push(...response);
//           //     });
//           //     resolve(filesArray);
//           //   }*/
// //           });
// //         });
// //       }
// //     });
// //   });
// // };



// estatus de las promesas pending
// const linksPromises = arrayLinks.map(link => getLinks(link)); 
//       console.log('linksPromises', linksPromises);

//       ✅

       // const linkStructure = {
        //   text: link,
        //   href: `${internalLinks}${link}`
        //   fileLinks: fileLinks,
        // };
        // // return linkStructure;
        // console.log('links estructura Array: ', linkStructure); /*array de links VALIDAR*/
    // else if (data.match(regularExpression)) {
    //   const arr = data.match(regularExpression);

    //   const links = arr.map((item) => {
    //     const divideItem = item.split('](');
    //     const text = divideItem[0].replace('[', ''); // .substring(0, 50); ¿README?
    //     const href = divideItem[1].replace(')', '');
    //     return ({ href, text, fileLinks });
    //   });

    //   const getLinksWithUrl = links.filter((link) => !link.href.startsWith(internalLinks));
    //   resolve(getLinksWithUrl);





// /*MODELO 3 FUNCION DE RECURSIVIDAD*/
// let globalLinks = [];
// const getFiles = (pathAbsolute) => new Promise((resolve, reject) => {
//     let arrFiles = [];
//     const files = fs.readdirSync(pathAbsolute);  
//     files.forEach(file => {
//         const filePath = path.join(pathAbsolute, file); 
//         if (isFileMd(filePath)) {
//           resolve(arrFiles.push(filePath));
//           // resolve(console.log('pushArchivos', arrFiles.push(filePath)));
//         } else if (isDirectory(filePath)) {
//         //  primero push y luego resuelvo
//         getFiles.then((filePath2) => {
//           console.log(arrFiles.push(filePath2));
//           // arrFiles.push(filePath2);
//         });
//       };
//       resolve(arrFiles);
//         );
//     });

// opcion de sebastian para validacion de ruta
// // IDENTIFICAR TIPO ENTRADA Y EJECUTAR FUNCIONES DE CONTENIDO DE LA RUTA.
// fs.promise.stat(imputRoute) => new Promise((resolve, reject) => {
//     if (err) {
//       console.log('No es una ruta válida');
//       reject(err);
//     } else {
//       if (stats.isFile()) {
//         resolve('file');
//       } else if (stats.isDirectory()) {
//         resolve('directory', isDirectory(imputRoute));
//       } else {
//         reject('No es un archivo.md o un directorio');
//       }
//     }
//     return;
//   }).then((type) => {
//     if (type === 'file') {
//       console.log('Es un archivo .md', isFileMd(imputRoute));
//     // getLinks(imputRoute); // Ejecuto la función en simultaneo para extraer links.
//     } else if (type === 'directory') {
//       console.log('Es un directorio', isDirectory(imputRoute));
//       // getFiles(imputRoute); // barrido de archivos .md en directorio.
//       const filesDirectory = fs.readdirSync(imputRoute); /*conectar en esta línea la funcion recursiva*/
//       switch (type) {
//         case filesDirectory.length > 0:
//           console.log('Hay archivos .md en el directorio');
//           // getLinksFiles(filesDirectory);
//           break;
//         case filesDirectory.length === 0:
//           console.log('No hay archivos .md en el directorio');
//           break;
//           default:
//           }
//         }
//       }
//     )
//     .catch((err) => console.log('Error', err))
//   );