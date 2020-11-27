import * as React from 'react'

import { BackgroundThemeProvider } from '../_internal/theme/BackgroundThemeProvider'

import { BackgroundProps } from './Background.interface'
import { BackgroundContainer } from './Background.style'

export const Background = React.forwardRef<HTMLDivElement, BackgroundProps>(
  (props, ref) => {
    const { backgroundColor, opacity = 1, simulated, ...rest } = props

    return (
      <BackgroundThemeProvider backgroundColor={backgroundColor}>
        <BackgroundContainer
          ref={ref}
          {...rest}
          backgroundColor={backgroundColor}
          opacity={opacity}
          data-simulated={simulated}
        />
      </BackgroundThemeProvider>
    )
  }
)
