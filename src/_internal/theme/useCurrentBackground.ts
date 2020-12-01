import * as React from 'react'
import { ThemeContext } from 'styled-components'

import { getCurrentBackground, StyledTheme } from '../../theme'

export const useCurrentBackground = (config?: { useRootTheme?: boolean }) => {
  const theme = React.useContext<StyledTheme>(ThemeContext)

  return getCurrentBackground({ theme }, config)
}
