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
      secondary,
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
            primary={!active && !secondary}
            warning={warning}
            data-position="left"
          >
            {elementLeft}
          </IconContainer>
        )}
        <Text primary={!active && !secondary} warning={warning} opacity={1}>
          {children}
        </Text>
        {elementRight && (
          <IconContainer
            primary={!active && !secondary}
            warning={warning}
            data-position="right"
          >
            {elementRight}
          </IconContainer>
        )}
      </MenuLineContainer>
    )
  }
)

export default MenuLine
