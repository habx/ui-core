declare module 'color-parse' {
  export type ParsedColor = {
    space: 'rgb'
    values: [number, number, number]
    alpha: number
  }

  const Module: (color: string) => ParsedColor

  export default Module
}
