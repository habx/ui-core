import merge from 'merge'
import * as React from 'react'
import {
  ThemeProvider as BaseThemeProvider,
  ThemeContext,
} from 'styled-components'

import { palette } from '../palette'
import {
  DesignSystemTheme,
  DesignSystemProviderValue,
  StyledTheme,
  DEFAULT_THEME,
} from '../theme'

import { ThemeProviderProps } from './ThemeProvider.interface'

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  const styledTheme = React.useContext<StyledTheme>(ThemeContext)

  const currentProviderValue = styledTheme?.uiCore

  const newProviderValue = React.useMemo<DesignSystemProviderValue>(() => {
    const newTheme: DesignSystemTheme = merge.recursive(
      true,
      currentProviderValue?.value ?? DEFAULT_THEME,
      theme
    )

    return {
      value: newTheme,
      rootValue: newTheme,
      isDark: currentProviderValue?.isDark ?? false,
      backgroundColor:
        currentProviderValue?.backgroundColor ?? palette.white[1000],
    }
  }, [currentProviderValue, theme])

  const newStyledTheme = React.useMemo<StyledTheme>(
    () => ({
      ...styledTheme,
      uiCore: newProviderValue,
    }),
    [newProviderValue, styledTheme]
  )

  return (
    <BaseThemeProvider theme={newStyledTheme}>
      <React.Fragment>{children}</React.Fragment>
    </BaseThemeProvider>
  )
}
