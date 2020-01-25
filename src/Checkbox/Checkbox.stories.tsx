import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { config } from 'storybook-addon-designs'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'

import CheckboxProps from './Checkbox.interface'
import Checkbox from './index'

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`

const GRID_PROPS = {
  placeholder: 'Tell us more',
  onChange: () => {},
}

const GRID_LINES = [
  {
    title: 'Regular',
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

const Grid = withGrid<CheckboxProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: CheckboxContainer,
})(Checkbox)

storiesOf('Input|Checkbox', module)
  .addDecorator(withKnobs)
  .add('gallery', () => <Grid />, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=62%3A0',
    }),
  })
  .add('light background', () => <Grid background="light" />)
  .add('dark background', () => <Grid background="dark" />)
  .add('dynamic', () => (
    <CheckboxContainer>
      <Checkbox
        value={text('Value', '')}
        placeholder="votre@mail.com"
        error={boolean('Error', false)}
        disabled={boolean('Disabled', false)}
      />
    </CheckboxContainer>
  ))
