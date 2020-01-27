import * as React from 'react'

import Icon from '../Icon'

import FloatingButtonProps from './FloatingIconButton.interface'
import { FloatingButtonContainer } from './FloatingIconButton.style'

const FloatingIconButton = React.forwardRef<
  HTMLButtonElement,
  FloatingButtonProps
>((props, ref) => {
  const {
    colored,
    icon,
    fixed = false,
    position = 'bottom-right',
    ...rest
  } = props

  return (
    <FloatingButtonContainer
      ref={ref}
      {...rest}
      data-fixed={fixed}
      data-position={position}
    >
      <Icon icon={icon} colored={colored} />
    </FloatingButtonContainer>
  )
})

export default FloatingIconButton
