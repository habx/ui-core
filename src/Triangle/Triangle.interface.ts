import * as React from 'react'

import { styledAs } from '../_internal/types'

export type Position = string | number

export interface TriangleProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: styledAs
  origin: {
    top?: Position
    right?: Position
    bottom?: Position
    left?: Position
  }
  width: Position
  height: Position
  color: string
}
