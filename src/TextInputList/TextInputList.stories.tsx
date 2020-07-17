import { withKnobs, boolean, array, text } from '@storybook/addon-knobs'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'

import TextInputList from './index'
import TextInputListProps from './TextInputList.interface'

const TextInputListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const GRID_PROPS = {
  placeholder: 'Sartrouville',
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
      value: ['Paris', 'Bordeaux'],
    },
  },
  {
    label: 'Error',
    props: {
      value: ['Paris', 'Bordeaux'],
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

const Grid = withGrid<TextInputListProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: TextInputListContainer,
})(TextInputList)

export default {
  title: 'Input/TextInputList',
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

const AutoCompleteTextInput = () => {
  const [value, setValue] = React.useState([])
  return (
    <TextInputListContainer>
      <TextInputList
        value={value}
        onChange={setValue}
        placeholder="Cities"
        options={['Paris', 'Bordeaux', 'Nantes', 'Lyon']}
      />
    </TextInputListContainer>
  )
}
export const autocomplete = () => <AutoCompleteTextInput />

export const dynamic = () => (
  <TextInputListContainer>
    <TextInputList
      label={text('Label', '')}
      value={array('Value', [])}
      placeholder="votre@mail.com"
      error={boolean('Error', false)}
      small={boolean('Small', false)}
      disabled={boolean('Disabled', false)}
    />
  </TextInputListContainer>
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
