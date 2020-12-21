import { BackgroundProps } from '../Background'
import { Color } from '../color'
import { ThemeVariant } from '../theme'

export interface LayoutProps extends Omit<BackgroundProps, 'backgroundColor'> {
  backgroundColor?: Color | ((theme: ThemeVariant) => Color)
}

export enum LayoutChild {
  ActionBar = 0,
  HeaderBar = 1,
}

export interface LayoutContextValue {
  isInLayout: boolean
  registerChild: (type: LayoutChild) => void
}
