import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import Card from '../Card'

import BaseFloatingIconButton from './FloatingIconButton'
import FloatingIconButtonProps from './FloatingIconButton.interface'

const Container = styled(Card)`
  width: 300px;
  height: 200px;
`

const FloatingIconButton: React.FunctionComponent<FloatingIconButtonProps> = props => (
  <Container>
    <BaseFloatingIconButton {...props} />
  </Container>
)

const GRID_PROPS = {
  icon: 'list',
}

const GRID_LINES = [
  {
    title: 'Regular',
  },
  {
    title: 'Position bottom left',
    props: { position: 'bottom-left' as 'bottom-left' },
  },
]

const GRID_ITEMS = [
  {},
  {
    props: { disabled: true },
  },
  {
    props: {
      warning: true,
    },
  },
]

const Grid = withGrid<FloatingIconButtonProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(FloatingIconButton)

const positions: { [key: string]: 'bottom-left' | 'bottom-right' } = {
  'Bottom Left': 'bottom-left',
  'Bottom Right': 'bottom-right',
}

export default {
  title: 'Actions/FloatingIconButton',
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

export const dynamic = () => (
  <FloatingIconButton
    icon="list"
    secondary={boolean('Color override : Secondary', false)}
    warning={boolean('Color override : Warning', false)}
    disabled={boolean('Disabled', false)}
    position={select('Position', positions, 'bottom-right')}
  >
    Liste
  </FloatingIconButton>
)

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1250',
    },
  },
}
