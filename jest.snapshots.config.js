module.exports = {
  transform: {
    '.(ts|tsx|json|js)': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/dist'],
  testRegex: 'runner.js',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
}
