import parse from 'color-parse'

export type ParsedColor = {
  space: 'rgb'
  values: [number, number, number]
  alpha: number
}

export type Color = string | ParsedColor

export const parseColor = (color: Color): ParsedColor => {
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

export const isColorDark = (color: Color): boolean => {
  const { values, alpha } = parseColor(color)
  const colorDarkness = (values[0] + values[1] + values[2]) / alpha

  return colorDarkness < (255 * 3) / 2
}
