import * as React from 'react'

import { BackgroundThemeProvider } from '../_internal/theme/BackgroundThemeProvider'
import { useCurrentBackground } from '../useCurrentBackground'
import { useThemeVariant } from '../useThemeVariant'

import { CardButtonProps } from './CardButton.interface'
import { CardButtonContainer } from './CardButton.style'

export const CardButton = React.forwardRef<HTMLButtonElement, CardButtonProps>(
  (props, ref) => {
    const defaultBackground = useCurrentBackground()
    const theme = useThemeVariant()

    const {
      outline = false,
      active = false,
      disabled,
      children,
      backgroundColor: rawBackgroundColor = defaultBackground,
      spacing = 'none',
      ...rest
    } = props

    const backgroundColor = disabled
      ? theme.neutralColor.withIntensityFading[600]
      : rawBackgroundColor

    return (
      <BackgroundThemeProvider backgroundColor={backgroundColor}>
        <CardButtonContainer
          ref={ref}
          type="button"
          {...rest}
          data-outline={outline}
          data-spacing={spacing}
          data-active={active}
          disabled={disabled}
        >
          {children}
        </CardButtonContainer>
      </BackgroundThemeProvider>
    )
  }
)
