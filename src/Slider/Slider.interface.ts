import * as React from 'react'

export type Tooltip = { content: React.ReactNode; position: number }

export type Element = number | null

export type Value = Element | [Element, Element]

export type Indicator = {
  color: string
  range: [number, number]
}

export default interface SliderProps {
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
}
