import * as React from 'react'

import Icon from './Icon'
import IconProps from './Icon.interface'

const FlagFrance: React.FunctionComponent<IconProps> = props => (
  <Icon viewBox="0 0 21 15" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 0H21V15H14V0Z"
      fill="#F64800"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0H7V15H0V0Z"
      fill="#0071CE"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 0H14V15H7V0Z"
      fill="#fff"
    />
  </Icon>
)

export default FlagFrance
