import { BannerProps } from '../_internal/Banner'

export default interface AnnouncementBannerProps extends BannerProps {
  /**
   * Validation button label
   */
  validationLabel: string

  /**
   * Main message of the banner
   */
  message: string

  /**
   * On validate callback
   */
  onValidate: () => void

  /**
   * On close callback
   */
  onClose: () => void
}
