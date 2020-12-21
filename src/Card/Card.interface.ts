import { BackgroundProps } from '../Background'
import { Color } from '../color'
import { ThemeVariant } from '../theme'

export type CardSpacing =
  | 'none'
  | 'narrow'
  | 'regular'
  | 'regular-horizontal-only'
  | 'narrow-horizontal-only'

export interface CardProps extends Omit<BackgroundProps, 'backgroundColor'> {
  animated?: boolean
  flat?: boolean
  backgroundColor?: Color | ((theme: ThemeVariant) => Color)
  spacing?: CardSpacing
}
