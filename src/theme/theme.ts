import { isFunction } from '../_internal/data'
import { themeAccessor } from '../_internal/types'
import palette from '../palette'

import DesignSystemTheme from './theme.interface'

export const BASE_THEME: DesignSystemTheme = {
  name: 'light',

  shadowLight: '0 4px 12px 0 rgba(80, 79, 79, 0.24)',
  shadow: '0 2px 6px 0 rgba(2, 26, 60, 0.16)',
  shadowStrong: '0 2px 6px 0 rgba(153, 117, 113, 0.16)',

  textColor: palette.darkBlue[900],
  warningColor: palette.orange[500],
  white: '#fff',

  titleFont: 'EuclidCircularB',
  textFont: 'EuclidCircularB',

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
    input: {
      background: palette.darkBlue[200],
      border: palette.darkBlue[300],
      placeholder: palette.darkBlue[600],
      disabledPlaceholder: palette.darkBlue[400],
    },
  },
}

const getter = (
  themeKey: keyof DesignSystemTheme | 'inherit',
  config: { propName?: string; dynamic?: boolean } = {}
): themeAccessor => {
  const { propName = 'color' } = config

  return (props, runtimeConfig: { isRecursive?: boolean } = {}) => {
    const { theme = {} as { designSystem: DesignSystemTheme } } = props
    const designSystem = theme.designSystem || BASE_THEME

    if (propName && props[propName] && !runtimeConfig.isRecursive) {
      if (isFunction(props[propName])) {
        return props[propName](props, { isRecursive: true })
      }

      return props[propName]
    }

    if (themeKey === 'inherit') {
      return 'inherit'
    }

    return designSystem[themeKey]
  }
}

const colorGetter = (
  colorName: 'primary' | 'secondary' | 'input',
  config: { dynamic?: boolean; variation?: string } = {}
): themeAccessor => {
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

    const { theme = {} as { designSystem: DesignSystemTheme } } = props
    const designSystem = theme.designSystem || BASE_THEME

    return designSystem.colors[getColorName()][variation]
  }
}

const theme = {
  get: getter,
  color: colorGetter,
  raw: BASE_THEME,
}

export default theme
