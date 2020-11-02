import * as React from 'react'

import { IconProps } from './Icon.interface'
import { IconContainer } from './Icon.style'

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  (props, ref) => {
    const { icon, colored = false, ...rest } = props
    const url = `//res.cloudinary.com/habx/image/upload/fl_sanitize/icons/${icon}.svg`

    return (
      <IconContainer ref={ref} data-colored={colored} {...rest} url={url} />
    )
  }
)
