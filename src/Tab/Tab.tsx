import * as React from 'react'

import useTheme from '../useTheme'

import TagProps from './Tab.interface'
import { TabContainer, SideElementContainer } from './Tab.style'

const Tab = React.forwardRef<HTMLButtonElement, TagProps>((props, ref) => {
  const { large, active, elementLeft, elementRight, children, ...rest } = props

  const theme = useTheme()

  return (
    <TabContainer
      ref={ref}
      data-large={large}
      data-active={active}
      data-background={theme.backgroundColor !== '#FFFFFF'}
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
      {children}
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
})

export default Tab
