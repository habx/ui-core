import { BackgroundProps } from '../../Background'
import { ColorGetter } from '../theme/BackgroundThemeProvider'

export interface BannerProps extends Omit<BackgroundProps, 'backgroundColor'> {
  /**
   * is banner visible
   */
  open: boolean

  /**
   * background color overwrite
   */
  backgroundColor?: ColorGetter
}
