export interface ColorVariations {
  base: string
  hover: string
  focus: string
}

export default interface DesignSystemTheme {
  name: string

  textColor: string
  warningColor: string
  white: string

  colors: {
    primary: ColorVariations
    secondary: ColorVariations
    warning: ColorVariations
    input: {
      background: string
      border: string
      placeholder: string
      disabledPlaceholder: string
    }
  }

  shadowLight: string
  shadow: string
  shadowStrong: string

  titleFont: string
  textFont: string
}
