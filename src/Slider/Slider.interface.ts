import * as React from 'react'

import WithLabel from '../withLabel/withLabel.interface'

export type Tooltip = { content: React.ReactNode; position: number }

export type Element = number | null

export type Value = Element | [Element, Element]

export type Indicator = {
  color: string
  range: [number, number]
}

export interface SliderInnerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'> {
  customValues?: string[]
  min?: number
  max?: number
  step?: number
  range?: boolean
  dots?: boolean
  indicators?: (Omit<Indicator, 'color' | 'position'> & { color?: string })[]

  tooltipFormatter?: (
    label: string | number | [number, number],
    rawTooltip: string
  ) => string
  tooltipSuffix?: string

  value: Value
  onChange?: (value: Value) => void
  disabled?: boolean
  shouldTooltipFollowDot?: boolean
}

export default interface SliderProps extends WithLabel<SliderInnerProps> {}
