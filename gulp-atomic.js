const fs = require('fs')
const path = require('path')
const url = require('url')
const through = require('through2')
const Vinyl = require('vinyl')
const Handlebars = require('handlebars')

// read and compile the template ahead of time
const templateSource = fs.readFileSync(path.resolve(__dirname, 'gulp-atomic.hbs'), 'utf8')
const template = Handlebars.compile(templateSource)

/**
 * @param {string} name - output file name
 * @returns transform stream for usage with gulp
 */
module.exports = name => {
  const elements = new Map()

  // collect files from the stream
  function transform (file, enc, cb) {
    if (file.isNull()) {
      cb()
      return
    }
    const id = normalizeFilename(file.relative)
    const content = file.contents.toString()
    const uses = getIncludes(content)
    const usedBy = []
    const title = removeFolder(file.relative);
    elements.set(id, {title, content, uses, usedBy})
    cb()
  }

  function flush (cb) {
    // find reverse dependencies
    for (const [id, element] of elements) {
      for (const dep of element.uses) {
        const depElement = elements.get(dep)
        if (depElement) depElement.usedBy.push(id)
      }
    }

    const output = template({
      elements: Array.from(elements, ([id, element]) => ({id, ...element}))
    })

    const file = new Vinyl()
    file.path = path.resolve(name)
    file.contents = Buffer.from(output)

    // emit new file
    this.push(file)
    cb()
  }

  return through.obj(transform, flush)
}

/**
 * Find names of included files by scanning the file's content
 * @param {string} str - file content
 * @returns {Array} array of included file names
 */
function getIncludes (str) {
  const re = /{% include (\S+)/g // 'g' flag is required
  const includes = []
  while (true) {
    const match = re.exec(str)
    if (!match) break
    includes.push(normalizeFilename(match[1]))
  }
  return includes
}

/**
 * Transform file name into a string to be used as id/href
 * @param {string} filename
 * @returns {string}
 */
function normalizeFilename (filename) {
  return url.parse(filename.replace(/\.html$/, '')).path
}

function removeFolder (filename) {
  return url.parse(filename.replace('1-atoms/', '')).path
}
