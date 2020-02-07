import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'

import TextArea from './index'
import TextAreaProps from './TextArea.interface'

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
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

export const dynamic = () => (
  <TextAreaContainer>
    <TextArea
      value={text('Value', '')}
      placeholder="votre@mail.com"
      error={boolean('Error', false)}
      small={boolean('Small', false)}
      disabled={boolean('Disabled', false)}
    />
  </TextAreaContainer>
)

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1845',
    },
  },
}
