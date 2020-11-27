import { Color } from '../color'
import { FullGradient } from '../palette'

export interface ColorVariations {
  calmer: Color
  calm: Color
  base: Color
  loud: Color
  louder: Color
  contrastText: Color
}

export interface ColorFamilies {
  primary: ColorVariations
  secondary: ColorVariations
  warning: ColorVariations
  error: ColorVariations
  success: ColorVariations
}

export interface Shadow {
  x: number
  y: number
  blur: number
  opacity: number
}

export interface Shadows {
  flat: Shadow[]
  lower: Shadow[]
  low: Shadow[]
  regular: Shadow[]
  high: Shadow[]
  higher: Shadow[]
}

export interface TypographyColors {
  title: Color
  button: Color
  text: Color
  lowContrast: Color
}

export interface Typography {
  colors: TypographyColors
  font: string
}

export interface ThemeVariant {
  colors: ColorFamilies
  typography: Typography
  neutralColor: FullGradient
  shadows: Shadows
}

export interface DesignSystemTheme {
  light: ThemeVariant
  dark: ThemeVariant

  /**
   * Automatically inferred from the background color to determine if we want to use the light theme or the dark theme
   */
  isDark: boolean

  /**
   * Background color applied on a <Background /> component
   */
  backgroundColor: Color
}

export interface DesignSystemProviderValue {
  value: DesignSystemTheme
  rootValue: DesignSystemTheme
}

export interface StyledTheme {
  uiCore?: DesignSystemProviderValue
}

export interface GetterProps {
  theme?: StyledTheme
}

export interface TextColorGetterConfig<Props extends GetterProps> {
  /**
   * Text color variation to apply
   *
   * @default "text"
   */
  variation?: keyof TypographyColors

  /**
   * Do not take background theme into account
   *
   * @default false
   */
  useRootTheme?: boolean

  /**
   * The name of the prop we want to use to override manually the color of the text
   * Note that if you pass a value to the prop defined here, we won't apply any variation to it
   * For instance :
   *
   * ```ts
   * const MyComponent = styled.div`
   *   color: ${theme.textColor('text', { valuePropName: 'textColor' })};
   * `
   * <MyComponent /> => Text wil take the theme color in the chosen variation (as defined in config or overwritten in variationPropName)
   * <MyComponent textColor="red" /> => Text will be red
   */
  valuePropName?: keyof Props

  /**
   * The name of the prop we want to use to override manually the variation of the text
   * For instance :
   *
   * ```ts
   * const MyComponent = styled.div`
   *   color: ${theme.textColor('text', { variationPropName: 'variation' })};
   * `
   * <MyComponent /> => Text wil take the theme color in the variation defined in the config (or "text" by default)
   * <MyComponent variation="lowContrast" /> => Text will take the theme color in the "lowContrast" variation
   */
  variationPropName?: keyof Props
}

export interface ColorGetterConfig<Props extends GetterProps> {
  /**
   * Color variation to apply
   *
   * @default "base"
   */
  variation?: keyof ColorVariations

  /**
   * Opacity to apply to the color
   * If the color of the theme is already in an RGBA format, we multiply the two opacities
   *
   * @default 1
   */
  opacity?: number

  /**
   * Do not take background theme into account
   *
   * @default false
   */
  useRootTheme?: boolean

  /**
   * If true, passing a key of ColorFamilies as a prop to the component will override the default family
   * For instance for the following component:
   *
   * ```ts
   * const MyComponent = styled.div`
   *   border: 1px solid ${theme.color('primary', { dynamic: true })};
   * `
   *
   * <MyComponent /> => Border will take the primary color
   * <MyComponent warning /> => Border will take the warning color
   * <MyComponent secondary /> => Border will take the secondary color
   * ```
   * @default false
   */
  dynamic?: boolean

  /**
   * The name of the prop we want to use to override manually the value of the color
   * Note that if you pass a value to the prop defined here, we won't apply any variation to it
   * For instance :
   *
   * ```ts
   * const MyComponent = styled.div`
   *   border: 1px solid ${theme.color('primary', { valuePropName: 'borderColor' })};
   * `
   * <MyComponent /> => Border wil take the primary color
   * <MyComponent borderColor="red" /> => Border will be red
   */
  valuePropName?: keyof Props
}
