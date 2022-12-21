import * as React from 'react'

import { useHasColoredBackground } from '../useHasColoredBackground'

import { TagProps } from './Tag.interface'
import { TagContainer, TagContent, SideElementContainer } from './Tag.style'

export const Tag = React.forwardRef<HTMLButtonElement, TagProps>(
  (props, ref) => {
    const {
      active = false,
      children,
      elementLeft,
      elementRight,
      interactive = false,
      large = false,
      small = false,
      tiny = false,
      type = 'button',
      ...rest
    } = props

    const hasBackground = useHasColoredBackground()

    return (
      <TagContainer
        $tiny={tiny}
        as={interactive ? 'button' : undefined}
        data-active={active}
        data-background={hasBackground}
        data-interactive={interactive}
        data-large={large}
        data-small={small}
        ref={ref}
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
