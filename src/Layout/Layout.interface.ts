import BackgroundProps from '../Background/Background.interface'

export default interface LayoutProps
  extends Omit<BackgroundProps, 'backgroundColor'> {
  backgroundColor?: string
}
