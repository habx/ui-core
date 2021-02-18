import { ColorGetter } from '../_internal/theme/BackgroundThemeProvider'
import { BackgroundProps } from '../Background'

export interface HeaderBarProps
  extends Omit<BackgroundProps, 'backgroundColor'> {
  progress?: number
  small?: boolean
  large?: boolean
  backgroundColor?: ColorGetter
  sticky?: boolean
}
