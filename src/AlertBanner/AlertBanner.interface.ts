import { BannerProps } from '../_internal/Banner'

export interface AlertBannerProps extends Omit<BannerProps, 'backgroundColor'> {
  /**
   * message contained in the banner
   * @default "This is an alert banner"
   */
  message: string

  /**
   * primary background style
   * @default false
   */
  primary?: boolean
  /**
   * warning background style
   * @default false
   */
  warning?: boolean
  /**
   * success background style
   * @default false
   */
  success?: boolean
  /**
   * error background style
   * @default false
   */
  error?: boolean

  /**
   * make close button appears which call the callback on click
   */
  onClose?: () => void
}
