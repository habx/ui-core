import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'

import { PhoneInput, PhoneInputProps } from './index'

const PhoneInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const GRID_PROPS = {
  placeholder: 'phone number',
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
      label: 'Your phone number',
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
      value: '06 01 01 01 01',
    },
  },
  {
    label: 'Error',
    props: {
      value: 'habx@habx.com',
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

const Grid = withGrid<PhoneInputProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: PhoneInputContainer,
})(PhoneInput)

export default {
  title: 'Input/PhoneInput',
  component: PhoneInput,
}

export const basic = (props: PhoneInputProps) => <PhoneInput {...props} />

basic.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1845',
  },
}

export const gallery = () => <Grid />
