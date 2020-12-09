import merge from 'merge'
import * as React from 'react'
import {
  ThemeProvider as BaseThemeProvider,
  ThemeContext,
} from 'styled-components'

import { isColorDark } from '../color'
import { palette } from '../palette'
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
  preset,
  children,
}) => {
  const styledTheme = React.useContext<StyledTheme>(ThemeContext)

  const currentTheme = styledTheme?.uiCore?.value ?? DEFAULT_THEME

  const newProviderValue = React.useMemo<DesignSystemProviderValue>(() => {
    const newLightVariant: ThemeVariant = merge.recursive(
      true,
      currentTheme.light,
      theme?.light ?? {}
    )

    const newDarkVariant: ThemeVariant = merge.recursive(
      true,
      currentTheme.dark,
      theme?.dark ?? {}
    )

    let newBackgroundColor =
      theme?.backgroundColor ?? currentTheme.backgroundColor

    let isDark = false
    if (preset === 'dark') {
      isDark = true
      if (!isColorDark(newBackgroundColor)) {
        newBackgroundColor = palette.neutralBlackWithIntensityFading[900]
      }
    }
    if (preset === 'auto') {
      isDark = isColorDark(newBackgroundColor)
    }

    const newTheme: DesignSystemTheme = {
      light: newLightVariant,
      dark: newDarkVariant,
      isDark,
      backgroundColor: newBackgroundColor,
    }

    return {
      value: newTheme,
      rootValue: newTheme,
    }
  }, [
    currentTheme.backgroundColor,
    currentTheme.dark,
    currentTheme.light,
    preset,
    theme?.backgroundColor,
    theme?.dark,
    theme?.light,
  ])

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
