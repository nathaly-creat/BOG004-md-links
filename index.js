// const pathAbsolute = (imputRoute) => path.isAbsolute(imputRoute) ? imputRoute : path.resolve(imputRoute);
// console.log(pathAbsolute('learnyounode/baby-steps.js'));


//modulos de Node
const fs = require('fs');//función sistem
const process = require('process');// provee información
const path = require('path');// provee información

// captura de argumentos desde la terminal.
const args = process.argv;
console.log('ARGS', args[2]);


const rutaArgumento = args[2];

const extension = path.extname('prueba.md');
const dirName = path.dirname(__dirname); //El dirname obtiene la ruta
const fileName = path.dirname(__filename); //__filename es el archivo actual en el que estoy

// const archivos = []; aqui debo colocar los archivos que quiero leer

const filesList = fs.readdirSync(__dirname+args[2], 'utf8', (err, data) => {
  console.log('hola');
    if (err) throw err;
    console.log('este es el contenido del directorio:', data);
});
filesList.forEach(element => {
  console.log(element);
});

// // Calling fs.Stats isDirectory()
fs.stat(path.normalize(__dirname+rutaArgumento), (err, stats) => {
    if (err) {
        console.log('no es una ruta válida');
        return;
    } else {
      const isDirectory = stats.isDirectory();
      const isFile = stats.isFile();
      if (isDirectory) {
          console.log('Es un directorio', isDirectory);
      } else if (isFile) {
          console.log('Es un archivo');
      };
    }
});




