import merge from 'merge'
import * as React from 'react'
import {
  ThemeProvider as BaseThemeProvider,
  ThemeContext,
} from 'styled-components'

import { isColorDark } from '../_internal/theme/color'
import {
  DesignSystemTheme,
  DesignSystemProviderValue,
  StyledTheme,
  DEFAULT_THEME,
} from '../theme'
import { ThemeVariant } from '../theme'

import { ThemeProviderProps } from './ThemeProvider.interface'

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  const styledTheme = React.useContext<StyledTheme>(ThemeContext)

  const currentTheme = styledTheme?.uiCore?.value ?? DEFAULT_THEME

  const newProviderValue = React.useMemo<DesignSystemProviderValue>(() => {
    const newLightVariant: ThemeVariant = merge.recursive(
      true,
      currentTheme.light,
      theme.light ?? {}
    )

    const newDarkVariant: ThemeVariant = merge.recursive(
      true,
      currentTheme.dark,
      theme.dark ?? {}
    )

    const newBackgroundColor =
      theme.backgroundColor ?? currentTheme.backgroundColor

    const newTheme: DesignSystemTheme = {
      light: newLightVariant,
      dark: newDarkVariant,
      isDark: isColorDark(newBackgroundColor),
      backgroundColor: newBackgroundColor,
    }

    return {
      value: newTheme,
      rootValue: newTheme,
    }
  }, [currentTheme, theme])

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
