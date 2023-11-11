# mdlinks2d

## Índice

* [1. mdlinks2d](#1-mdlinks2d)
* [2. Uso](#2-Uso)
* [3. Requerimientos del sistema ](#3-Requerimientos-del-sistema )

***

## 1. mdlinks2d

"mdlinks2d" es una biblioteca que posibilita la extracción de enlaces desde
un archivo Markdown. Esta herramienta nos informa sobre la validez de cada
enlace, permitiéndonos identificar aquellos que no funcionan correctamente. 
Con esta biblioteca, podemos destacar la cantidad total de enlaces en el archivo, 
cuántos de ellos están operativos y cuántos están duplicados. 

## 2. Uso

### Validar enlaces

Para validar los enlaces lo único que debes hacer es enviar la ruta de tu archivo
Markdown de la siguiente manera, esto te traerá los enlaces que existen en la ruta
ingresada.

Ejemplo:

<img width="300" alt="validar enlaces" src="https://github.com/DianaJ-Dev/DEV010-md-links/blob/feature/funciones-Hito1/Imagenes/Mostrar%20links.png">
<img width="500" alt="respuesta validar enlaces" src="https://github.com/DianaJ-Dev/DEV010-md-links/blob/feature/funciones-Hito1/Imagenes/Mostrar%20links%202.png">

### Validar si el link funciona 

Para validar si el link funciona puedes ejecutar 
mdlinks2d ./example/markdown.md --validate, esto te traerá el link y 
te indicará cuál funciona de manera correcta y cuál no. 

Ejemplo:

<img width="500" alt="validar si el link funciona" src="https://github.com/DianaJ-Dev/DEV010-md-links/blob/feature/funciones-Hito1/Imagenes/--validate%202.png">

### Número de links encontrados 

Enviando el comando mdlinks2d ./example/markdown.md --stats podrás validar cuantos
links en total encuentras en el archivo que envíes, también te indicara un total 
de links que no estén repetidos.

Ejemplo:

<img width="300" alt="Número de links encontrados " src="https://github.com/DianaJ-Dev/DEV010-md-links/blob/feature/funciones-Hito1/Imagenes/--stats.png">
<img width="500" alt="Número de links encontrados " src="https://github.com/DianaJ-Dev/DEV010-md-links/blob/feature/funciones-Hito1/Imagenes/--%20stats.png">

###  Número de links encontrados y número de links que no funcionan

Con el comando mdlinks2d ./example/markdown.md --validate --stats además de
traer la cantidad total de los links, también  te indica cuantos de los
links que están en el archivo no funcionan.

Ejemplo: 

<img width="300" alt="Número de links encontrados " src="https://github.com/DianaJ-Dev/DEV010-md-links/blob/feature/funciones-Hito1/Imagenes/--validate%20--stats.png">
<img width="500" alt="Número de links encontrados " src="https://github.com/DianaJ-Dev/DEV010-md-links/blob/feature/funciones-Hito1/Imagenes/--validate%20--%20stats.png">

## 3. Requerimientos del sistema 

### Node.js

- [ ] **Instalar y usar módulos con npm**
