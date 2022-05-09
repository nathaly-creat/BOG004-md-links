# Md-Links. 


Librería que permite extraer y validar links en archivos markdown (.md), obteniendo estadísticas de links totales, únicos y rotos.



# Diagrama de Flujo
[Diagrama de Flujo](https://www.figma.com/file/3wXsiTaU1mi2sTTKcMw5V2/Untitled?node-id=0%3A1)

# 1- CLI


npm i md-links-nathaly-creat

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
    [{ href, text, file, }]

![validateFalse](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1652117108/validate_false_ryby7p.png)

**Con [options]:**
----
- --validate o --v:

       - Validará cada link dentro del archivo.
       - Retornará un reporte con los links validados. 
       - El reporte arrojara: Mensaje (str) de OK o FAIL, estado del link (HTTP).

       Reporte se corresponde a:
       [{ href, text, file, status, str, }]

    ![trueAndStats](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1652117441/validate_true_--v_hne3ha.png)


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




### *Estadísticas del archivo markdown:*

-  --stats o --s :

       - Obtendrá el total de links dentro del archivo.
       - Genera un reporte de la cantidad de links únicos y totales dentro del archivo markdown.

       Reporte:

       Total: #
       Unique: #


![Stats](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1652117108/stadisticas_validate_false_e9kkx4.png)


↪️  --validate --stats o --v --s:
       - Validará cada link dentro del archivo.
       - Podras tener toda la informacion sobre las estadísticas --stats y los links rotos dentro del archivo. 
        Reporte:

       Total: #
       Unique: #
       Broquen: #

![broquen](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1652117108/validate_mas_stats_c1tudi.png)


# Ayuda de CLI

Puede ingresar el siguiente comando en la terminal.

Ejemplo:
md-Links means --h

![Ayuda](https://res.cloudinary.com/dtaq1ip2g/image/upload/v1652117860/ayuda_yakqvm.png)

# Desarrollado por Nathaly Huerta.