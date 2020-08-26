import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_storybook/withGrid'

import PasswordInput, { PasswordInputProps } from './index'

const PasswordInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const GRID_PROPS = {
  placeholder: 'your password',
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
    title: 'With label',
    props: {
      label: 'Your password',
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
      value: 'hiddenvalue',
    },
  },
  {
    label: 'Error',
    props: {
      value: 'hid',
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

const Grid = withGrid<PasswordInputProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: PasswordInputContainer,
})(PasswordInput)

export default {
  title: 'Input/PasswordInput',
  component: PasswordInput,
}

export const basic = (props: PasswordInputProps) => <PasswordInput {...props} />

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />
