import { BackgroundProps } from '../Background'

export default interface HeaderBarProps
  extends Omit<BackgroundProps, 'backgroundColor'> {
  progress?: number
  small?: boolean
  backgroundColor?: string
}
