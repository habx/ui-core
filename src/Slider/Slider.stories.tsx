import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { config } from 'storybook-addon-designs'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'

import Slider from './Slider'
import SliderProps from './Slider.interface'

type Props = Omit<SliderProps, 'onChange'>

const SliderWithState: React.FunctionComponent<Props> = ({
  value: initialValue,
  ...props
}) => {
  const [value, setValue] = React.useState(initialValue)

  return <Slider {...props} onChange={value => setValue(value)} value={value} />
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
]

const Grid = withGrid<Props>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: TextInputContainer,
})(SliderWithState)

storiesOf('Input|Slider', module)
  .addDecorator(withKnobs)
  .add('gallery', () => <Grid />, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=60%3A6',
    }),
  })
