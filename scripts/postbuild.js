/* eslint-disable no-console */

const fs = require('fs')
const omit = require('lodash/omit')
const pick = require('lodash/pick')
const path = require('path')

const PEER_DEPENDENCIES = ['react', 'react-dom', 'styled-components']

const transfomPackageJSON = packageJSON => ({
  ...omit(packageJSON, ['scripts', 'devDependencies', 'jest']),
  main: './index.js',
  module: './index.esm.js',
  types: './typings/index.d.ts',
  peerDependencies: pick(packageJSON.dependencies, PEER_DEPENDENCIES),
  dependencies: omit(packageJSON.dependencies, PEER_DEPENDENCIES),
})

const duplicatePackageJSON = () => {
  const packageJSON = require('../package.json')

  const value = transfomPackageJSON(packageJSON)

  fs.writeFileSync('./dist/package.json', JSON.stringify(value, null, 2))
  console.log(`package.json duplicated`)
}

const duplicateReadme = () => {
  fs.copyFileSync(
    path.resolve(__dirname, '../README.md'),
    path.resolve(__dirname, '../dist/README.md')
  )
  console.log('README.md duplicated')
}

const postBuild = () => {
  duplicatePackageJSON()
  duplicateReadme()
}
postBuild()
