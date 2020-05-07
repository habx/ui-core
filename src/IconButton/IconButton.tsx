import * as React from 'react'

import Icon from '../Icon'
import palette from '../palette'
import ThemeProvider from '../ThemeProvider'
import useTheme from '../useTheme'

import IconButtonProps from './IconButton.interface'
import { IconButtonContainer, IconButtonContent } from './IconButton.style'

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      icon,
      colored,
      small = false,
      large = false,
      tiny = false,
      background = 'inherit',
      type = 'button',
      ...rest
    } = props

    const theme = useTheme()

    const backgroundColor = React.useMemo(() => {
      switch (background) {
        case 'inherit':
          return theme.backgroundColor
        case 'white':
          return '#FFFFFF'
        case 'grey':
          return palette.darkBlue[200]
      }
    }, [background, theme.backgroundColor])

    const content = (
      <IconButtonContainer
        {...rest}
        ref={ref}
        data-small={small}
        data-large={large}
        data-tiny={tiny}
        data-has-bounding-background={backgroundColor !== theme.backgroundColor}
        type={type}
        style={
          {
            '--icon-button-base-background': backgroundColor,
          } as React.CSSProperties
        }
      >
        <IconButtonContent>
          <Icon icon={icon} colored={colored} />
        </IconButtonContent>
      </IconButtonContainer>
    )

    return backgroundColor ? (
      <ThemeProvider backgroundColor={backgroundColor}>{content}</ThemeProvider>
    ) : (
      content
    )
  }
)

export default IconButton
