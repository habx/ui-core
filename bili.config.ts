import { Config } from 'bili'

const config: Config = {
  input: './dist/index.js',
  output: {
    format: ['cjs', 'esm'],
  },
}

export default config
