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
  themeFamily = 'habx',
  isRoot = false,
  backgroundColor,
  children,
}) => {
  const currentTheme = React.useContext<styledTheme>(ThemeContext) || {}

  const newTheme = React.useMemo<styledTheme>(() => {
    const patch: DesignSystemThemePatch = backgroundColor
      ? {
          ...THEME_PATCHES[backgroundColor.toUpperCase()],
          backgroundColor,
        }
      : (theme as DesignSystemThemePatch)

    const base =
      currentTheme.designSystem ||
      merge.recursive<DesignSystemTheme, DesignSystemThemePatch>(
        true,
        BASE_THEME,
        FAMILY_PATCHES[themeFamily]
      )

    const designSystem = merge.recursive<
      DesignSystemTheme,
      DesignSystemThemePatch
    >(true, base, patch)

    return {
      ...currentTheme,
      designSystem,
      ...(isRoot && { designSystemRoot: designSystem }),
    }
  }, [backgroundColor, currentTheme, isRoot, theme, themeFamily])

  return (
    <BaseThemeProvider theme={newTheme}>
      <React.Fragment>{children}</React.Fragment>
    </BaseThemeProvider>
  )
}

export default ThemeProvider
