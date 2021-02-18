import { ColorGetter } from '../_internal/theme/BackgroundThemeProvider'
import { BackgroundProps } from '../Background'

export interface LayoutProps extends Omit<BackgroundProps, 'backgroundColor'> {
  backgroundColor?: ColorGetter
}

export enum LayoutChild {
  ActionBar = 0,
  HeaderBar = 1,
}

export interface LayoutContextValue {
  isInLayout: boolean
  registerChild: (type: LayoutChild) => void
}
