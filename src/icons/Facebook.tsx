import * as React from 'react'

import Icon from './Icon'
import IconProps from './Icon.interface'

const Facebook: React.FunctionComponent<IconProps> = props => (
  <Icon viewBox="0 0 9 17" {...props}>
    <path d="M7.44788 3.10627H8.98438V0.493767C8.71208 0.454183 7.79797 0.355225 6.72826 0.355225C4.53048 0.355225 3.01344 1.76043 3.01344 4.25418V6.31252H0.640625V9.24168H2.97454V17H6.00863V9.24168H8.47869L8.86768 6.31252H6.00863V4.55106C6.00863 3.70002 6.22257 3.10627 7.44788 3.10627Z" />
  </Icon>
)

export default Facebook
