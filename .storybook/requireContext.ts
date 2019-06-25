const requireContext = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
  const fs = require('fs')
  const path = require('path')
  // @ts-ignore
  if (typeof require.context !== 'undefined') {
    // @ts-ignore
    return require.context(base, scanSubDirectories, regularExpression)
  }

  const files = {}

  function readDirectory(directory) {
    fs.readdirSync(directory).forEach((file) => {
      const fullPath = path.resolve(directory, file)

      if (fs.statSync(fullPath).isDirectory()) {
        if (scanSubDirectories) readDirectory(fullPath)

        return
      }

      if (!regularExpression.test(fullPath)) return

      files[fullPath] = true
    })
  }

  readDirectory(path.resolve(__dirname, base))

  function Module(file) {
    return require(file)
  }

  // @ts-ignore
  Module.keys = () => Object.keys(files)

  return Module
}

module.exports = requireContext
