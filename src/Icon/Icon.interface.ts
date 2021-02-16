import * as React from 'react'

import { styledAs } from '../_internal/types'

import { icons } from './Icon.data'

export type IconKey = typeof icons[number] | string

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: IconKey
  colored?: boolean
  as?: styledAs
}
