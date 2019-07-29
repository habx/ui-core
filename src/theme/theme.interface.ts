export interface ColorVariations {
  base?: string
  hover?: string
  focus?: string
  contrastText?: string
}

export interface TextColorVariations {
  base?: string
  title?: string
  placeholder?: string
  disabledPlaceholder?: string
}

export interface ColorFamilies {
  primary?: ColorVariations
  secondary?: ColorVariations
  warning?: ColorVariations
}

export interface Fonts {
  title?: string
  text?: string
}

export interface Shadow {
  x: number
  y: number
  blur: number
  opacity: number
}

export interface Shadows {
  flat?: Shadow[]
  lower?: Shadow[]
  low?: Shadow[]
  regular?: Shadow[]
  high?: Shadow[]
  higher?: Shadow[]
}

export default interface DesignSystemTheme {
  colors?: ColorFamilies
  textColors?: TextColorVariations
  backgroundColor?: string
  fonts?: Fonts
  shadows?: Shadows
}

export interface GetterProps {
  theme?: {
    designSystem?: DesignSystemTheme
    designSystemRoot?: DesignSystemTheme
  }
}
