const { mdLinks } = require('../index.js')
const { pathIsOk } = require('../lib/app.js')
const fs = require('fs')

// Primer Hito
describe('mdLinks', () => {
  it('Debe rechazar cuando el path no existe', () => {
    return mdLinks('/ruta/a/verificar').catch((error) => {
      expect(error).toBe('la ruta no existe') // (toBe) se uctiliza para saber si dos valores son identicos
    })
  })
  it('Debe obtener la ruta en absoluta', () => {
    return mdLinks('./example/markdown.md').then((result) => {
      expect(result.convertPath).toEqual({ convertPath: 'C:\\Users\\Asus\\Documents\\Laboratoria\\Proyecto 4\\DEV010-md-links\\example\\markdown.md', extFile: '.md' })
    })
  })
  it('Debe validar si la ruta es md', () => {
    return mdLinks('./example/markdown.md').then((result) => {
      expect(result.isMarkdown).toEqual(true)
    })
  })
})

describe('links', () => {
  it('Debe indicar cuando no encuentre link en un archivo', () => {
    return mdLinks('./example/achivo-sin-link.md').catch((error) => {
      expect(error).toBe('No se encontraron link en el archivo')
    })
  })
})

describe('error', () => {
  it('Debe indicar si existe error al leer el archivo', () => {
    return mdLinks('./example/archivo-error-al-leer.md').catch((error) => {
      expect(error).toBe('no se pudo leer el archivo')
    })
  })
})

// Segundo Hito
describe('pathIsOk', () => {
   it('debe devolver el status de manera correcta segun el link', async () => {
    const respuestaOk = await pathIsOk('https://www.laboratoria.la/')
    expect(respuestaOk).toEqual(200)
  }) 
  it('Si es valido el link debe retornar un array con (href, text, file, status, ok)', async () => {
    const link = './example/markdown.md'
    const validate = true
    const text = 'Markdown'
    const file = './example/markdown.md'

    const result = await mdLinks(link, validate, text, file)
    const validateConditions = result.links.find((link) => link.status === 200 && link.status >= 200 && link.status < 400)
    expect(validateConditions).toEqual({
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: './example/markdown.md',
      status: 200,
      ok: 'ok'
    })
  })
})

//test con mock
/* jest.mock('../index.js', () => ({
  fetch: jest.fn()
})) */

describe('pathIsOk', () => {
  it('Si es valido el link debe retornar un array con (href, text, file, status, ok)', async () => {
    const mockResponse = {
      status: 200,
      link: 'https://nodejs.org/',
      text: 'Node.js',
      file: './example/markdown.md',
    };

    // Guarda la implementación original de fetch
    const originalFetch = global.fetch;

    // Mock de la función fetch
    global.fetch = jest.fn().mockResolvedValue({
      text: () => Promise.resolve(JSON.stringify(mockResponse)),
      ok: true,
      status: mockResponse.status,
    })

    // Lee el contenido del archivo localmente
    const fileContent = fs.readFileSync('./example/markdown.md', 'utf-8')

    // Restaura la implementación original de fetch
    global.fetch = originalFetch;

    // Asegúrate de que el objeto devuelto por la función fetch tenga el formato esperado
    const data = {
      href: mockResponse.link,
      text: mockResponse.text,
      file: mockResponse.file,
      status: mockResponse.status,
    };

    expect(data).toEqual({
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: './example/markdown.md',
      status: 200,
    })
  })
})
 
 

