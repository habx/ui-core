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
      contrastText: palette.neutralWhiteOpacity[900],
    },
    secondary: {
      calmer: palette.neutralWhiteOpacity[1000],
      calm: palette.neutralBlackOpacity[100],
      base: palette.neutralBlackOpacity[900],
      loud: palette.neutralBlackOpacity[1000],
      louder: palette.neutralBlackOpacity[1000],
      contrastText: palette.neutralWhiteOpacity[900],
    },
    error: {
      calmer: palette.razzmatazzRed[100],
      calm: palette.razzmatazzRed[200],
      base: palette.razzmatazzRed[500],
      loud: palette.razzmatazzRed[700],
      louder: palette.razzmatazzRed[800],
      contrastText: palette.neutralWhiteOpacity[900],
    },
    warning: {
      calmer: palette.goldenYellow[100],
      calm: palette.goldenYellow[200],
      base: palette.goldenYellow[500],
      loud: palette.goldenYellow[700],
      louder: palette.goldenYellow[800],
      contrastText: palette.neutralWhiteOpacity[900],
    },
    success: {
      calmer: palette.emeraldGreen[100],
      calm: palette.emeraldGreen[200],
      base: palette.emeraldGreen[500],
      loud: palette.emeraldGreen[700],
      louder: palette.emeraldGreen[800],
      contrastText: palette.neutralWhiteOpacity[900],
    },
  },

  typography: {
    colors: {
      title: palette.neutralBlackOpacity[1000],
      button: palette.neutralBlackOpacity[900],
      text: palette.neutralBlackOpacity[700],
      lowContrast: palette.neutralBlackOpacity[500],
    },
    font: 'EuclidCircularB, sans-serif',
  },

  neutralColor: {
    withOpacityFading: palette.neutralBlackOpacity,
    withIntensityFading: palette.neutralBlackIntensity,
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
      { x: 0, y: 0, blur: 1, opacity: 0.06 },
      { x: 0, y: 16, blur: 36, opacity: 0.15 },
    ],
  },
}

const DARK_THEME_VARIANT: ThemeVariant = {
  colors: {
    primary: {
      calmer: palette.purpleDawn[100],
      calm: palette.purpleDawn[200],
      base: palette.purpleDawn[500],
      loud: palette.purpleDawn[200],
      louder: palette.purpleDawn[100],
      contrastText: palette.neutralWhiteOpacity[900],
    },
    secondary: {
      calmer: palette.neutralWhiteOpacity[100],
      calm: palette.neutralBlackOpacity[200],
      base: palette.neutralWhiteOpacity[900],
      loud: palette.neutralWhiteOpacity[1000],
      louder: palette.neutralWhiteOpacity[1000],
      contrastText: palette.neutralBlackOpacity[900],
    },
    error: {
      calmer: palette.razzmatazzRed[800],
      calm: palette.razzmatazzRed[700],
      base: palette.razzmatazzRed[500],
      loud: palette.razzmatazzRed[200],
      louder: palette.razzmatazzRed[100],
      contrastText: palette.neutralWhiteOpacity[900],
    },
    warning: {
      calmer: palette.goldenYellow[800],
      calm: palette.goldenYellow[700],
      base: palette.goldenYellow[500],
      loud: palette.goldenYellow[200],
      louder: palette.goldenYellow[100],
      contrastText: palette.neutralWhiteOpacity[900],
    },
    success: {
      calmer: palette.emeraldGreen[800],
      calm: palette.emeraldGreen[700],
      base: palette.emeraldGreen[500],
      loud: palette.emeraldGreen[200],
      louder: palette.emeraldGreen[100],
      contrastText: palette.neutralWhiteOpacity[900],
    },
  },

  typography: {
    colors: {
      title: palette.neutralWhiteOpacity[900],
      button: palette.neutralWhiteOpacity[800],
      text: palette.neutralWhiteOpacity[500],
      lowContrast: palette.neutralWhiteOpacity[300],
    },
    font: 'EuclidCircularB, sans-serif',
  },

  neutralColor: {
    withOpacityFading: palette.neutralWhiteOpacity,
    withIntensityFading: palette.neutralWhiteIntensity,
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
      { x: 0, y: 0, blur: 1, opacity: 0.06 },
      { x: 0, y: 16, blur: 36, opacity: 0.15 },
    ],
  },
}

export const DEFAULT_THEME: DesignSystemTheme = {
  light: LIGHT_THEME_VARIANT,
  dark: DARK_THEME_VARIANT,
  isDark: false,
  backgroundColor: palette.neutralWhiteOpacity[1000],
}
