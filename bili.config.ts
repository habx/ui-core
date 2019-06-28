import { Config } from 'bili'

const config: Config = {
  plugins: {
    babel: false,
    typescript2: {
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
          declarationMap: false,
        },
      },
    },
    'multi-input': true,
  },

  input: ['src/index.ts', 'src/icons/**/*.tsx'],
  output: {
    format: ['cjs', 'esm'],
  },
}

export default config
