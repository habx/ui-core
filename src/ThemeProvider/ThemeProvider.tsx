import merge from 'merge'
import * as React from 'react'
import {
  ThemeProvider as BaseThemeProvider,
  ThemeContext,
} from 'styled-components'

import { isColorDark } from '../_internal/color'
import { StyledTheme } from '../_internal/types'
import { BASE_THEME, PATCH_WHITE } from '../theme'
import DesignSystemTheme from '../theme/theme.interface'

import ThemeProviderProps, {
  DesignSystemThemePatch,
} from './ThemeProvider.interface'

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
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
      const fullTheme = merge.recursive<
        DesignSystemTheme,
        DesignSystemThemePatch
      >(true, currentTheme, theme)

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

    return styledTheme
  }, [backgroundColor, currentTheme, currentThemeRoot, styledTheme, theme])

  return (
    <BaseThemeProvider theme={newStyledTheme}>
      <React.Fragment>{children}</React.Fragment>
    </BaseThemeProvider>
  )
}

export default ThemeProvider
