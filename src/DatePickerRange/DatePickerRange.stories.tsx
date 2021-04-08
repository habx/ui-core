import { addDays } from 'date-fns'
import localeFr from 'date-fns/locale/fr'
import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'

import { DatePickerRange, DatePickerRangeProps } from './index'

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const GRID_PROPS = {
  onChange: () => {},
}

const GRID_LINES = [
  {
    title: 'Regular',
  },
  {
    title: 'Small',
    props: {
      small: true,
    },
  },
  {
    title: 'With label',
    props: {
      label: 'Pick a date range',
    },
  },
]

const GRID_ITEMS = [
  {
    label: 'Empty',
    props: {},
  },
  {
    label: 'With value',
    props: {
      value: {
        start: addDays(new Date(), -4),
        end: new Date(),
      },
    },
  },
  {
    label: 'With locale (fr)',
    props: {
      value: {
        start: addDays(new Date(), -4),
        end: new Date(),
      },
      locale: localeFr,
    },
  },
  {
    label: 'With one month visible',
    props: {
      value: {
        start: addDays(new Date(), -4),
        end: new Date(),
      },
      numberOfMonths: 1,
    },
  },
]

const Grid = withGrid<DatePickerRangeProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: DatePickerContainer,
})(DatePickerRange)

export default {
  title: 'Input/DatePickerRange',
  component: DatePickerRange,
}

export const basic = (props: DatePickerRangeProps) => (
  <DatePickerRange {...props} />
)

export const gallery = () => <Grid />

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/sG4JGDFLEBB7PYlJe4Uvzr/%F0%9F%A7%A9----Date-Picker?node-id=1%3A106',
    },
  },
}
