import merge from 'merge'
import * as React from 'react'
import {
  ThemeContext,
  ThemeProvider as BaseThemeProvider,
} from 'styled-components'

import { BASE_THEME } from '../theme'

import ThemeProviderProps from './ThemeProvider.interface'

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  const currentTheme = React.useContext(ThemeContext) || {}

  const newTheme = React.useMemo(
    () => ({
      ...currentTheme,
      designSystem: merge.recursive(
        true,
        currentTheme.designSystem || BASE_THEME,
        theme
      ),
    }),
    [currentTheme, theme]
  )

  return <BaseThemeProvider theme={newTheme}>{children}</BaseThemeProvider>
}

export default ThemeProvider
