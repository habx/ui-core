import * as React from 'react'

import MenuContext from '../Menu/Menu.context'
import MenuSectionContext from '../MenuSection/MenuSection.context'
import Text from '../Text'

import MenuLineProps from './MenuLine.interface'
import { MenuLineContainer, IconContainer } from './MenuLine.style'

const MenuLine = React.forwardRef<HTMLLIElement, MenuLineProps>(
  (props, ref) => {
    const {
      children,
      active,
      elementLeft,
      warning,
      elementRight,
      onClick,
      disabled,
      ...rest
    } = props
    const sectionContext = React.useContext(MenuSectionContext)
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
        depth={sectionContext.depth}
        onClick={handleClick}
        data-disabled={disabled}
      >
        {elementLeft && (
          <IconContainer
            secondary={active}
            data-position="left"
            warning={warning}
          >
            {elementLeft}
          </IconContainer>
        )}
        <Text primary={!active} opacity={1} warning={warning}>
          {children}
        </Text>
        {elementRight && (
          <IconContainer
            secondary={active}
            data-position="right"
            warning={warning}
          >
            {elementRight}
          </IconContainer>
        )}
      </MenuLineContainer>
    )
  }
)

export default MenuLine
