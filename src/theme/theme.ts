import palette from '../palette'

import DesignSystemTheme, {
  ColorFamilies,
  ColorVariations,
  Fonts,
  Shadows,
  TextColorVariations,
  GetterProps,
} from './theme.interface'

export const BASE_THEME: DesignSystemTheme = {
  colors: {
    primary: {
      base: palette.blue[600],
      hover: palette.blue[700],
      focus: palette.blue[800],
    },
    secondary: {
      base: palette.darkBlue[900],
      hover: palette.darkBlue[800],
      focus: palette.darkBlue[700],
    },
    warning: {
      base: palette.orange[700],
      hover: palette.orange[700],
      focus: palette.orange[800],
    },
  },

  textColors: {
    base: palette.darkBlue[900],
    title: palette.darkBlue[900],
    placeholder: palette.darkBlue[600],
    disabledPlaceholder: palette.darkBlue[400],
  },

  fonts: {
    title: 'EuclidCircularB, sans-serif',
    text: 'EuclidCircularB, sans-serif',
  },

  shadows: {
    light: '0 4px 12px 0 rgba(80, 79, 79, 0.24)',
    base: '0 2px 6px 0 rgba(2, 26, 60, 0.16)',
    strong: '0 2px 6px 0 rgba(153, 117, 113, 0.16)',
  },
}

const getTheme = (props: GetterProps): DesignSystemTheme => {
  const { theme: { designSystem = BASE_THEME } = {} } = props

  return designSystem
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
  colorName: keyof ColorFamilies,
  config: { dynamic?: boolean; variation?: keyof ColorVariations } = {}
) => {
  const { dynamic = false, variation = 'base' } = config

  return props => {
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

    return getTheme(props).colors[getColorName()][variation]
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
