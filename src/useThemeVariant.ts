import * as React from 'react'
import { ThemeContext } from 'styled-components'

import { getThemeVariant, StyledTheme } from './theme'
import { ThemeVariant } from './theme/theme.interface'

export const useThemeVariant = (): ThemeVariant => {
  const theme = React.useContext<StyledTheme>(ThemeContext)

  return getThemeVariant({ theme })
}
