import * as React from 'react'

import MenuSectionContext from '../MenuSection/MenuSection.context'
import Text from '../Text'

import MenuLineProps from './MenuLine.interface'
import { MenuLineContainer, IconContainer } from './MenuLine.style'

const MenuLine = React.forwardRef<HTMLLIElement, MenuLineProps>(
  (props, ref) => {
    const { children, active, elemenftLeft, elementRight, ...rest } = props
    const sectionContext = React.useContext(MenuSectionContext)

    return (
      <MenuLineContainer ref={ref} {...rest} depth={sectionContext.depth}>
        {elemenftLeft && (
          <IconContainer secondary={active} data-position="left">
            {elemenftLeft}
          </IconContainer>
        )}
        <Text primary={!active} opacity={1}>
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
