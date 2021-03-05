import merge from 'merge'
import * as React from 'react'
import {
  ThemeProvider as BaseThemeProvider,
  ThemeContext,
} from 'styled-components'

import {
  DesignSystemTheme,
  DesignSystemProviderValue,
  StyledTheme,
  DEFAULT_THEME,
} from '../theme'
import { ThemeVariant } from '../theme'

import { ThemeProviderProps } from './ThemeProvider.interface'
import { ThemeProviderContainer } from './ThemeProvider.style'

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  theme,
  preset = 'light',
  children,
  ...props
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

    const newTheme: DesignSystemTheme = {
      light: newLightVariant,
      dark: newDarkVariant,
      isDark: preset === 'dark',
      backgroundColor:
        preset === 'dark'
          ? newDarkVariant.defaultBackground
          : newLightVariant.defaultBackground,
    }

    return {
      value: newTheme,
      rootValue: newTheme,
    }
  }, [currentTheme.dark, currentTheme.light, preset, theme?.dark, theme?.light])

  const newStyledTheme = React.useMemo<StyledTheme>(
    () => ({
      ...styledTheme,
      uiCore: newProviderValue,
    }),
    [newProviderValue, styledTheme]
  )

  return (
    <BaseThemeProvider theme={newStyledTheme}>
      <ThemeProviderContainer {...props}>{children}</ThemeProviderContainer>
    </BaseThemeProvider>
  )
}
