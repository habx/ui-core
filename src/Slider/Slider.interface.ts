import * as React from 'react'

import { WithLabel } from '../withLabel'

export type Tooltip = { content: React.ReactNode; position: number }

export type Element = number | null

export type Value = Element | [Element, Element]

export type Indicator = {
  color: string
  range: [number, number]
}

export type SliderTooltipFormatter = (
  label: string | number | [number, number],
  rawTooltip: string
) => string

export interface SliderInnerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'> {
  customValues?: string[]
  min?: number
  max?: number
  step?: number
  range?: boolean
  dots?: boolean
  /** @default 'tag' */
  dotType?: 'regular' | 'tag'
  reversed?: boolean
  indicators?: (Omit<Indicator, 'color' | 'position'> & { color?: string })[]

  tooltipFormatter?: SliderTooltipFormatter
  /** @deprecated Use `tooltipFormatter` instead. */
  tooltipSuffix?: string

  value: Value
  onChange?: (value: Value) => void
  disabled?: boolean
  shouldTooltipFollowDot?: boolean
}

export interface SliderProps extends WithLabel<SliderInnerProps> {}
