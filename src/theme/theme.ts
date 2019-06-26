import { isFunction } from '../_internal/data'
import { themeAccessor } from '../_internal/types'

import DesignSystemTheme, {
  DesignSystemPalette,
  Palette,
} from './theme.interface'

const PALETTE: DesignSystemPalette = {
  darkBlue: {
    900: '#061A3C',
    800: '#354661',
    700: '#606D82',
    600: '#717C90',
    500: '#949DAB',
    400: '#B8BEC7',
    300: '#DBDEE3',
    200: '#F3F4F5',
    100: '#F8F8F9',
  },
  blue: {
    900: '#053061',
    800: '#034685',
    700: '#025BAA',
    600: '#0071CE',
    500: '#4094DA',
    400: '#80B8E7',
    300: '#BFDCF3',
    200: '#E6F1FA',
    100: '#F7FBFE',
  },
  lightBlue: {
    900: '#254162',
    800: '#456887',
    700: '#6490AD',
    600: '#84B7D2',
    500: '#A3DEF8',
    400: '#D1EFFC',
    300: '#E8F7FD',
    200: '#F6FCFE',
    100: 'NONE',
  },
  yellow: {
    900: '#44472D',
    800: '#83741E',
    700: '#C1A10F',
    600: '#FFCE00',
    500: '#FFDA40',
    400: '#FFE780',
    300: '#FFF3BF',
    200: '#FFFAE6',
    100: 'NONE',
  },
  orange: {
    900: '#44282D',
    800: '#83351E',
    700: '#A83B0E',
    600: '#C1430F',
    500: '#FF5100',
    400: '#FF7D40',
    300: '#FFA880',
    200: '#FFD3BF',
    100: '#FFEEE6',
  },
  green: {
    900: '#0B3D5A',
    800: '#0F6078',
    700: '#148497',
    600: '#18A7B5',
    500: '#1DCAD3',
    400: '#68DCE2',
    300: '#B4EDF0',
    200: '#E8FAFB',
    100: 'NONE',
  },
}

export const BASE_THEME: DesignSystemTheme = {
  name: 'light',

  shadowLight: '0 4px 12px 0 rgba(80, 79, 79, 0.24)',
  shadow: '0 2px 6px 0 rgba(2, 26, 60, 0.16)',
  shadowStrong: '0 2px 6px 0 rgba(153, 117, 113, 0.16)',

  textColor: PALETTE.darkBlue[900],
  warningColor: PALETTE.orange[500],
  white: '#fff',

  titleFont: 'EuclidCircularB',
  textFont: 'EuclidCircularB',

  useArrowOnButtons: true,

  palettes: {
    primary: PALETTE.blue,
    secondary: PALETTE.yellow,
    tertiary: PALETTE.orange,
    quaternary: PALETTE.darkBlue,
  },
}

const getter = (
  themeKey: keyof DesignSystemTheme | 'inherit',
  config: { propName?: string; dynamic?: boolean } = {}
): themeAccessor => {
  const { propName = 'color', dynamic = false } = config

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

const paletteGetter = (
  paletteName: 'primary' | 'secondary' | 'tertiary' | 'quaternary',
  colorDepth: keyof Palette,
  config: { dynamic?: boolean } = {}
): themeAccessor => {
  const { dynamic = false } = config

  return props => {
    const getPaletteName = () => {
      if (!dynamic) {
        return paletteName
      }

      if (props.primary) {
        return 'primary'
      }

      if (props.secondary) {
        return 'secondary'
      }

      if (props.tertiary) {
        return 'tertiary'
      }

      if (props.quaternary) {
        return 'quaternary'
      }

      return paletteName
    }

    const { theme = {} as { designSystem: DesignSystemTheme } } = props
    const designSystem = theme.designSystem || BASE_THEME

    return designSystem.palettes[getPaletteName()][colorDepth]
  }
}

const theme = {
  get: getter,
  palette: paletteGetter,
  raw: BASE_THEME,
}

export default theme
