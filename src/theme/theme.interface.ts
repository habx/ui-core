export interface Palette {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export interface DesignSystemPalette {
  darkBlue: Palette
  blue: Palette
  lightBlue: Palette
  yellow: Palette
  orange: Palette
  green: Palette
}

export default interface DesignSystemTheme {
  name: string

  textColor: string
  warningColor: string
  white: string

  palettes: {
    primary: Palette
    secondary: Palette
    tertiary: Palette
    quaternary: Palette
  }

  shadowLight: string
  shadow: string
  shadowStrong: string

  titleFont: string
  textFont: string

  useArrowOnButtons: boolean
}
