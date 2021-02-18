import * as React from 'react'
import { ThemeProvider, ThemeContext } from 'styled-components'

import { Color, isColorDark } from '../../color'
import {
  DEFAULT_THEME,
  DesignSystemProviderValue,
  DesignSystemTheme,
  getThemeVariant,
  StyledTheme,
  ThemeVariant,
} from '../../theme'
import { isFunction } from '../data'

export type ColorGetter = Color | ((theme: ThemeVariant) => Color)

export const BackgroundThemeProvider: React.FunctionComponent<BackgroundThemeProviderProps> = ({
  children,
  backgroundColor: rawBackgroundColor,
}) => {
  const styledTheme = React.useContext<StyledTheme>(ThemeContext)

  const newProviderValue = React.useMemo<DesignSystemProviderValue>(() => {
    const currentTheme = styledTheme?.uiCore

    const backgroundColor = isFunction(rawBackgroundColor)
      ? rawBackgroundColor(getThemeVariant({ theme: styledTheme }))
      : rawBackgroundColor

    const newTheme: DesignSystemTheme = {
      ...(currentTheme?.value ?? DEFAULT_THEME),
      backgroundColor,
      isDark: isColorDark(backgroundColor),
    }

    return {
      rootValue: currentTheme?.rootValue ?? DEFAULT_THEME,
      value: newTheme,
    }
  }, [rawBackgroundColor, styledTheme])

  const newStyledTheme = React.useMemo<StyledTheme>(
    () => ({
      ...styledTheme,
      uiCore: newProviderValue,
    }),
    [newProviderValue, styledTheme]
  )

  return <ThemeProvider theme={newStyledTheme}>{children}</ThemeProvider>
}

interface BackgroundThemeProviderProps {
  backgroundColor: ColorGetter
}
