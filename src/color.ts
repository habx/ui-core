import parse, { ParsedColor, ParsedColorValue } from 'color-parse'

export type Color = string | ParsedColor

const parseColor = (color: Color): ParsedColor => {
  if (color == null) {
    throw Error('Undefined / null color given to parseColor')
  }

  if ((color as ParsedColor).space) {
    return color as ParsedColor
  }

  return parse(color as string)
}

export const stringifyColor = (color: Color): string => {
  if (color == null) {
    throw Error('Undefined / null color given to parseColor')
  }

  if ((color as ParsedColor).space) {
    const parsedColor = color as ParsedColor

    if (parsedColor.space === 'rgb') {
      return `rgba(${[...parsedColor.values, parsedColor.alpha].join(',')})`
    }

    throw Error(
      'stringifyColor only handle colors with an rgb space (hex, rgb, rgba)'
    )
  }

  return color as string
}

export const applyOpacityToColor = (
  color: Color,
  opacity: number
): ParsedColor => {
  const parsedColor = parseColor(color)

  return {
    ...parsedColor,
    alpha: parsedColor.alpha * opacity,
  }
}

export const lightenColor = (color: Color, ratio: number): ParsedColor => {
  const parsedColor = parseColor(color)

  if (parsedColor.space === 'rgb') {
    return {
      ...parsedColor,
      values: parsedColor.values.map(
        (value) => value + (255 - value) * ratio
      ) as ParsedColorValue,
    }
  }

  throw Error(
    'lightenColor only handle colors with an rgb space (hex, rgb, rgba)'
  )
}

export const isColorDark = (color: Color): boolean => {
  const { values, alpha } = parseColor(color)
  const colorDarkness = (values[0] + values[1] + values[2]) / alpha

  return colorDarkness < (255 * 3) / 2
}
