import * as React from 'react'

import { CardProps } from '../Card'

export interface CardButtonProps extends Omit<CardProps, 'flat' | 'spacing'> {
  title: string
  illustration: string
  description: React.ReactNode
  markdown?: boolean
  disabled?: boolean
}
