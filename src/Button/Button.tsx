import * as React from 'react'

import ButtonProps from './Button.interface'
import { ButtonContainer, ButtonContent, IconContainer } from './Button.style'

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  outline = false,
  link = false,
  small = false,
  large = false,
  fullWidth = false,
  ...props
}) => (
  <ButtonContainer
    data-outline={outline}
    data-link={link}
    data-large={large}
    data-small={small}
    data-full-width={fullWidth}
    {...props}
  >
    {iconLeft && <IconContainer data-position="left">{iconLeft}</IconContainer>}
    <ButtonContent>{children}</ButtonContent>
    {iconRight && (
      <IconContainer data-position="right">{iconRight}</IconContainer>
    )}
  </ButtonContainer>
)

export default Button
