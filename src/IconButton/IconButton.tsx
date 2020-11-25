import * as React from 'react'

import { BackgroundThemeProvider } from '../_internal/theme/BackgroundThemeProvider'
import { useCurrentBackground } from '../_internal/theme/useCurrentBackground'
import { Icon } from '../Icon'
import { useThemeVariant } from '../useThemeVariant'

import { IconButtonProps } from './IconButton.interface'
import { IconButtonContainer, IconButtonContent } from './IconButton.style'

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      icon,
      colored,
      small = false,
      large = false,
      tiny = false,
      background = 'none',
      type = 'button',
      ...rest
    } = props

    const theme = useThemeVariant()
    const parentBackgroundColor = useCurrentBackground()

    const backgroundColor = React.useMemo(() => {
      switch (background) {
        case 'inherit':
          return parentBackgroundColor
        case 'white':
          return '#FFFFFF'
        case 'grey':
          return theme.neutralColor[200]
        case 'none':
          return undefined
      }
    }, [background, parentBackgroundColor, theme.neutralColor])

    const content = (
      <IconButtonContainer
        {...rest}
        ref={ref}
        data-small={small}
        data-large={large}
        data-tiny={tiny}
        data-has-bounding-background={
          backgroundColor && backgroundColor !== parentBackgroundColor
        }
        type={type}
        style={
          {
            '--icon-button-base-background': backgroundColor ?? 'unset',
          } as React.CSSProperties
        }
      >
        <IconButtonContent>
          <Icon icon={icon} colored={colored} />
        </IconButtonContent>
      </IconButtonContainer>
    )

    return backgroundColor ? (
      <BackgroundThemeProvider backgroundColor={backgroundColor}>
        {content}
      </BackgroundThemeProvider>
    ) : (
      content
    )
  }
)
