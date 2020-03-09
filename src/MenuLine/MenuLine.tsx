import * as React from 'react'

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
      ...rest
    } = props
    const sectionContext = React.useContext(MenuSectionContext)

    return (
      <MenuLineContainer ref={ref} {...rest} depth={sectionContext.depth}>
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
          <IconContainer secondary={active} data-position="right">
            {elementRight}
          </IconContainer>
        )}
      </MenuLineContainer>
    )
  }
)

export default MenuLine
