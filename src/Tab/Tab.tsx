import * as React from 'react'

import { TabProps } from './Tab.interface'
import { TabContainer, TabContent, SideElementContainer } from './Tab.style'

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  (props, ref) => {
    const {
      active = false,
      children,
      elementLeft,
      elementRight,
      large = false,
      small = false,
      tiny = false,
      type = 'button',
      ...rest
    } = props

    return (
      <TabContainer
        $tiny={tiny}
        data-active={active}
        data-large={large}
        data-small={small}
        ref={ref}
        type={type}
        {...rest}
      >
        {elementLeft && (
          <SideElementContainer
            data-position="left"
            data-testid="element-left-container"
          >
            {elementLeft}
          </SideElementContainer>
        )}
        <TabContent>{children}</TabContent>
        {elementRight && (
          <SideElementContainer
            data-position="right"
            data-testid="element-right-container"
          >
            {elementRight}
          </SideElementContainer>
        )}
      </TabContainer>
    )
  }
)
