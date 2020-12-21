import { BackgroundProps } from '../Background'
import { Color } from '../color'
import { ThemeVariant } from '../theme'

export interface HeaderBarProps
  extends Omit<BackgroundProps, 'backgroundColor'> {
  progress?: number
  small?: boolean
  large?: boolean
  backgroundColor?: Color | ((theme: ThemeVariant) => Color)
  sticky?: boolean
}
