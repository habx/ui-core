import merge from 'merge'
import * as React from 'react'
import {
  ThemeProvider as BaseThemeProvider,
  ThemeContext,
} from 'styled-components'

import { isColorDark } from '../_internal/color'
import { StyledTheme } from '../_internal/types'
import { BASE_THEME, PATCH_WHITE, DesignSystemTheme } from '../theme'

import { ThemeProviderProps } from './ThemeProvider.interface'

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  theme,
  backgroundColor,
  children,
}) => {
  const styledTheme = React.useContext<StyledTheme>(ThemeContext)

  const currentTheme =
    styledTheme && styledTheme.uiCore ? styledTheme.uiCore : BASE_THEME

  const currentThemeRoot =
    styledTheme && styledTheme.uiCoreRoot ? styledTheme.uiCoreRoot : BASE_THEME

  const newStyledTheme = React.useMemo<StyledTheme>(() => {
    // Creating a custom theme
    if (theme) {
      const fullTheme: DesignSystemTheme = merge.recursive(
        true,
        currentTheme,
        theme
      )

      const newTheme = {
        ...fullTheme,
        isDark: isColorDark(fullTheme.backgroundColor),
      }

      return {
        ...styledTheme,
        uiCore: newTheme,
        uiCoreRoot: newTheme,
      }
    }

    // Applying a custom background
    if (backgroundColor) {
      const isDark = isColorDark(backgroundColor)

      if (!isDark) {
        return {
          ...styledTheme,
          uiCore: {
            ...currentThemeRoot,
            backgroundColor,
            isDark: false,
          },
        }
      }

      return {
        ...styledTheme,
        uiCore: {
          ...currentTheme,
          backgroundColor,
          isDark: true,
          textColor: '#FFFFFF',
          colors: {
            ...currentThemeRoot.colors,
            secondary: PATCH_WHITE,
          },
        },
      }
    }

    return {
      ...styledTheme,
      uiCore: currentTheme,
      uiCoreRoot: currentThemeRoot,
    }
  }, [backgroundColor, currentTheme, currentThemeRoot, styledTheme, theme])

  return (
    <BaseThemeProvider theme={newStyledTheme}>
      <React.Fragment>{children}</React.Fragment>
    </BaseThemeProvider>
  )
}
