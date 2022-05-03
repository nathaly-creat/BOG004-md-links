/* CODIGOS VIEJOS*/

// module.exports = () => {
//   // ...
// };

// // const mdLinks = require('./mdLinks');

const isFile = (imputRoute) => fs.lstat(imputRoute).isFile();
// console.log('isFile', isFile(imputRoute));

 /* CODIGO DE AXIOS */
// axios({
//   method: 'get',
//   url: 'www.google.com',
//   proxy: '127.0.0.1',
// }).then(response => {
//   console.log('PETICIONNNNNNNNNNNN', response.code);
// }).catch(error => {
//   console.log('erroHTTP', error);});





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


// - Codigo de prueba de recursividad
// var settings = {
//     root: './',
//     entryType: 'all',
//     // Filtrar archivos con extensión js y json
//     fileFilter: [ '*.md'],
//     // Filtrar por directorio
//     directoryFilter: [ '!.git', '!*modules' ],
//     // Trabajar con archivos hasta 100 subdirectorio de profundidad
//     depth: 100,
// };  // Import the module
// var readdirp = require('readdirp');


// ### // En este ejemplo, esta variable almacenará todas las rutas de los archivos y directorios dentro de la ruta proporcionada
// var allFilePaths = [];

// // Iterar recursivamente a través de una carpeta
// readdirp(settings)
//     .on('data', function (entry) {
//         // ejecutar cada vez que se encuentre un archivo en el directorio de proveedores

//         // Almacene la ruta completa del archivo / directorio en nuestra matriz personalizada
//         allFilePaths.push(
//             entry.fullPath
//         );
//     })
//     .on('warn', function(warn){
//         console.log("Warn: ", warn);
//     })
//     .on('error', function(err){
//         console.log("Error: ", err);
//     })
//     .on('end', function(){

//         console.log(allFilePaths);
//         // ["c:/file.txt","c:/other-file.txt" ...]
//     })
// ;    
   
// );
//     // return;
//   }).catch((err) => {        
//     console.log('Error', err);
//   }); 
  
  // if (filesDirectory.length === 0) {
  //   console.log('No hay archivos .md en el directorio');
  // } else {
  //   switch (type) {
  
  
  // (filesDirectory.length > 0) {
    // // console.log('globalFiles', filesDirectory);
// // pathAbsolute(imputRoute);
//     /* ESTA ES LA SECCION QUE ME RETORNA UNDEFINED*/
// getFiles(filesDirectory);
// console.log('directo > 0', getFiles(filesDirectory));
// // console.log('archivos recursivos TOTALES', getFiles(pathAbsolute(imputRoute)));
// }
// } 
// return ;
// }
// }).catch((err) => {



/*CODIGO ANTERIOR DE VALIDACION DE RUTA*/
// if (err) {
//   console.log('No es una ruta válida');
//   return;
// } else if (stats.isFile()) {
//   if (isFileMd(imputRoute)) {
//     console.log('Es un archivo .md', isFileMd(imputRoute));
//     getLinks(imputRoute);
//   } else {  
//     console.log('No es un archivo .md,'+' intente con una ruta válida');
//   }  
                                /*CAMBIAR ESTA LINEA EN README NO USAR readFileSync*/
//     const file = fs.readFileSync(imputRoute, 'utf8'); // NO USAR readFileSync
//     console.log(file);
//     return;
    
//   } else if (stats.isDirectory()) {
//     console.log('es un directorio', true);
  //   const filesDirectory = fs.readdirSync(imputRoute); /*conectar en esta línea la funcion recursiva*/
  //     if (filesDirectory.length === 0) {
  //       console.log('No hay archivos .md en el directorio');
  //     } else {
  //       console.log('este es el contenido del directorio:', filesDirectory);
  //       if (filesDirectory.length > 0) {
  //       console.log('globalFiles', filesDirectory);
  //       pathAbsolute(imputRoute);
  //           /* ESTA ES LA SECCION QUE ME RETORNA UNDEFINED*/
  //       console.log('archivos recursivos TOTALES', getFiles(imputRoute));
  //       }
  //     } 
  // return ;
  // };

// });


const files = fs.readdirSync(pathAbs).filter(file => isFileMd(file));
    console.log('files', files);
    
    files.forEach((file) => {
      const filePath = path.join(pathAbs, file);
      const fileContent = fs.readSync(filePath, 'utf8');
      const fileLinks = getLinks(fileContent);
      arrFiles.push(fileLinks);
    });



    linksPromises = [];
  arrayPathAbs.forEach((file) => {
    linksPromises.push(getLinksMd(file));
    const arrayLinks = Promise.all(linksPromises).then((links) => {
    console.log('links encontrados INTERNAL: ', links);
    return links;
  });
    // console.log('arrayLinks', arrayLinks);
    // // return arrayLinks;
    // resolve(links);
  });


  

  // pathAbs.forEach((file) => {
  // filesPromises.push(getLinks(file));
  // console.log('fileprimises', filesPromises);
  // return Promise.all(filesPromises)
  // .then(filesPromises => {
  //     const links = filesPromises.map(file => {
  //     getLinks(file);
  //     });
  //     console.log('links encontrados: ', links);
  //     pathAbs.forEach((file) => filesPromises.push(getLinks(file)));
  //   })



