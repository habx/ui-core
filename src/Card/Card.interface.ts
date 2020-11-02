import { BackgroundProps } from '../Background'

export type CardSpacing =
  | 'none'
  | 'narrow'
  | 'regular'
  | 'regular-horizontal-only'
  | 'narrow-horizontal-only'

export interface CardProps extends Omit<BackgroundProps, 'backgroundColor'> {
  animated?: boolean
  flat?: boolean
  backgroundColor?: string
  spacing?: CardSpacing
}
