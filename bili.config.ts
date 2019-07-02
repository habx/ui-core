import { Config } from 'bili'

const config: Config = {
  plugins: {
    'multi-input': true,
  },

  input: ['src/index.ts', 'src/icons/**/*.tsx'],
  output: {
    format: ['cjs', 'esm'],
  },
}

export default config
