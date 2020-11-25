import * as React from 'react'
import { ThemeProvider, ThemeContext } from 'styled-components'

import {
  DEFAULT_THEME,
  DesignSystemProviderValue,
  StyledTheme,
} from '../../theme'

import { isColorDark } from './color'

export const BackgroundThemeProvider: React.FunctionComponent<{
  backgroundColor: string
}> = ({ children, backgroundColor }) => {
  const styledTheme = React.useContext<StyledTheme>(ThemeContext)

  const newProviderValue = React.useMemo<DesignSystemProviderValue>(() => {
    const currentTheme = styledTheme?.uiCore
    const isDark = isColorDark(backgroundColor)

    if (!currentTheme) {
      return {
        isDark,
        backgroundColor,
        rootValue: DEFAULT_THEME,
        value: DEFAULT_THEME,
      }
    }

    return {
      isDark,
      backgroundColor,
      rootValue: currentTheme.rootValue,
      value: currentTheme.value,
    }
  }, [backgroundColor, styledTheme])

  const newStyledTheme = React.useMemo<StyledTheme>(
    () => ({
      ...styledTheme,
      uiCore: newProviderValue,
    }),
    [newProviderValue, styledTheme]
  )

  return <ThemeProvider theme={newStyledTheme}>{children}</ThemeProvider>
}
