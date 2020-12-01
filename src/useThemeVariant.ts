import * as React from 'react'
import { ThemeContext } from 'styled-components'

import { getThemeVariant, StyledTheme, ThemeVariant } from './theme'

export const useThemeVariant = (): ThemeVariant => {
  const theme = React.useContext<StyledTheme>(ThemeContext)

  return getThemeVariant({ theme })
}
