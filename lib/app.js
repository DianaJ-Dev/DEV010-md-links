// Pequeñas funciones
const path = require('path')

// OBTENER RUTA ABSOLUTA
const pathIsAbsolute = (Path) => {
const convertPath = path.resolve(Path) // Convierte Ruta en absoluta
const extFile = path.extname(convertPath) // (extname)Devuelve la extencion de la ruta convertida
return { convertPath, extFile }
}

// VALIDA SI LA RUTA ES MARKDOWN
const isMarkdown = (Path) => {
const fileMarkdown = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text']
const extFile = path.extname(Path)
return fileMarkdown.includes(extFile)
}

// VALIDA ENLACES
const pathIsOk = (Path) => {
return fetch(Path) // (fetch) API que permite realizar solicitudes de HTTP
  .then(function (response) {
    return response.status
  })
  .catch((error) => {
    
  })
}



module.exports = {
  pathIsAbsolute, isMarkdown, pathIsOk
}
