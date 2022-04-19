import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'

import { Checkbox, CheckboxProps } from './index'

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`

const GRID_PROPS = {
  placeholder: 'Tell us more',
  onChange: () => {},
  label: 'Label',
}

const GRID_LINES = [
  {
    title: 'Regular + Empty',
  },
  {
    title: 'Regular + Checked',
    props: {
      checked: true,
    },
  },
  {
    title: 'Small + Empty',
    props: {
      small: true,
    },
  },
  {
    title: 'Small + Checked',
    props: {
      small: true,
      checked: true,
    },
  },
]

const GRID_ITEMS = [
  {
    label: 'Default',
  },
  {
    label: 'Error',
    props: {
      error: true,
    },
  },
  {
    label: 'Disabled',
    props: {
      disabled: true,
    },
  },
]

const Grid = withGrid<CheckboxProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: CheckboxContainer,
})(Checkbox)

export default {
  title: 'Input/Checkbox',
  component: Checkbox,
}

export const basic = (props: CheckboxProps) => <Checkbox {...props} />

basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=62%3A0',
  },
}

export const gallery = () => <Grid />
