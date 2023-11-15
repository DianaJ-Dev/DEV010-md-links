// vivira MD-LINKS
const fs = require('fs') // file -system modulo que permite leer archivos

const { pathIsAbsolute, isMarkdown, pathIsOk } = require('./lib/app.js')

const mdLinks = (path, validate = false) => { // (false) valor predeterminado de validate
// console.log(Path)
return new Promise((resolve, reject) => { // Creo nueva promesa
  if (fs.existsSync(path)) { // (existsSync)es un modulo para verificar si existe un archivo
    const convertPath = pathIsAbsolute(path) // Obtiene Ruta absoluta
    const isMarkdownPath = isMarkdown(path) // valida si la ruta es markdown

    if (isMarkdownPath) {
      fs.readFile(path, 'utf8', (error, data) => { // leer el archivo (error, data) es una funcion que devuelve una llamada
        if (error) {
          reject('no se pudo leer el archivo')
        } else {
          const urlRex = /https?:\/\/[^\s]+/g // Utilizo expresiones regulares para identificar links
          const links = data.match(urlRex) // (match) lo utilizo para buscar en el archivo
          if (links) {
            const file = path
            const textRex = /\[([^\]]+)\]\([^)]+\)/g // ([^\]]+) captura texto entre corchetes seguidos de  parentesis
            const textMatches = data.match(textRex) // se verifica si hay coincidencias entre el texto entre links y lo que esta dentro del corchete
            // console.log(textMatches)
                if (validate) {
                  const linkPromises = links.map((link, index) => {
                    link = link.slice(0, -2)
                    const textMatch = textMatches[index].match(/\[([^\]]+)\]/) // busca y captura el texto entre corchetes
                    const text = textMatch ? textMatch[1] : '' 
                    return pathIsOk(link).then((status) => {
                    if (status >= 200 && status < 400) {
                      return {
                        href: link,
                        text,
                        file,
                        status,
                        ok: 'ok'
                      };
                    } else {
                      return {
                        href: link,
                        text,
                        file,
                        status,
                        fail: 'fail'
                      }
                    }
                  })
                })

                Promise.all(linkPromises).then((linkObjects) => {
                  resolve({
                    convertPath,
                    isMarkdown: true,
                    content: data,
                    links: linkObjects
                  })
                })
              } else {
                const linkObjects = links.map((link, index) => {
                  link = link.slice(0, -2);
                  const textMatch = textMatches[index].match(/\[([^\]]+)\]/);
                  const text = textMatch ? textMatch[1] : ''
                  return {
                    href: link,
                    text,
                    file
                  };
                });

                resolve({
                  convertPath,
                  isMarkdown: true,
                  content: data,
                  links: linkObjects
                })
              }
            } else {
              reject('No se encontraron link en el archivo')
            }
          }
        })
      }
    } else {
      reject('la ruta no existe')
    }
  })
}

module.exports = {
  mdLinks
}