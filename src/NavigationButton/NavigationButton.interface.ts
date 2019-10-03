import * as React from 'react'

import { Except, styledAs } from '../_internal/types'

export default interface NavigationButtonProps
  extends Except<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  as?: styledAs
  secondary?: boolean
  previous?: boolean
  large?: boolean
  small?: boolean
  usage?: 'navigation' | 'toggle'
}
