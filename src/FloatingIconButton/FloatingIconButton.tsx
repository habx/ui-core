import * as React from 'react'

import { Icon } from '../Icon'

import { FloatingIconButtonProps } from './FloatingIconButton.interface'
import { FloatingButtonContainer } from './FloatingIconButton.style'

export const FloatingIconButton = React.forwardRef<
  HTMLButtonElement,
  FloatingIconButtonProps
>((props, ref) => {
  const {
    colored,
    icon,
    fixed = false,
    small = false,
    position = 'bottom-right',
    type = 'button',
    ...rest
  } = props

  return (
    <FloatingButtonContainer
      ref={ref}
      {...rest}
      data-fixed={fixed}
      data-small={small}
      data-position={position}
      type={type}
    >
      <Icon icon={icon} colored={colored} />
    </FloatingButtonContainer>
  )
})
