import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'
import { Icon } from '../Icon'

import { Select, SelectProps } from './index'
import { OPTIONS, COLORED_OPTIONS } from './Select.data'

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const TinySelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
`

const WrappedSelect: React.FunctionComponent<SelectProps> = (props) =>
  props.tiny ? (
    <TinySelectContainer>
      <Select {...props} />
    </TinySelectContainer>
  ) : (
    <SelectContainer>
      <Select {...props} />
    </SelectContainer>
  )

const GRID_PROPS = {
  placeholder: 'French cities',
  onChange: () => {},
  options: OPTIONS,
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
    title: 'Tiny',
    props: {
      tiny: true,
    },
  },
  {
    title: 'Light',
    props: {
      light: true,
    },
  },
  {
    title: 'Bare',
    props: {
      bare: true,
    },
  },
  {
    title: 'With label',
    props: {
      label: 'Pick a country',
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
      value: OPTIONS[2].value,
    },
  },
  {
    label: 'Filterable',
    props: {
      filterable: true,
    },
  },
  {
    label: 'Disabled',
    props: {
      disabled: true,
    },
  },
  {
    label: 'Colored',
    props: {
      options: COLORED_OPTIONS,
      value: 'confirmed',
    },
  },
  {
    label: 'Multi',
    props: {
      multi: true,
      value: [OPTIONS[2].value, OPTIONS[4].value],
    },
  },
  {
    label: 'Can reset',
    props: {
      canReset: true,
      multi: true,
      value: [OPTIONS[2].value, OPTIONS[4].value],
    },
  },
  {
    label: 'Right element',
    props: {
      value: OPTIONS[2].value,
      elementRight: <Icon icon="house-building-outline" />,
    },
  },
]

const Grid = withGrid<SelectProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(WrappedSelect)

export default {
  title: 'Input/Select',
  component: Select,
}

export const basic = (props: SelectProps) => (
  <Select options={OPTIONS} {...props} />
)

export const gallery = () => <Grid />

gallery.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1846',
  },
}
