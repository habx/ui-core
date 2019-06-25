export interface DesignSystemPalette {
  darkBlue900: string
  darkBlue800: string
  darkBlue700: string
  darkBlue600: string
  darkBlue500: string
  darkBlue400: string
  darkBlue300: string
  darkBlue200: string
  darkBlue100: string

  blue900: string
  blue800: string
  blue700: string
  blue600: string
  blue500: string
  blue400: string
  blue300: string
  blue200: string
  blue100: string

  lightBlue900: string
  lightBlue800: string,
  lightBlue700: string
  lightBlue600: string
  lightBlue500: string
  lightBlue400: string
  lightBlue300: string
  lightBlue200: string
  lightBlue100: string

  yellow900: string
  yellow800: string
  yellow700: string
  yellow600: string
  yellow500: string
  yellow400: string
  yellow300: string
  yellow200: string
  yellow100: string

  orange900: string
  orange800: string
  orange700: string
  orange600: string
  orange500: string
  orange400: string
  orange300: string
  orange200: string
  orange100: string

  green900: string
  green800: string
  green700: string
  green600: string
  green500: string
  green400: string
  green300: string
  green200: string
  green100: string

  white: string
}

export default interface DesignSystemTheme extends DesignSystemPalette {
  name: string

  textColor: string
  warningColor: string

  shadowLight: string
  shadow: string
  shadowStrong: string

  titleFont: string
  textFont: string

  useArrowOnButtons: boolean
}
