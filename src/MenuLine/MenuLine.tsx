import * as React from 'react'

import MenuContext from '../Menu/Menu.context'
import Text from '../Text'

import MenuLineProps from './MenuLine.interface'
import { MenuLineContainer, SideElementContainer } from './MenuLine.style'

export const MenuLine = React.forwardRef<HTMLLIElement, MenuLineProps>(
  (props, ref) => {
    const {
      children,
      active,
      elementLeft,
      warning,
      primary,
      elementRight,
      onClick,
      disabled,
      ...rest
    } = props
    const menuContext = React.useContext(MenuContext)
    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLLIElement>) => {
        menuContext.close()
        if (onClick) {
          onClick(e)
        }
      },
      [onClick, menuContext]
    )
    return (
      <MenuLineContainer
        ref={ref}
        {...rest}
        onClick={handleClick}
        data-disabled={disabled}
        data-active={active}
      >
        {elementLeft && (
          <SideElementContainer
            primary={primary}
            warning={warning}
            data-position="left"
          >
            {elementLeft}
          </SideElementContainer>
        )}
        <Text primary={primary} warning={warning} opacity={1}>
          {children}
        </Text>
        {elementRight && (
          <SideElementContainer
            primary={primary}
            warning={warning}
            data-position="right"
          >
            {elementRight}
          </SideElementContainer>
        )}
      </MenuLineContainer>
    )
  }
)
