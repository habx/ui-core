import * as React from 'react'

import { useHasColoredBackground } from '../useHasColoredBackground'

import { TagProps } from './Tag.interface'
import { TagContainer, TagContent, SideElementContainer } from './Tag.style'

export const Tag = React.forwardRef<HTMLButtonElement, TagProps>(
  (props, ref) => {
    const {
      active = false,
      large = false,
      small = false,
      interactive = false,
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
        as={interactive ? 'button' : undefined}
        data-active={active}
        data-small={small}
        data-large={large}
        data-interactive={interactive}
        data-background={hasBackground}
        type={interactive ? type : undefined}
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
        <TagContent>{children}</TagContent>
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
