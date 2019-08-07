import * as React from 'react'

import Text from '../Text'

import MenuLineProps from './MenuLine.interface'
import { MenuLineContainer, IconContainer } from './MenuLine.style'

const MenuLine: React.FunctionComponent<MenuLineProps> = ({
  children,
  active,
  iconLeft,
  iconRight,
  ...props
}) => {
  return (
    <MenuLineContainer {...props}>
      {iconLeft && (
        <IconContainer primary={active} data-position="left">
          {iconLeft}
        </IconContainer>
      )}
      <Text primary={active}>{children}</Text>
      {iconRight && (
        <IconContainer primary={active} data-position="right">
          {iconRight}
        </IconContainer>
      )}
    </MenuLineContainer>
  )
}

export default MenuLine
