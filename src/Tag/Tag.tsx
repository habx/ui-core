import * as React from 'react'

import useHasColoredBackground from '../_internal/useHasColoredBackground'

import TagProps from './Tag.interface'
import { TagContainer, SideElementContainer } from './Tag.style'

const Tag = React.forwardRef<HTMLButtonElement, TagProps>((props, ref) => {
  const { active, elementLeft, elementRight, children, ...rest } = props

  const hasBackground = useHasColoredBackground()

  return (
    <TagContainer
      ref={ref}
      data-active={active}
      data-background={hasBackground}
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
