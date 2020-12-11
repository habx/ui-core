import * as React from 'react'

import { MenuSectionProps } from './MenuSection.interface'
import {
  MenuSectionContainer,
  MenuSectionContent,
  MenuSectionLabel,
} from './MenuSection.style'

export const MenuSection = React.forwardRef<HTMLDivElement, MenuSectionProps>(
  (props, ref) => {
    const { children, label, ...rest } = props

    return (
      <MenuSectionContainer ref={ref} {...rest} data-section>
        {!!label && (
          <MenuSectionLabel variation="title">{label}</MenuSectionLabel>
        )}
        <MenuSectionContent data-has-label={!!label}>
          {children}
        </MenuSectionContent>
      </MenuSectionContainer>
    )
  }
)
