import * as React from 'react'

import { CardButtonProps } from '../CardButton'

export interface CardButtonWithIllustrationProps
  extends Omit<CardButtonProps, 'children' | 'spacing'> {
  title: string
  description: React.ReactNode
  illustration: string
  markdown?: boolean
}
