import * as React from 'react'

import Icon from '../Icon'

import IconButtonProps from './IconButton.interface'
import { IconButtonContainer } from './IconButton.style'

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { icon, colored, small = false, large = false, ...rest } = props

    return (
      <IconButtonContainer
        {...rest}
        ref={ref}
        data-small={small}
        data-large={large}
      >
        <Icon icon={icon} colored={colored} />
      </IconButtonContainer>
    )
  }
)

export default IconButton
