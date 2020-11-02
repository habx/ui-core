import * as React from 'react'
import { ThemeContext } from 'styled-components'

import { StyledTheme } from './_internal/types'
import { BASE_THEME } from './theme'
import { DesignSystemTheme } from './theme/theme.interface'

export const useTheme = (): DesignSystemTheme => {
  const fullTheme = React.useContext<StyledTheme>(ThemeContext)

  return fullTheme && fullTheme.uiCore ? fullTheme.uiCore : BASE_THEME
}
