import { BackgroundProps } from '../../Background'

export default interface BannerProps
  extends Omit<BackgroundProps, 'backgroundColor'> {
  open: boolean
  backgroundColor?: string
}
