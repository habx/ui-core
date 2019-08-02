import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'

import PasswordInput from './index'
import PasswordInputProps from './PasswordInput.interface'

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
    title: 'Colored background',
    coloredBackground: true,
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

storiesOf('Input|PasswordInput', module)
  .addDecorator(withDesign)
  .addDecorator(withKnobs)
  .add('gallery', () => <Grid />)
  .add('dynamic', () => (
    <PasswordInputContainer>
      <PasswordInput
        value={text('Value', '')}
        placeholder="votre@mail.com"
        error={boolean('Error', false)}
        small={boolean('Small', false)}
        disabled={boolean('Disabled', false)}
      />
    </PasswordInputContainer>
  ))
