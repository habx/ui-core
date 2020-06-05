import { BannerProps } from '../_internal/Banner'

export default interface AnnouncementBannerProps extends BannerProps {
  validationLabel: string
  message: string
  onValidate: () => void
  onClose: () => void
}
