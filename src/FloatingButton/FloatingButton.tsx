import * as React from 'react'

import FloatingButtonProps from './FloatingButton.interface'
import {
  FloatingButtonContainer,
  SideElementContainer,
} from './FloatingButton.style'

const FloatingButton = React.forwardRef<HTMLButtonElement, FloatingButtonProps>(
  (props, ref) => {
    const { children, small, elementLeft, elementRight, ...rest } = props

    return (
      <FloatingButtonContainer ref={ref} {...rest} data-small={small}>
        {elementLeft && (
          <SideElementContainer data-position="left">
            {elementLeft}
          </SideElementContainer>
        )}
        {children}
        {elementRight && (
          <SideElementContainer data-position="right">
            {elementRight}
          </SideElementContainer>
        )}
      </FloatingButtonContainer>
    )
  }
)

export default FloatingButton
