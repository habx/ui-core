import DesignSystemTheme from '../theme/theme.interface'
import * as React from 'react'

export default interface ThemeProviderProps {
  theme: DesignSystemTheme
  children?: React.ReactChild
}
