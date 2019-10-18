import merge from 'merge'
import * as React from 'react'
import {
  ThemeContext,
  ThemeProvider as BaseThemeProvider,
} from 'styled-components'

import { styledTheme } from '../_internal/types'
import { BASE_THEME, FAMILY_PATCHES, THEME_PATCHES } from '../theme'
import DesignSystemTheme from '../theme/theme.interface'

import ThemeProviderProps, {
  DesignSystemThemePatch,
} from './ThemeProvider.interface'

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  theme,
  themeFamily,
  isRoot = false,
  backgroundColor,
  children,
}) => {
  const currentTheme = React.useContext<styledTheme>(ThemeContext) || {}

  const baseTheme = React.useMemo(
    () =>
      currentTheme.designSystemRoot ||
      merge.recursive<DesignSystemTheme, DesignSystemThemePatch>(
        true,
        BASE_THEME,
        themeFamily ? FAMILY_PATCHES[themeFamily] : {}
      ),
    [currentTheme.designSystemRoot, themeFamily]
  )

  const patch = React.useMemo<DesignSystemThemePatch>(() => {
    if (backgroundColor === '#FFFFFF') {
      return baseTheme
    }

    if (backgroundColor) {
      return {
        ...THEME_PATCHES[backgroundColor.toUpperCase()],
        backgroundColor,
      }
    }

    return theme as DesignSystemThemePatch
  }, [backgroundColor, baseTheme, theme])

  const newTheme = React.useMemo<styledTheme>(() => {
    const designSystem = merge.recursive<
      DesignSystemTheme,
      DesignSystemThemePatch
    >(true, baseTheme, patch)

    return {
      ...currentTheme,
      designSystem,
      ...((isRoot || !currentTheme.designSystem) && {
        designSystemRoot: designSystem,
      }),
    }
  }, [baseTheme, currentTheme, isRoot, patch])

  return (
    <BaseThemeProvider theme={newTheme}>
      <React.Fragment>{children}</React.Fragment>
    </BaseThemeProvider>
  )
}

export default ThemeProvider
