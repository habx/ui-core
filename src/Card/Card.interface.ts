import BackgroundProps from '../Background/Background.interface'

export default interface CardProps
  extends Omit<BackgroundProps, 'backgroundColor'> {
  animated?: boolean
  flat?: boolean
  backgroundColor?: string
  spacing?: 'none' | 'narrow' | 'regular'
}
