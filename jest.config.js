module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/dist'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  setupFilesAfterEnv: ['./config/jest.ts'],
  collectCoverageFrom: [
    './src/**/*.ts',
    './src/**/*.tsx',
    '!src/**/index.ts',
    '!src/**/*.style.ts',
    '!src/**/*.style.tsx',
    '!src/**/*.data.ts',
    '!src/**/*.data.tsx',
    '!src/**/*.stories.ts',
    '!src/**/*.stories.tsx',
  ],
}
