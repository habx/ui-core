import * as React from 'react'

import IconProps from './Icon.interface'
import { IconContainer } from './Icon.style'

const Icon: React.FunctionComponent<IconProps> = ({
  icon,
  colored = false,
  ...props
}) => {
  const url = `//res.cloudinary.com/habx/image/upload/icons/${icon}.svg`

  return <IconContainer data-colored={colored} {...props} url={url} />
}

export default Icon
