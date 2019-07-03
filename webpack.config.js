const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')

const isProduction = process.env.WEBPACK_MODE === 'production'


module.exports = {
  entry: path.resolve(__dirname, 'src'),

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: '@habx/lib-design-system',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'styled-components': path.resolve(
        __dirname,
        './node_modules/styled-components'
      ),
    },
  },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },

  plugins: [new ForkTsCheckerWebpackPlugin()],

  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'StyledComponents',
      root: 'StyledComponents',
    },
  },
}
