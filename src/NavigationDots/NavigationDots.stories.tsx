import { action } from '@storybook/addon-actions'
import { withKnobs, number, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { config } from 'storybook-addon-designs'

import withGrid from '../_internal/StorybookGrid'

import NavigationDots from './index'
import NavigationDotsProps from './NavigationDots.interface'

const GRID_PROPS = {
  onClickDot: action('Click dot'),
  size: 3,
  activeDot: 0,
}

const GRID_LINES = [
  {
    title: 'Regular',
  },
]

const GRID_ITEMS = [
  {
    label: 'Less than 5 items',
  },
  {
    label: 'Many items',
    props: {
      size: 6,
      activeDot: 0,
    },
  },
  {
    label: 'Many items',
    props: {
      size: 6,
      activeDot: 3,
    },
  },
  {
    label: 'Many items',
    props: {
      size: 6,
      activeDot: 5,
    },
  },
  {
    label: 'Disabled',
    props: {
      disabled: true,
    },
  },
]

const Grid = withGrid<NavigationDotsProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 24,
})(NavigationDots)

storiesOf('Navigation|NavigationDots', module)
  .addDecorator(withKnobs)
  .add('gallery', () => <Grid />, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A2116',
    }),
  })
  .add('light background', () => <Grid background="light" />)
  .add('dark background', () => <Grid background="dark" />)
  .add('dynamic', () => (
    <NavigationDots
      size={number('Size', 3)}
      activeDot={number('Active dot', 0)}
      disabled={boolean('Disabled', false)}
    />
  ))
