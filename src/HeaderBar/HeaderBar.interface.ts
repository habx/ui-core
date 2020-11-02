import { BackgroundProps } from '../Background'

export interface HeaderBarProps
  extends Omit<BackgroundProps, 'backgroundColor'> {
  progress?: number
  small?: boolean
  large?: boolean
  backgroundColor?: string
  sticky?: boolean
}
