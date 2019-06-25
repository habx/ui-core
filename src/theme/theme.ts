import { isFunction } from '../_internal/data'
import { themeAccessor } from '../_internal/types'

import DesignSystemTheme, { DesignSystemPalette, DesignSystemTypography } from './theme.interface'

const TYPOGRAPHY: DesignSystemTypography = {

}

const PALETTE: DesignSystemPalette = {
  darkBlue900: '#061A3C',
  darkBlue800: '#354661',
  darkBlue700: '#606D82',
  darkBlue600: '#717C90',
  darkBlue500: '#949DAB',
  darkBlue400: '#B8BEC7',
  darkBlue300: '#DBDEE3',
  darkBlue200: '#F3F4F5',
  darkBlue100: '#F8F8F9',

  blue900: '#053061',
  blue800: '#034685',
  blue700: '#025BAA',
  blue600: '#0071CE',
  blue500: '#4094DA',
  blue400: '#80B8E7',
  blue300: '#BFDCF3',
  blue200: '#E6F1FA',
  blue100: '#F7FBFE',

  lightBlue900: '#254162',
  lightBlue800: '#456887',
  lightBlue700: '#6490AD',
  lightBlue600: '#84B7D2',
  lightBlue500: '#A3DEF8',
  lightBlue400: '#D1EFFC',
  lightBlue300: '#E8F7FD',
  lightBlue200: '#F6FCFE',
  lightBlue100: 'NONE',

  yellow900: '#44472D',
  yellow800: '#83741E',
  yellow700: '#C1A10F',
  yellow600: '#FFCE00',
  yellow500: '#FFDA40',
  yellow400: '#FFE780',
  yellow300: '#FFF3BF',
  yellow200: '#FFFAE6',
  yellow100: 'NONE',

  orange900: '#44282D',
  orange800: '#83351E',
  orange700: '#A83B0E',
  orange600: '#C1430F',
  orange500: '#FF5100',
  orange400: '#FF7D40',
  orange300: '#FFA880',
  orange200: '#FFD3BF',
  orange100: '#FFEEE6',

  green900: '#0B3D5A',
  green800: '#0F6078',
  green700: '#148497',
  green600: '#18A7B5',
  green500: '#1DCAD3',
  green400: '#68DCE2',
  green300: '#B4EDF0',
  green200: '#E8FAFB',
  green100: 'NONE',
}

const THEME: DesignSystemTheme = {
  ...PALETTE,

  name: 'light',

  shadowLight: '0 4px 12px 0 rgba(80, 79, 79, 0.24)',
  shadow: '0 2px 6px 0 rgba(2, 26, 60, 0.16)',
  shadowStrong: '0 2px 6px 0 rgba(153, 117, 113, 0.16)',

  textColor: PALETTE.darkBlue900,
  warningColor: PALETTE.orange500,

  titleFont: 'EuclidCircularB',
  textFont: 'EuclidCircularB',
}

const getter = (
  themeKey: keyof DesignSystemTheme | 'inherit',
  config: { propName?: string; dynamic?: boolean } = {}
): themeAccessor => {
  const { propName = 'color', dynamic = false } = config

  return (props, runtimeConfig: { isRecursive?: boolean } = {}) => {
    const { theme = {} as { designSystem: DesignSystemTheme } } = props
    const designSystem = theme.designSystem || THEME

    if (propName && props[propName] && !runtimeConfig.isRecursive) {
      if (isFunction(props[propName])) {
        return props[propName](props, { isRecursive: true })
      }

      return props[propName]
    }

    if (dynamic && props.warning) {
      return designSystem.warningColor
    }

    if (themeKey === 'inherit') {
      return 'inherit'
    }

    return designSystem[themeKey]
  }
}

const theme = {
  get: getter,
  light: THEME,
}

export default theme
