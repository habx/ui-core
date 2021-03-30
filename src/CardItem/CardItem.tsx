import * as React from 'react'

import { Icon } from '../Icon'

import { CardItemProps } from './CardItem.interface'
import {
  CardItemContainer,
  CardItemContent,
  ChevronIconContainer,
} from './CardItem.style'

export const CardItem = React.forwardRef<HTMLButtonElement, CardItemProps>(
  (props, ref) => {
    const { icon, children, ...rest } = props

    return (
      <CardItemContainer ref={ref} {...rest}>
        {icon && <Icon icon={icon} />}
        <CardItemContent>{children}</CardItemContent>
        <ChevronIconContainer>
          <Icon icon="chevron-east" />
        </ChevronIconContainer>
      </CardItemContainer>
    )
  }
)
