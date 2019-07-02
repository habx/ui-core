export interface ColorVariations {
  base?: string
  hover?: string
  focus?: string
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

export interface Shadows {
  light?: string
  base?: string
  strong?: string
}

export default interface DesignSystemTheme {
  colors?: ColorFamilies
  textColors?: TextColorVariations
  fonts?: Fonts
  shadows?: Shadows
}

export interface GetterProps {
  theme?: {
    designSystem?: DesignSystemTheme
  }
}
