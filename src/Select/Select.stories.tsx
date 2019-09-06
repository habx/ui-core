import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { config } from 'storybook-addon-designs'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'

import Select from './index'
import SelectProps from './Select.interface'

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`
const OPTIONS = [
  { label: 'France', value: 'fr' },
  { label: 'Germany', value: 'dl' },
  { label: 'England', value: 'en' },
]
const GRID_PROPS = {
  placeholder: 'Regions',
  onChange: () => {},
  options: [
    { label: 'France', value: 'fr' },
    { label: 'Germany', value: 'dl' },
    { label: 'England', value: 'en' },
  ],
}

const GRID_LINES = [
  {
    title: 'Regular',
  },
  {
    title: 'Colored background',
    coloredBackground: true,
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
      value: 'fr',
    },
  },
  {
    label: 'Disabled',
    props: {
      disabled: true,
    },
  },
]

const Grid = withGrid<SelectProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: TextInputContainer,
})(Select)

storiesOf('Input|Select', module)
  .addDecorator(withKnobs)
  .add('gallery', () => <Grid />, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1846',
    }),
  })
  .add('dynamic', () => (
    <TextInputContainer>
      <Select
        options={OPTIONS}
        value={select('Value', ['fr', 'dl', 'en'], 'fr')}
        disabled={boolean('Disabled', false)}
      />
    </TextInputContainer>
  ))
