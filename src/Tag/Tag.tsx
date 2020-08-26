import * as React from 'react'

import useHasColoredBackground from '../_internal/useHasColoredBackground'

import TagProps from './Tag.interface'
import { TagContainer, SideElementContainer } from './Tag.style'

export const Tag = React.forwardRef<HTMLButtonElement, TagProps>(
  (props, ref) => {
    const {
      active = false,
      large = false,
      small = false,
      interactive = true,
      type = 'button',
      elementLeft,
      elementRight,
      children,
      ...rest
    } = props

    const hasBackground = useHasColoredBackground()

    return (
      <TagContainer
        ref={ref}
        data-active={active}
        data-small={small}
        data-large={large}
        data-interactive={interactive}
        data-background={hasBackground}
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
  }
)
