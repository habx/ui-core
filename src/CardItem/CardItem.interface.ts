import * as React from 'react'

import { IconKey } from '../Icon'

export interface CardItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: IconKey
  disabled?: boolean
}
