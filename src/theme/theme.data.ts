import palette from '../palette'

import DesignSystemTheme from './theme.interface'

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

  backgroundColor: '#FFFFFF',

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

const PATCH_WHITE = {
  base: 'white',
  hover: 'white',
  focus: 'white',
}

export const THEME_PATCHES = {
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
  '#179EAD': {
    colors: {
      primary: PATCH_WHITE,
      secondary: {
        base: palette.orange[300],
        hover: palette.orange[300],
        focus: palette.orange[300],
      },
    },
  },
}
