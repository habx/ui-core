import { BannerProps } from '../_internal/Banner'

export default interface AlertBannerProps
  extends Omit<BannerProps, 'backgroundColor'> {
  /**
   * message contained in the banner
   */
  message: string
  /**
   * warning background style
   * @default false
   */
  warning?: boolean
}
