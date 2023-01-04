import * as React from 'react'

import { IconProps } from './Icon.interface'
import { IconContainer } from './Icon.style'

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  (props, ref) => {
    const { icon, colored = false, ...rest } = props
    const url = `https://habx.github.io/ui-core/icons/${icon}.svg`

    return (
      <IconContainer ref={ref} data-colored={colored} {...rest} url={url} />
    )
  }
)
