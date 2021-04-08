import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'

import { TextArea, TextAreaProps } from './index'

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const GRID_PROPS = {
  placeholder: 'Tell us more',
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
      label: 'Write something here',
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
      value: 'Hello',
    },
  },
  {
    label: 'Error',
    props: {
      value: 'He',
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

const Grid = withGrid<TextAreaProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: TextAreaContainer,
})(TextArea)

export default {
  title: 'Input/TextArea',
  component: TextArea,
}

export const basic = (props: TextAreaProps) => <TextArea {...props} />

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1845',
    },
  },
}

export const gallery = () => <Grid />
