import { keyframes } from 'styled-components'

import palette from '../palette'
import { DesignSystemThemePatch } from '../ThemeProvider/ThemeProvider.interface'

import DesignSystemTheme, { ColorVariations } from './theme.interface'

const WHITE = '#FFFFFF'

export const BASE_THEME: DesignSystemTheme = {
  colors: {
    primary: {
      base: palette.blue[600],
      hover: palette.blue[700],
      focus: palette.blue[800],
      contrastText: WHITE,
    },
    secondary: {
      base: palette.darkBlue[900],
      hover: palette.darkBlue[800],
      focus: palette.darkBlue[700],
      contrastText: WHITE,
    },
    warning: {
      base: palette.orange[600],
      hover: palette.orange[700],
      focus: palette.orange[800],
      contrastText: WHITE,
    },
  },

  textColors: {
    base: palette.darkBlue[900],
    title: palette.darkBlue[900],
    placeholder: palette.darkBlue[600],
    disabledPlaceholder: palette.darkBlue[400],
  },

  backgroundColor: WHITE,

  fonts: {
    title: 'EuclidCircularB, sans-serif',
    text: 'EuclidCircularB, sans-serif',
  },

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

const PATCH_WHITE: ColorVariations = {
  base: WHITE,
  hover: palette.darkBlue[200],
  focus: palette.darkBlue[400],
  contrastText: palette.darkBlue[900],
}

export const THEME_PATCHES: { [key: string]: DesignSystemThemePatch } = {
  '#FFFFFF': BASE_THEME,
  [palette.darkBlue[900]]: {
    colors: {
      secondary: PATCH_WHITE,
    },
  },
  [palette.blue[800]]: {
    colors: {
      secondary: PATCH_WHITE,
    },
  },
  [palette.blue[600]]: {
    colors: {
      secondary: PATCH_WHITE,
    },
  },
  [palette.green[600]]: {
    colors: {
      primary: PATCH_WHITE,
      secondary: {
        base: palette.orange[300],
        hover: palette.orange[300],
        focus: palette.orange[300],
        contrastText: WHITE,
      },
    },
  },
}
