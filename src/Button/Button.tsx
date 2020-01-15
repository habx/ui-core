import * as React from 'react'

import withMarkdown from '../withMarkdown'

import ButtonProps from './Button.interface'
import { ButtonContainer, ButtonContent, IconContainer } from './Button.style'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      elemenftLeft,
      elementRight,
      outline = false,
      link = false,
      small = false,
      large = false,
      fullWidth = false,
      dangerouslySetInnerHTML,
      type = 'button',
      ...rest
    } = props

    return (
      <ButtonContainer
        ref={ref}
        data-outline={outline}
        data-link={link}
        data-large={large}
        data-small={small}
        data-full-width={fullWidth}
        type={type}
        {...rest}
      >
        {elemenftLeft && (
          <IconContainer data-position="left" data-testid="icon-left-container">
            {elemenftLeft}
          </IconContainer>
        )}
        <ButtonContent
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          data-testid="label-container"
        >
          {children}
        </ButtonContent>
        {elementRight && (
          <IconContainer
            data-position="right"
            data-testid="icon-right-container"
          >
            {elementRight}
          </IconContainer>
        )}
      </ButtonContainer>
    )
  }
)

export default withMarkdown<HTMLButtonElement>({ inline: true })<ButtonProps>(
  Button
)
