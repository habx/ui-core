import merge from 'merge'
import * as React from 'react'
import {
  ThemeContext,
  ThemeProvider as BaseThemeProvider,
} from 'styled-components'

import { BASE_THEME, THEME_PATCHES } from '../theme'
import DesignSystemTheme from '../theme/theme.interface'

import ThemeProviderProps, {
  DesignSystemThemePatch,
} from './ThemeProvider.interface'

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  theme,
  isRoot = false,
  backgroundColor,
  children,
}) => {
  const currentTheme = React.useContext(ThemeContext) || {}

  const newTheme = React.useMemo(() => {
    const patch: DesignSystemThemePatch = backgroundColor
      ? {
          ...THEME_PATCHES[backgroundColor.toUpperCase()],
          backgroundColor,
        }
      : (theme as DesignSystemThemePatch)

    const designSystem = merge.recursive<
      DesignSystemTheme,
      DesignSystemThemePatch
    >(true, currentTheme.designSystem || BASE_THEME, patch)

    return {
      ...currentTheme,
      designSystem,
      ...(isRoot && { designSystemRoot: designSystem }),
    }
  }, [backgroundColor, currentTheme, isRoot, theme])

  return (
    <BaseThemeProvider theme={newTheme}>
      <React.Fragment>{children}</React.Fragment>
    </BaseThemeProvider>
  )
}

export default ThemeProvider
