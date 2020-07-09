import * as React from 'react'

import MenuSectionProps from './MenuSection.interface'
import { MenuSectionContainer } from './MenuSection.style'

const MenuSection = React.forwardRef<HTMLDivElement, MenuSectionProps>(
  (props, ref) => {
    const { children, ...rest } = props

    return (
      <MenuSectionContainer ref={ref} {...rest} data-section>
        {children}
      </MenuSectionContainer>
    )
  }
)

export default MenuSection
