import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'

import Toggle from './Toggle'
import ToggleProps from './Toggle.interface'

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`

const GRID_PROPS = {
  onChange: () => {},
  label: 'Label',
}

const GRID_LINES = [
  {
    title: 'Not selected',
  },
  {
    title: 'Selected',
    props: {
      value: true,
    },
  },
  {
    title: 'Large',
    props: {
      large: true,
    },
  },
  {
    title: 'Large + selected',
    props: {
      large: true,
      value: true,
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

const Grid = withGrid<ToggleProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: ToggleContainer,
})(Toggle)

export default {
  title: 'Input/Toggle',
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

export const dynamic = () => (
  <ToggleContainer>
    <Toggle
      value={boolean('Checked', false)}
      error={boolean('Error', false)}
      disabled={boolean('Disabled', false)}
      large={boolean('Large', false)}
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
  </ToggleContainer>
)

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=62%3A0',
    },
  },
}
