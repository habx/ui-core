import { BackgroundProps } from '../../Background'

export default interface BannerProps
  extends Omit<BackgroundProps, 'backgroundColor'> {
  /**
   * is baner visible
   * @default false
   */
  open: boolean
  /**
   * background color hex overwrite
   */
  backgroundColor?: string
}
