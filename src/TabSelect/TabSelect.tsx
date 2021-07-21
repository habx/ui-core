import * as React from 'react'

import { TabSelectProps } from './TabSelect.interface'
import { TabSelectContainer } from './TabSelect.style'

export const TabSelect = React.forwardRef<HTMLButtonElement, TabSelectProps>(
  (props, ref) => {
    const {
      large = false,
      small = false,
      type = 'button',
      children,
      ...rest
    } = props

    return (
      <TabSelectContainer
        ref={ref}
        data-large={large}
        data-small={small}
        type={type}
        {...rest}
      >
        {children}
      </TabSelectContainer>
    )
  }
)
