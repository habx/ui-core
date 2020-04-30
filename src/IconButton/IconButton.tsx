import * as React from 'react'

import Icon from '../Icon'
import palette from '../palette'
import ThemeProvider from '../ThemeProvider'

import IconButtonProps from './IconButton.interface'
import { IconButtonContainer } from './IconButton.style'

const BACKGROUNDS = {
  grey: palette.darkBlue[200],
  white: '#FFFFFF',
  none: null,
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
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

    const backgroundColor = BACKGROUNDS[background]

    const content = (
      <IconButtonContainer
        {...rest}
        ref={ref}
        data-small={small}
        data-large={large}
        data-tiny={tiny}
        data-has-bounding-background={!!backgroundColor}
        type={type}
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        <Icon icon={icon} colored={colored} />
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
