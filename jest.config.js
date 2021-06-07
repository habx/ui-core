const defaultConfig = require('@habx/config-ci-front/jest/config')

module.exports = {
  ...defaultConfig,
  testEnvironment: 'jsdom',
}
