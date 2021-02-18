import { ColorGetter } from '../_internal/theme/BackgroundThemeProvider'
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
  backgroundColor?: ColorGetter
  spacing?: CardSpacing
}
