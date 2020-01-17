import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { config } from 'storybook-addon-designs'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import Card from '../Card'
import Icon from '../Icon'

import BaseFloatingButton from './FloatingButton'
import FloatingButtonProps from './FloatingButton.interface'

const Container = styled(Card)`
  width: 300px;
  height: 200px;
`

const FloatingButton: React.FunctionComponent<FloatingButtonProps> = props => (
  <Container>
    <BaseFloatingButton {...props} />
  </Container>
)

const GRID_PROPS = {
  children: 'Liste',
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
  {},
  {
    props: { disabled: true },
  },
  {
    props: {
      elementLeft: <Icon icon="list" />,
    },
  },
  {
    props: {
      elementRight: <Icon icon="list" />,
    },
  },
  {
    props: {
      warning: true,
      children: 'Supprimer',
    },
  },
]

const Grid = withGrid<FloatingButtonProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(FloatingButton)

const positions: { [key: string]: 'top' | 'bottom' } = {
  Top: 'top',
  Bottom: 'bottom',
}

storiesOf('Actions|FloatingButton', module)
  .addDecorator(withKnobs)
  .add('gallery', () => <Grid />, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1250',
    }),
  })
  .add('dynamic', () => (
    <FloatingButton
      small={boolean('Small', false)}
      secondary={boolean('Color override : Secondary', false)}
      warning={boolean('Color override : Warning', false)}
      position={select('Position', positions, 'bottom')}
      elementLeft={
        boolean('Icon left', false) ? <Icon icon="list" /> : undefined
      }
      elementRight={
        boolean('Icon right', false) ? <Icon icon="list" /> : undefined
      }
    >
      Liste
    </FloatingButton>
  ))
