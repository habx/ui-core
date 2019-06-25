import * as React from 'react'

import { isNil } from '../_internal/data'
import useTheme from '../useTheme'

import ButtonProps from './Button.interface'
import { ButtonContainer, ButtonContent, IconContainer } from './Button.style'

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  showArrow: rawShowArrow,
  outline = false,
  small = false,
  large = false,
  fullWidth = false,
  ...props
}) => {
  const { useArrowOnButtons } = useTheme()
  const showArrow = isNil(rawShowArrow) ? useArrowOnButtons : rawShowArrow

  return (
    <ButtonContainer
      data-arrow={showArrow}
      data-outline={outline}
      data-large={large}
      data-small={small}
      data-full-width={fullWidth}
      {...props}
    >
      {iconLeft && (
        <IconContainer data-position="left">{iconLeft}</IconContainer>
      )}
      <ButtonContent data-arrow={showArrow}>{children}</ButtonContent>
      {iconRight && (
        <IconContainer data-position="right">{iconRight}</IconContainer>
      )}
    </ButtonContainer>
  )
}

export default Button
