import * as React from 'react'

import FloatingButtonProps from './FloatingButton.interface'
import {
  FloatingButtonContainer,
  FloatingButtonContent,
  SideElementContainer,
} from './FloatingButton.style'

const FloatingButton = React.forwardRef<HTMLButtonElement, FloatingButtonProps>(
  (props, ref) => {
    const {
      children,
      small,
      elementLeft,
      elementRight,
      fixed = false,
      position = 'bottom',
      ...rest
    } = props

    return (
      <FloatingButtonContainer
        ref={ref}
        {...rest}
        data-small={small}
        data-fixed={fixed}
        data-position={position}
      >
        {elementLeft && (
          <SideElementContainer
            data-position="left"
            data-testid="element-left-container"
          >
            {elementLeft}
          </SideElementContainer>
        )}
        <FloatingButtonContent data-testid="label-container">
          {children}
        </FloatingButtonContent>
        {elementRight && (
          <SideElementContainer
            data-position="right"
            data-testid="element-right-container"
          >
            {elementRight}
          </SideElementContainer>
        )}
      </FloatingButtonContainer>
    )
  }
)

export default FloatingButton
