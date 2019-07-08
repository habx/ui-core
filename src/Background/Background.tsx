import * as React from 'react'

import ThemeProvider from '../ThemeProvider'

import BackgroundProps from './Background.interface'
import { BackgroundContainer } from './Background.style'

const Background: React.FunctionComponent<BackgroundProps> = ({
  backgroundColor,
  opacity = 1,
  ...rest
}) => (
  <ThemeProvider backgroundColor={backgroundColor}>
    <BackgroundContainer
      {...rest}
      backgroundColor={backgroundColor}
      opacity={opacity}
    />
  </ThemeProvider>
)

export default Background
