import * as React from 'react'

import { isNil } from '../_internal/data'

import { BadgeProps } from './Badge.interface'
import { BadgeContainer } from './Badge.style'

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (props, ref) => {
    const { content, max, disabled, ...rest } = props

    const value = React.useMemo(() => {
      if (isNil(content) || Number.isNaN(content) || isNil(max)) {
        return content
      }

      if (content > max) {
        return `${max}+`
      }

      return content
    }, [content, max])

    return (
      <BadgeContainer {...rest} ref={ref} data-disabled={disabled}>
        {value}
      </BadgeContainer>
    )
  }
)
