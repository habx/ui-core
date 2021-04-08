import localeFr from 'date-fns/locale/fr'
import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'

import { DatePicker, DatePickerProps } from './index'

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
      value: new Date(),
    },
  },
  {
    label: 'With locale (fr)',
    props: {
      value: new Date(),
      locale: localeFr,
    },
  },
]

const Grid = withGrid<DatePickerProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: DatePickerContainer,
})(DatePicker)

export default {
  title: 'Input/DatePicker',
  component: DatePicker,
}

export const basic = (props: DatePickerProps) => <DatePicker {...props} />

export const gallery = () => <Grid />

gallery.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/sG4JGDFLEBB7PYlJe4Uvzr/%F0%9F%A7%A9----Date-Picker?node-id=1%3A106',
  },
}
