import BackgroundProps from '../Background/Background.interface'

export type CardSpacing =
  | 'none'
  | 'narrow'
  | 'regular'
  | 'regular-horizontal-only'
  | 'narrow-horizontal-only'

export default interface CardProps
  extends Omit<BackgroundProps, 'backgroundColor'> {
  animated?: boolean
  flat?: boolean
  backgroundColor?: string
  spacing?: CardSpacing
}
