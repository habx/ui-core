import * as React from 'react'
import { ThemeContext } from 'styled-components'

import { styledTheme } from './_internal/types'
import { BASE_THEME } from './theme'
import DesignSystemTheme from './theme/theme.interface'

const useTheme = (): DesignSystemTheme => {
  const fullTheme = React.useContext<styledTheme>(ThemeContext)

  return fullTheme && fullTheme.designSystem
    ? fullTheme.designSystem
    : BASE_THEME
}

export default useTheme
