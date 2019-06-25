import * as React from 'react'
import { ThemeContext } from 'styled-components'

import { styledTheme } from './_internal/types'
import { BASE_THEME } from './theme/theme'

const useTheme = () => {
  const fullTheme: styledTheme = React.useContext(ThemeContext)

  return fullTheme ? fullTheme.designSystem : BASE_THEME
}

export default useTheme
