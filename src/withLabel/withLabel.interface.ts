import * as React from 'react'

type LabelType = 'regular' | 'small' | 'caption'

export interface LabelReceivedProps {
  label?: string
  labelType?: LabelType
  labelElementRight?: React.ReactNode
  id?: string
  error?: boolean
  disabled?: boolean
}

export interface WithLabelOptions {
  padding?: 'small' | 'regular' | 'large'
  orientation?: 'vertical' | 'horizontal' | 'horizontal-reverse'
  componentName?: string
  type?: LabelType
}

export type WithLabel<InnerProps extends {} = {}> = InnerProps &
  LabelReceivedProps
