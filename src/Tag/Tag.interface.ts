import * as React from 'react'

import { styledAs } from '../_internal/types'

export default interface Tag
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  large?: boolean
  as?: styledAs
  elementRight?: React.ReactNode
  elementLeft?: React.ReactNode
}
