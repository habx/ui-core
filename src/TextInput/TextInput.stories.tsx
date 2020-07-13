import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'

import TextInput from './index'
import TextInputProps from './TextInput.interface'

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

export default {
  title: 'Input/TextInput',
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

const AutoCompleteTextInput = () => {
  const [value, setValue] = React.useState('')
  return (
    <TextInputContainer>
      <TextInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Cities"
        autocompleteOptions={['Paris', 'Bordeaux', 'Nantes', 'Lyon']}
      />
    </TextInputContainer>
  )
}
export const autocomplete = () => <AutoCompleteTextInput />

export const dynamic = () => (
  <TextInputContainer>
    <TextInput
      label={text('Label', '')}
      value={text('Value', '')}
      placeholder="votre@mail.com"
      error={boolean('Error', false)}
      small={boolean('Small', false)}
      disabled={boolean('Disabled', false)}
    />
  </TextInputContainer>
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
