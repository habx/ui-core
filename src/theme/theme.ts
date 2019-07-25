import colorUtils from 'color'

import { isNil } from '../_internal/data'

import { BASE_THEME } from './theme.data'
import DesignSystemTheme, {
  ColorFamilies,
  ColorVariations,
  Fonts,
  Shadows,
  TextColorVariations,
  GetterProps,
} from './theme.interface'

const getTheme = (
  props: GetterProps,
  { useRootTheme }: { useRootTheme?: boolean } = {}
): DesignSystemTheme => {
  const {
    theme: { designSystem = BASE_THEME, designSystemRoot = BASE_THEME } = {},
  } = props

  return useRootTheme ? designSystemRoot : designSystem
}

const fontGetter = (variation: keyof Fonts = 'text') => (props: GetterProps) =>
  getTheme(props).fonts[variation]

const shadowGetter = (variation: keyof Shadows = 'base') => (
  props: GetterProps
) => getTheme(props).shadows[variation]

const textColorGetter = (variation: keyof TextColorVariations = 'base') => (
  props: GetterProps
) => getTheme(props).textColors[variation]

const colorGetter = (
  colorName: keyof ColorFamilies | 'background',
  config: {
    dynamic?: boolean
    useRootTheme?: boolean
    propName?: string
    variation?: keyof ColorVariations
    opacity?: number
  } = {}
) => {
  const {
    dynamic = false,
    useRootTheme = false,
    variation = 'base',
    propName,
    opacity,
  } = config

  return props => {
    const theme = getTheme(props, { useRootTheme })

    const getColorName = () => {
      if (!dynamic) {
        return colorName
      }

      if (props.warning) {
        return 'warning'
      }

      if (props.primary) {
        return 'primary'
      }

      if (props.secondary) {
        return 'secondary'
      }

      return colorName
    }

    const getColorValue = () => {
      if (propName && !isNil(props[propName])) {
        return props[propName]
      }

      if (colorName === 'background') {
        return theme.backgroundColor
      }

      return theme.colors[getColorName()][variation]
    }

    const realOpacity = isNil(props.opacity) ? opacity : props.opacity
    const color = getColorValue()

    if (isNil(realOpacity)) {
      return color
    }

    return colorUtils(color)
      .fade(1 - realOpacity)
      .string()
  }
}

const theme = {
  color: colorGetter,
  textColor: textColorGetter,
  font: fontGetter,
  shadow: shadowGetter,
  raw: BASE_THEME,
}

export default theme
