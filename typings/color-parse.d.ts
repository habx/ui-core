declare module 'color-parse' {
  export type ParsedColorValue = [number, number, number]

  export type ParsedColor = {
    space: 'rgb'
    values: ParsedColorValue
    alpha: number
  }

  const Module: (color: string) => ParsedColor

  export default Module
}
