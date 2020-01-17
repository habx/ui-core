import * as React from 'react'

import useTheme from '../useTheme'

import TagProps from './Tag.interface'
import { TagContainer, SideElementContainer } from './Tag.style'

const Tag = React.forwardRef<HTMLButtonElement, TagProps>((props, ref) => {
  const { active, elementLeft, elementRight, children, ...rest } = props

  const theme = useTheme()

  return (
    <TagContainer
      ref={ref}
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
    </TagContainer>
  )
})

export default Tag
