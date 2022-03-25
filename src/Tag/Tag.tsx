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
      icon = false,
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
        data-icon={icon}
        data-children={typeof children}
        type={type}
        {...rest}
      >
        {elementLeft && !icon && (
          <SideElementContainer
            data-position="left"
            data-testid="element-left-container"
          >
            {elementLeft}
          </SideElementContainer>
        )}
        <TagContent>{children}</TagContent>
        {elementRight && !icon && (
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
