import merge from 'merge'
import * as React from 'react'
import {
  ThemeContext,
  ThemeProvider as BaseThemeProvider,
} from 'styled-components'

import { BASE_THEME, THEME_PATCHES } from '../theme'

import ThemeProviderProps from './ThemeProvider.interface'

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  theme,
  backgroundColor,
  children,
}) => {
  const currentTheme = React.useContext(ThemeContext) || {}

  const newTheme = React.useMemo(() => {
    const patch = backgroundColor
      ? { ...THEME_PATCHES[backgroundColor.toUpperCase()], backgroundColor }
      : theme

    return {
      ...currentTheme,
      designSystem: merge.recursive(
        true,
        currentTheme.designSystem || BASE_THEME,
        patch
      ),
    }
  }, [backgroundColor, currentTheme, theme])

  return (
    <BaseThemeProvider theme={newTheme}>
      <React.Fragment>{children}</React.Fragment>
    </BaseThemeProvider>
  )
}

export default ThemeProvider
