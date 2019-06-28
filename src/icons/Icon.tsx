import * as React from 'react'

import IconProps from './Icon.interface'

const Icon: React.FunctionComponent<IconProps> = ({ children, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    {children}
  </svg>
)

Icon.defaultProps = {
  height: 16,
}

export default Icon
