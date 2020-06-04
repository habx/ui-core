import * as React from 'react'

import CardProps from '../Card/Card.interface'

export default interface CardButtonProps
  extends Omit<CardProps, 'animated' | 'flat' | 'spacing'> {
  title: string
  illustration: string
  description: React.ReactNode
  markdown?: boolean
}
