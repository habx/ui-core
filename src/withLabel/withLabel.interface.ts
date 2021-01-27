import * as React from 'react'

import { TextTypes } from '../Text'

export type WithLabel<InnerProps extends {} = {}> = InnerProps & {
  label?: React.ReactNode
  labelType?: TextTypes
  error?: boolean
  disabled?: boolean
}

export type WithSemanticLabel<Props extends {} = {}> = WithLabel<Props> & {
  id?: string
}
