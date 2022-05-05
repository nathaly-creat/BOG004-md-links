# Md-Links. 


Librería que permite extraer y validar links en archivos markdown (.md), obteniendo estadísticas de links totales, únicos y rotos.

# 1- CLI


*COLOCAR EXTENSION NPM*

# 1.2 Guía de Funcionalidad.



Recibe como argumento una path/ruta de un archivo'.md' o un directorio que contenga archivo '.md'. Adicional en la terminal se recive opciones a ejecutar. 

La Librerría cuenta con un comando de ayuda identificado en la opción como --h o --help en idioma español.

En la terminal se ejecuta de la siguiente manera: 

     `$ md-links [path] [options]`

Nota: no es obligatorio usar [] es identificador de posición.


╭─────────────────────
│    Tus opciones son las siguientes:
╰─────────────────────


 **Sin [options]:**
 ----
- Se muestra un reporte de todos los enlaces de un archivo markdown.

Con `validate:false` :

    - `href`: URL encontrada.
    - `text`: Texto que aparecía dentro del link (`<a>`).
    - `file`: Ruta del archivo donde se encontró el link.

    Reporte:
    [{ 
      href, 
      text, 
      file,
    }]

**Con [options]:**
----
- --validate o --v:

       - Validará cada link dentro del archivo.
       - Retornará un reporte con los links validados. 
       - El reporte arrojara: Mensaje (str) de OK o FAIL, estado del link (HTTP).

       Reporte se corresponde a:
       [{ 
         href, 
         text, 
         file,
         status,
         str,
       }]

### *Estadísticas del archivo markdown:*

-  --stats o --s :

       - Obtendrá el total de links dentro del archivo.
       - Genera un reporte de la cantidad de links únicos y totales dentro del archivo markdown.

       Reporte:

       Total: #
       Unique: #

↪️  --validate --stats o --v --s:
       - Validará cada link dentro del archivo.
       - Podras tener toda la informacion sobre las estadísticas --stats y los links rotos dentro del archivo. 


### 1) JavaScript API

El módulo debe poder **importarse** en otros scripts de Node.js y debe ofrecer la
siguiente interfaz:

#### `mdLinks(path, options)`

##### Argumentos

* `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.
Si la ruta pasada es relativa, debe resolverse como relativa al directorio
desde donde se invoca node - _current working directory_).
* `options`: Un objeto con **únicamente** la siguiente propiedad:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

La función debe **retornar una promesa** (`Promise`) que **resuelva a un arreglo**
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades

Con `validate:false` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

Con `validate:true` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.

#### Ejemplo (resultados como comentarios)

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);
```

### 2) CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la **terminal**:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