//  pathAbs.forEach(file => {
//     filesPromises.push(getLinks(file));
//   });
//   Promise.all(filesPromises).then(links => {
//      links.forEach(element => getLinks(element));
//       // const linkName = link.match(/\[.*\]/)[0].replace(/\[|\]/g, '');
//       // const linkUrl = link.match(/\(.*\)/)[0].replace(/\(|\)/g, '');
//       // return {
//       //   text: linkName,
//       //   url: linkUrl,
//       //   file: fileLinks,
//       // };
//     });
//     console.log('Destructure', arrayLinksStructure);
//     return arrayLinksStructure;


  //     };
  // pathAbs.forEach((file) => filesPromises.push(getLinks(file)));
  // return filesPromises;
// };

// console.log('filesPromises', filesPromises);
// console.log('getLinksFiles', getLinksFiles(filesPromises));

// seccion linea 56 de getFiles
// if(filesDirectory.length > 0){
//   console.log('filesDirectory', filesDirectory);
//   // let filesDirectoryPromises = [];
//   // filesDirectory.map((file) => {
//   //   filesDirectoryPromises.push(getLinksMd(pathAbs + '/' + file));
//   // });
//   // Promise.all(filesDirectoryPromises).then((arrayLinks) => {
//   //   console.log('arrayLinks', arrayLinks);
//   //   arrayLinks.map((links) => {
//   //     getFiles(pathAbs);
//   //     getLinksMd(pathAbs);
//   //     console.log('links', links);
//   //   });
//   // });
//   /*opcion2*/
//   // console.log('filesDirectory', filesDirectory);
//   // getFiles(pathAbs);
      
//   // getLinksMd(file);

//   //  getLinksFiles(filesDirectory);
//   // getLinksMd(pathAbs);
//   // console.log('Hay archivos .md en el directorio');
// } else


// // /* ---------- Obtener links array de archivos .md ---------- */
// const getLinksFiles = (pathAbs) => new Promise((resolve, reject) => {
//   // pathAbs = pathAbs.replace(/\\/g, '/');
//   let fileLinks = pathAbs;
//   fs.readFile(fileLinks, 'utf-8', (error, data) => {
//     data = [...globalFiles].filter(file => isFileMd(file) === true);
//     console.log('data', data);
//     data.forEach((file) => {
//       const regularExpression = /\[([^\[]+)\](\(.*\))/g;
//       const internalLinks = data.match(regularExpression);
//       console.log('links encontrados INTERNAL: ', internalLinks);
//       if (error) {
//         reject(new Error(`${error.code}, ' ❌ Error de lectura del archivo ${file}'`));
//       } else {
//         getLinksMd(file).then((links) => {
//         resolve(links);
//         console.log('links encontrados INTERNAL: ', links);
//       });
//       // resolve(links);
//       }
//     });
//   });
// });



/*OPTIONS*/
// if (options === '--v' || options === '--validate') {
        //   return Promise.all(
        //     arrayLinksStructure.map(link => {
        //     return validate(link.url).then(response => {
        //       return {
        //         text: link.text,
        //         url: link.url,
        //         file: link.file,
        //         status: response.status,
        //         str: 'OK',
        //       };
        //     }).catch(error => {
        //       return {
        //         text: link.text,
        //         url: link.url,
        //         file: link.file,
        //         status: error.response.status,
        //         str: 'Fail',
        //       }
        //     });
            
        //   })
        //   ).then(arrayLinksStructure => {
        //     return arrayLinksStructure;
        //   });


        /*AQUI FUNCIONANDO*/
        // let globalFiles = [];
// const getFiles = (pathAbs, globalFiles) => {
// return new Promise((resolve) => {
//     // let arrFiles = [];
    
//     const files = fs.readdirSync(pathAbs);  
//     files.forEach(file => {
//         const filePath = path.join(pathAbs, file); 
//         // console.log('filePath', filePath);
//         if (isFileMd(filePath)) {
//         // globalFiles.push(filePath);
//         } else if (isDirectory(filePath)) {
//           getFiles(filePath , globalFiles);
//         }
//         });
        
//         // console.log('arrayFiles', arrFiles);
//         Promise.all(arrFiles).then((files) => {
//           console.log('files', files);
//           globalFiles = files;

//           if (globalFiles.length > 0) {
//             getLinksFiles(globalFiles);
//             resolve(globalFiles);
//           } else {
//             console.log('No hay archivos .md en el directorio');
            
//           }
//           // resolve(files)
//           // console.log('globalFilesRESOLVE ', resolve(globalFiles));
//         });
        
//     });
//   };   
