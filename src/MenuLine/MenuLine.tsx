import * as React from 'react'

import MenuSectionContext from '../MenuSection/MenuSection.context'
import Text from '../Text'

import MenuLineProps from './MenuLine.interface'
import { MenuLineContainer, IconContainer } from './MenuLine.style'

const MenuLine = React.forwardRef<HTMLLIElement, MenuLineProps>(
  (props, ref) => {
    const { children, active, iconLeft, iconRight, ...rest } = props
    const sectionContext = React.useContext(MenuSectionContext)

    return (
      <MenuLineContainer ref={ref} {...rest} depth={sectionContext.depth}>
        {iconLeft && (
          <IconContainer secondary={active} data-position="left">
            {iconLeft}
          </IconContainer>
        )}
        <Text primary={!active} opacity={1}>
          {children}
        </Text>
        {iconRight && (
          <IconContainer secondary={active} data-position="right">
            {iconRight}
          </IconContainer>
        )}
      </MenuLineContainer>
    )
  }
)

export default MenuLine
