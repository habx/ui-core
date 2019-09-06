import * as React from 'react'

import withMarkdown from '../withMarkdown'

import ButtonProps from './Button.interface'
import { ButtonContainer, ButtonContent, IconContainer } from './Button.style'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      iconLeft,
      iconRight,
      outline = false,
      link = false,
      small = false,
      large = false,
      fullWidth = false,
      dangerouslySetInnerHTML,
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
        {...rest}
      >
        {iconLeft && (
          <IconContainer data-position="left" data-testid="icon-left-container">
            {iconLeft}
          </IconContainer>
        )}
        <ButtonContent
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          data-testid="label-container"
        >
          {children}
        </ButtonContent>
        {iconRight && (
          <IconContainer
            data-position="right"
            data-testid="icon-right-container"
          >
            {iconRight}
          </IconContainer>
        )}
      </ButtonContainer>
    )
  }
)

export default withMarkdown<HTMLButtonElement>({ inline: true })(Button)
