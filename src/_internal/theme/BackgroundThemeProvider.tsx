import * as React from 'react'
import { ThemeProvider, ThemeContext } from 'styled-components'

import { Color, isColorDark } from '../../color'
import {
  DEFAULT_THEME,
  DesignSystemProviderValue,
  DesignSystemTheme,
  StyledTheme,
} from '../../theme'

export const BackgroundThemeProvider: React.FunctionComponent<{
  backgroundColor: Color
}> = ({ children, backgroundColor }) => {
  const styledTheme = React.useContext<StyledTheme>(ThemeContext)

  const newProviderValue = React.useMemo<DesignSystemProviderValue>(() => {
    const currentTheme = styledTheme?.uiCore

    const newTheme: DesignSystemTheme = {
      ...(currentTheme?.value ?? DEFAULT_THEME),
      backgroundColor,
      isDark: isColorDark(backgroundColor),
    }

    return {
      rootValue: currentTheme?.rootValue ?? DEFAULT_THEME,
      value: newTheme,
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
