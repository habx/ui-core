import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'

import { Slider, SliderProps } from './index'

type Props = Omit<SliderProps, 'onChange' | 'dotType'>

const SliderWithState: React.FunctionComponent<Props> = ({
  value: initialValue,
  ...props
}) => {
  const [value, setValue] = React.useState(initialValue)

  return (
    <Slider
      {...props}
      onChange={(newValue) => setValue(newValue)}
      value={value}
    />
  )
}

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const GRID_PROPS = {}

const GRID_LINES = [
  {
    title: 'Regular',
    props: {
      value: 40,
      dotType: 'regular',
    },
  },
  {
    title: 'With tag',
    props: {
      value: 40,
      dotType: 'tag',
    },
  },
  {
    title: 'No value',
    props: {
      dotType: 'regular',
    },
  },
  {
    title: 'No value range',
    props: {
      range: true,
      dotType: 'regular',
    },
  },
  {
    title: 'Custom suffix',
    props: {
      tooltipSuffix: 'm²',
      value: 40,
    },
  },
  {
    title: 'Range',
    props: {
      range: true,
      value: [12, 46] as [number, number],
    },
  },
  {
    title: 'Indicator',
    props: {
      value: [0, 30] as [number, number],
      indicators: [{ range: [70, 100] as [number, number] }],
      range: true,
      dotType: 'regular',
    },
  },
  {
    title: 'Custom min / max',
    props: {
      min: 10,
      max: 50,
      value: 24,
    },
  },
  {
    title: 'Custom values',
    props: {
      customValues: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
      range: true,
    },
  },
  {
    title: 'With label',
    props: {
      label: 'Typology',
      value: 2,
      customValues: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'],
    },
  },
]

const GRID_ITEMS = [
  {
    label: 'Basic',
  },
  {
    label: 'Disabled',
    props: {
      disabled: true,
    },
  },
  {
    label: 'Fixed tooltip (regular dot only)',
    props: {
      shouldTooltipFollowDot: false,
      dotType: 'regular',
    },
  },
]

const Grid = withGrid<Props>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: TextInputContainer,
  itemHorizontalSpace: 16,
})(SliderWithState)

export default {
  title: 'Input/Slider',
  component: Slider,
}

export const basic = (props: SliderProps) => <Slider {...props} />

basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=60%3A6',
  },
}

export const gallery = () => <Grid />
