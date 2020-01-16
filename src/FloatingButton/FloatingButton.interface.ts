import * as React from 'react'

import { Button, styledAs } from '../_internal/types'

export default interface FloatingButtonProps extends Omit<Button, 'large'> {
  elementLeft?: React.ReactNode
  elementRight?: React.ReactNode
  position?: 'bottom' | 'top'
  as?: styledAs
}
