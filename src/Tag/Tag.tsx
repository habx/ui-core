import * as React from 'react'

import useTheme from '../useTheme'
import withMarkdown from '../withMarkdown'

import TagProps from './Tag.interface'
import { TagContainer, IconContainer } from './Tag.style'

const Tag = React.forwardRef<HTMLButtonElement, TagProps>((props, ref) => {
  const { large, active, elementLeft, elementRight, children, ...rest } = props

  const theme = useTheme()

  return (
    <TagContainer
      ref={ref}
      data-large={large}
      data-active={active}
      data-background={theme.backgroundColor !== '#FFFFFF'}
      {...rest}
    >
      {elementLeft && (
        <IconContainer
          data-position="left"
          data-testid="element-left-container"
        >
          {elementLeft}
        </IconContainer>
      )}
      {children}
      {elementRight && (
        <IconContainer
          data-position="right"
          data-testid="element-right-container"
        >
          {elementRight}
        </IconContainer>
      )}
    </TagContainer>
  )
})

export default withMarkdown<HTMLButtonElement>({ inline: true })<TagProps>(Tag)
