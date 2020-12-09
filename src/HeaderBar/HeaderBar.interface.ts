import { BackgroundProps } from '../Background'
import { Color } from '../color'

export interface HeaderBarProps
  extends Omit<BackgroundProps, 'backgroundColor'> {
  progress?: number
  small?: boolean
  large?: boolean
  backgroundColor?: Color
  sticky?: boolean
}
