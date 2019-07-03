import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import localResolve from 'rollup-plugin-local-resolve'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const plugins = [
  globals(),
  builtins(),
  babel({
    exclude: 'node_modules/**',
    extensions,
  }),
  localResolve(),
  resolve({
    module: true,
    jsnext: true,
    main: true,
    preferBuiltins: true,
    browser: true,
    modulesOnly: true,
    extensions,
  }),
  terser(),
  commonjs(),
  filesize(),
]

const createConfig = filename => ({
  input: `src/${filename}.ts`,
  output: [
    {
      file: `./${filename}.js`,
      format: 'umd',
      name: 'example-rollup-library',
    },
    {
      file: `./${filename}.cjs.js`,
      format: 'cjs',
      name: 'example-rollup-library',
    },
    {
      file: `./${filename}.esm.js`,
      format: 'es',
    },
  ],
  plugins,
})

const configs = ['index'].map(filename => createConfig(filename))

export default configs
