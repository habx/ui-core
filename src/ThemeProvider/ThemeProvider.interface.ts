import * as React from 'react'

import DesignSystemTheme from '../theme/theme.interface'

export default interface ThemeProviderProps {
  theme?: DesignSystemTheme
  isRoot?: boolean
  backgroundColor?: string
  children?: React.ReactChild
}
