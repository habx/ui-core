import { palette } from '../palette'

import { DesignSystemTheme, ThemeVariant } from './theme.interface'

const LIGHT_THEME_VARIANT: ThemeVariant = {
  colors: {
    primary: {
      calmer: palette.purple[100],
      calm: palette.purple[200],
      base: palette.purple[500],
      loud: palette.purple[700],
      louder: palette.purple[800],
      contrastText: palette.white[900],
    },
    secondary: {
      calmer: palette.white[1000],
      calm: palette.black[100],
      base: palette.black[900],
      loud: palette.black[1000],
      louder: palette.black[1000],
      contrastText: palette.white[900],
    },
    error: {
      calmer: palette.red[100],
      calm: palette.red[200],
      base: palette.red[500],
      loud: palette.red[700],
      louder: palette.red[800],
      contrastText: palette.white[900],
    },
    warning: {
      calmer: palette.purple[100],
      calm: palette.purple[200],
      base: palette.purple[500],
      loud: palette.purple[700],
      louder: palette.purple[800],
      contrastText: palette.white[900],
    },
    success: {
      calmer: palette.green[100],
      calm: palette.green[200],
      base: palette.green[500],
      loud: palette.green[700],
      louder: palette.green[800],
      contrastText: palette.white[900],
    },
  },

  typography: {
    colors: {
      title: palette.black[1000],
      button: palette.black[900],
      text: palette.black[700],
      lowContrast: palette.black[500],
    },
    font: 'EuclidCircularB, sans-serif',
  },

  neutralColor: palette.black,

  shadows: {
    flat: [],
    lower: [{ x: 0, y: 1, blur: 4, opacity: 0.2 }],
    low: [
      { x: 0, y: 2, blur: 8, opacity: 0.1 },
      { x: 0, y: 0, blur: 12, opacity: 0.06 },
    ],
    regular: [
      { x: 0, y: 4, blur: 12, opacity: 0.1 },
      { x: 0, y: 0, blur: 12, opacity: 0.06 },
    ],
    high: [
      { x: 0, y: 12, blur: 24, opacity: 0.15 },
      { x: 0, y: 0, blur: 12, opacity: 0.06 },
    ],
    higher: [
      { x: 0, y: 16, blur: 36, opacity: 0.15 },
      { x: 0, y: 0, blur: 12, opacity: 0.06 },
    ],
  },
}

const DARK_THEME_VARIANT: ThemeVariant = {
  colors: {
    primary: {
      calmer: palette.purple[100],
      calm: palette.purple[200],
      base: palette.purple[500],
      loud: palette.purple[200],
      louder: palette.purple[100],
      contrastText: palette.white[900],
    },
    secondary: {
      calmer: palette.white[100],
      calm: palette.black[200],
      base: palette.white[900],
      loud: palette.white[1000],
      louder: palette.white[1000],
      contrastText: palette.black[900],
    },
    error: {
      calmer: palette.red[800],
      calm: palette.red[700],
      base: palette.red[500],
      loud: palette.red[200],
      louder: palette.red[100],
      contrastText: palette.white[900],
    },
    warning: {
      calmer: palette.purple[800],
      calm: palette.purple[700],
      base: palette.purple[500],
      loud: palette.purple[200],
      louder: palette.purple[100],
      contrastText: palette.white[900],
    },
    success: {
      calmer: palette.green[800],
      calm: palette.green[700],
      base: palette.green[500],
      loud: palette.green[200],
      louder: palette.green[100],
      contrastText: palette.white[900],
    },
  },

  typography: {
    colors: {
      title: palette.white[900],
      button: palette.white[800],
      text: palette.white[500],
      lowContrast: palette.white[300],
    },
    font: 'EuclidCircularB, sans-serif',
  },

  neutralColor: palette.white,

  shadows: {
    flat: [],
    lower: [{ x: 0, y: 1, blur: 4, opacity: 0.2 }],
    low: [
      { x: 0, y: 2, blur: 8, opacity: 0.1 },
      { x: 0, y: 0, blur: 12, opacity: 0.06 },
    ],
    regular: [
      { x: 0, y: 4, blur: 12, opacity: 0.1 },
      { x: 0, y: 0, blur: 12, opacity: 0.06 },
    ],
    high: [
      { x: 0, y: 12, blur: 24, opacity: 0.15 },
      { x: 0, y: 0, blur: 12, opacity: 0.06 },
    ],
    higher: [
      { x: 0, y: 16, blur: 36, opacity: 0.15 },
      { x: 0, y: 0, blur: 12, opacity: 0.06 },
    ],
  },
}

export const DEFAULT_THEME: DesignSystemTheme = {
  light: LIGHT_THEME_VARIANT,
  dark: DARK_THEME_VARIANT,
  isDark: false,
  backgroundColor: palette.white[1000],
}
