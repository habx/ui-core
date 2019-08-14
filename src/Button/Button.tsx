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
          <IconContainer data-position="left">{iconLeft}</IconContainer>
        )}
        <ButtonContent dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
          {children}
        </ButtonContent>
        {iconRight && (
          <IconContainer data-position="right">{iconRight}</IconContainer>
        )}
      </ButtonContainer>
    )
  }
)

export default withMarkdown({ inline: true })(Button)
