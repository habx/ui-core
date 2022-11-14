import * as React from 'react'

import { TabSelectProps } from './TabSelect.interface'
import { TabSelectContainer } from './TabSelect.style'

export const TabSelect = React.forwardRef<HTMLDivElement, TabSelectProps>(
  (props, ref) => {
    const {
      large = false,
      small = false,
      fullWidth = false,
      children,
      ...rest
    } = props

    return (
      <TabSelectContainer
        ref={ref}
        data-large={large}
        data-small={small}
        data-full-width={fullWidth}
        {...rest}
      >
        {children}
      </TabSelectContainer>
    )
  }
)
