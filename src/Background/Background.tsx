import * as React from 'react'

import { isFunction } from '../_internal/data'
import { BackgroundThemeProvider } from '../_internal/theme/BackgroundThemeProvider'
import { applyOpacityToColor, stringifyColor } from '../color'
import { useThemeVariant } from '../useThemeVariant'

import { BackgroundProps } from './Background.interface'
import { BackgroundContainer } from './Background.style'

export const Background = React.forwardRef<HTMLDivElement, BackgroundProps>(
  (props, ref) => {
    const {
      backgroundColor: rawBackgroundColor,
      opacity = 1,
      simulated,
      ...rest
    } = props

    const theme = useThemeVariant()

    const backgroundColorWithOpacity = React.useMemo(() => {
      const backgroundColor = isFunction(rawBackgroundColor)
        ? rawBackgroundColor(theme)
        : rawBackgroundColor

      if (opacity === 1) {
        return backgroundColor
      }

      return stringifyColor(applyOpacityToColor(backgroundColor, opacity))
    }, [rawBackgroundColor, opacity])

    return (
      <BackgroundThemeProvider backgroundColor={backgroundColorWithOpacity}>
        <BackgroundContainer ref={ref} {...rest} data-simulated={simulated} />
      </BackgroundThemeProvider>
    )
  }
)
