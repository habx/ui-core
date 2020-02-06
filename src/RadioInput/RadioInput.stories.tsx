import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { config } from 'storybook-addon-designs'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'

import RadioInput from './RadioInput'
import RadioInputProps from './RadioInput.interface'

const RadioInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`

const GRID_PROPS = {
  placeholder: 'Tell us more',
  onChange: () => {},
  label: 'Label',
}

const GRID_LINES = [
  {
    title: 'Empty',
  },
  {
    title: 'Checked',
    props: {
      value: 1,
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

const Grid = withGrid<RadioInputProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: RadioInputContainer,
})(RadioInput)

storiesOf('Input|RadioInput', module)
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
    <RadioInputContainer>
      <RadioInput
        value={boolean('Checked', false) ? 1 : 0}
        error={boolean('Error', false)}
        disabled={boolean('Disabled', false)}
        label="Label"
        labelType={select(
          'LabelType',
          [
            'veryLarge',
            'large',
            'emphasis',
            'regular',
            'caption',
            'captionSmall',
          ],
          'regular'
        )}
      />
    </RadioInputContainer>
  ))
