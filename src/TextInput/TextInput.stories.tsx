import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'

import { TextInput, TextInputProps } from './index'

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const GRID_PROPS = {
  placeholder: 'votre@mail.com',
  onChange: () => {},
}

const GRID_LINES = [
  {
    title: 'Regular',
  },
  {
    title: 'Small',
    props: { small: true },
  },
  {
    title: 'Light',
    props: { light: true },
  },
  {
    title: 'Bare',
    props: { bare: true },
  },
  {
    title: 'With label',
    props: {
      label: 'Mail address',
    },
  },
]

const GRID_ITEMS = [
  {
    label: 'Empty',
  },
  {
    label: 'With value',
    props: {
      value: 'habx@habx.fr',
    },
  },
  {
    label: 'Error',
    props: {
      value: '06 01 01 01 01',
      error: true,
    },
  },
  {
    label: 'Disabled',
    props: {
      disabled: true,
    },
  },
  {
    label: 'With icon',
    props: {
      elementRight: '€',
    },
  },
]

const Grid = withGrid<TextInputProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: TextInputContainer,
})(TextInput)

export const basic = (props: TextInputProps) => <TextInput {...props} />

basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1845',
  },
}

export const gallery = () => <Grid />

export default {
  title: 'Input/TextInput',
  component: TextInput,
}
