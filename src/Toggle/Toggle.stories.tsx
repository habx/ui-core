import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'

import { Toggle, ToggleProps } from './index'

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`

const GRID_PROPS = {
  onChange: () => {},
  label: 'My Toggle label',
}

const GRID_LINES = [
  {
    title: 'Not selected',
  },
  {
    title: 'Selected',
    props: {
      value: true,
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

const Grid = withGrid<ToggleProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: ToggleContainer,
  itemHorizontalSpace: 72,
})(Toggle)

export default {
  title: 'Input/Toggle',
  component: Toggle,
}

export const basic = (props: ToggleProps) => <Toggle {...props} />

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=62%3A0',
    },
  },
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />
