import * as React from 'react'

import IconProps from './Icon.interface'
import { IconContainer } from './Icon.style'

const Icon: React.FunctionComponent<IconProps> = ({ icon, ...props }) => {
  const url = `//res.cloudinary.com/habx/image/upload/icons/${icon}.svg`

  console.log(url)

  return <IconContainer {...props} url={url} />
}

export default Icon
