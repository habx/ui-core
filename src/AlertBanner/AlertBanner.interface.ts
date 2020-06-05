import { BannerProps } from '../_internal/Banner'

export default interface AlertBannerProps
  extends Omit<BannerProps, 'backgroundColor'> {
  message: string
  warning?: boolean
}
