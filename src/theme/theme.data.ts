import { palette } from '../palette'

import { DesignSystemTheme, ThemeVariant } from './theme.interface'

const LIGHT_THEME_VARIANT: ThemeVariant = {
  colors: {
    primary: {
      calmer: palette.purpleDawn[100],
      calm: palette.purpleDawn[200],
      base: palette.purpleDawn[500],
      loud: palette.purpleDawn[700],
      louder: palette.purpleDawn[800],
      contrastText: palette.neutralWhiteWithOpacityFading[900],
    },
    secondary: {
      calmer: palette.neutralBlackWithIntensityFading[200],
      calm: palette.neutralBlackWithIntensityFading[300],
      base: palette.neutralBlackWithIntensityFading[900],
      loud: palette.neutralBlackWithIntensityFading[1000],
      louder: palette.neutralBlackWithIntensityFading[1000],
      contrastText: palette.neutralWhiteWithIntensityFading[900],
    },
    error: {
      calmer: palette.redRazzmatazz[100],
      calm: palette.redRazzmatazz[200],
      base: palette.redRazzmatazz[500],
      loud: palette.redRazzmatazz[700],
      louder: palette.redRazzmatazz[800],
      contrastText: palette.neutralWhiteWithOpacityFading[900],
    },
    warning: {
      calmer: palette.yellowGolden[100],
      calm: palette.yellowGolden[200],
      base: palette.yellowGolden[500],
      loud: palette.yellowGolden[700],
      louder: palette.yellowGolden[800],
      contrastText: palette.neutralWhiteWithOpacityFading[900],
    },
    success: {
      calmer: palette.greenEmerald[100],
      calm: palette.greenEmerald[200],
      base: palette.greenEmerald[500],
      loud: palette.greenEmerald[700],
      louder: palette.greenEmerald[800],
      contrastText: palette.neutralWhiteWithOpacityFading[900],
    },
  },

  typography: {
    colors: {
      title: palette.neutralBlackWithOpacityFading[1000],
      button: palette.neutralBlackWithOpacityFading[900],
      text: palette.neutralBlackWithOpacityFading[700],
      lowContrast: palette.neutralBlackWithOpacityFading[500],
    },
    font: 'EuclidCircularB, sans-serif',
  },

  neutralColor: {
    withOpacityFading: palette.neutralBlackWithOpacityFading,
    withIntensityFading: palette.neutralBlackWithIntensityFading,
  },

  shadows: {
    flat: [],
    lower: [
      { x: 0, y: 0, blur: 2, opacity: 0.06 },
      { x: 0, y: 1, blur: 2, opacity: 0.1 },
    ],
    low: [
      { x: 0, y: 0, blur: 2, opacity: 0.06 },
      { x: 0, y: 2, blur: 8, opacity: 0.1 },
    ],
    regular: [
      { x: 0, y: 0, blur: 1, opacity: 0.06 },
      { x: 0, y: 4, blur: 12, opacity: 0.1 },
    ],
    high: [
      { x: 0, y: 0, blur: 2, opacity: 0.06 },
      { x: 0, y: 12, blur: 24, opacity: 0.1 },
    ],
    higher: [
      { x: 0, y: 0, blur: 2, opacity: 0.06 },
      { x: 0, y: 16, blur: 36, opacity: 0.15 },
    ],
  },
  defaultBackground: palette.neutralWhiteWithIntensityFading[1000],
}

const DARK_THEME_VARIANT: ThemeVariant = {
  colors: {
    primary: {
      calmer: palette.purpleDawn[800],
      calm: palette.purpleDawn[700],
      base: palette.purpleDawn[500],
      loud: palette.purpleDawn[400],
      louder: palette.purpleDawn[300],
      contrastText: palette.neutralWhiteWithOpacityFading[900],
    },
    secondary: {
      calmer: palette.neutralWhiteWithIntensityFading[100],
      calm: palette.neutralBlackWithIntensityFading[200],
      base: palette.neutralWhiteWithIntensityFading[900],
      loud: palette.neutralWhiteWithIntensityFading[1000],
      louder: palette.neutralWhiteWithIntensityFading[1000],
      contrastText: palette.neutralBlackWithIntensityFading[900],
    },
    error: {
      calmer: palette.redRazzmatazz[800],
      calm: palette.redRazzmatazz[700],
      base: palette.redRazzmatazz[500],
      loud: palette.redRazzmatazz[400],
      louder: palette.redRazzmatazz[300],
      contrastText: palette.neutralWhiteWithOpacityFading[900],
    },
    warning: {
      calmer: palette.yellowGolden[800],
      calm: palette.yellowGolden[700],
      base: palette.yellowGolden[500],
      loud: palette.yellowGolden[200],
      louder: palette.yellowGolden[100],
      contrastText: palette.neutralWhiteWithOpacityFading[900],
    },
    success: {
      calmer: palette.greenEmerald[800],
      calm: palette.greenEmerald[700],
      base: palette.greenEmerald[500],
      loud: palette.greenEmerald[200],
      louder: palette.greenEmerald[100],
      contrastText: palette.neutralWhiteWithOpacityFading[900],
    },
  },

  typography: {
    colors: {
      title: palette.neutralWhiteWithOpacityFading[900],
      button: palette.neutralWhiteWithOpacityFading[800],
      text: palette.neutralWhiteWithOpacityFading[500],
      lowContrast: palette.neutralWhiteWithOpacityFading[300],
    },
    font: 'EuclidCircularB, sans-serif',
  },

  neutralColor: {
    withOpacityFading: palette.neutralWhiteWithOpacityFading,
    withIntensityFading: palette.neutralWhiteWithIntensityFading,
  },

  shadows: {
    flat: [],
    lower: [
      { x: 0, y: 0, blur: 2, opacity: 0.06 },
      { x: 0, y: 1, blur: 2, opacity: 0.2 },
    ],
    low: [
      { x: 0, y: 0, blur: 2, opacity: 0.06 },
      { x: 0, y: 2, blur: 8, opacity: 0.2 },
    ],
    regular: [
      { x: 0, y: 0, blur: 1, opacity: 0.06 },
      { x: 0, y: 4, blur: 12, opacity: 0.2 },
    ],
    high: [
      { x: 0, y: 0, blur: 2, opacity: 0.06 },
      { x: 0, y: 12, blur: 24, opacity: 0.2 },
    ],
    higher: [
      { x: 0, y: 0, blur: 2, opacity: 0.06 },
      { x: 0, y: 16, blur: 36, opacity: 0.25 },
    ],
  },

  defaultBackground: palette.neutralBlackWithIntensityFading[900],
}

export const DEFAULT_THEME: DesignSystemTheme = {
  light: LIGHT_THEME_VARIANT,
  dark: DARK_THEME_VARIANT,
  isDark: false,
  backgroundColor: palette.neutralWhiteWithOpacityFading[1000],
}
