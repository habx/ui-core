import * as React from 'react'

import { isFunction } from '../_internal/data'
import { BackgroundThemeProvider } from '../_internal/theme/BackgroundThemeProvider'
import { useThemeVariant } from '../useThemeVariant'

import { BackgroundProps } from './Background.interface'
import { BackgroundContainer } from './Background.style'

export const Background = React.forwardRef<HTMLDivElement, BackgroundProps>(
  (props, ref) => {
    const { backgroundColor: rawBackgroundColor, simulated, ...rest } = props

    const theme = useThemeVariant()

    const backgroundColorWithOpacity = React.useMemo(
      () =>
        isFunction(rawBackgroundColor)
          ? rawBackgroundColor(theme)
          : rawBackgroundColor,
      [rawBackgroundColor, theme]
    )

    return (
      <BackgroundThemeProvider backgroundColor={backgroundColorWithOpacity}>
        <BackgroundContainer ref={ref} {...rest} data-simulated={simulated} />
      </BackgroundThemeProvider>
    )
  }
)
