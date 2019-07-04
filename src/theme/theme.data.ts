import palette from '../palette'

const PATCH_WHITE = {
  base: 'white',
  hover: 'white',
  focus: 'white',
}

export const THEME_PATCHES = {
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
}
