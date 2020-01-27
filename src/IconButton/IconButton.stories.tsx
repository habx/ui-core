import { withKnobs, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { config } from 'storybook-addon-designs'

import withGrid from '../_internal/StorybookGrid'

import IconButton from './IconButton'
import IconButtonProps from './IconButton.interface'

const GRID_PROPS = {
  icon: 'zoom-in',
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
    title: 'Large',
    props: { large: true },
  },
]

const GRID_ITEMS = [
  {
    label: 'Default',
  },
  {
    label: 'Primary',
    props: { primary: true },
  },
  {
    label: 'Disabled',
    props: { disabled: true },
  },
  {
    label: 'Warning',
    props: {
      warning: true,
    },
  },
]

const Grid = withGrid<IconButtonProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 36,
})(IconButton)

storiesOf('Actions|IconButton', module)
  .addDecorator(withKnobs)
  .add('gallery', () => <Grid />, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1250',
    }),
  })
  .add('light background', () => <Grid background="light" />)
  .add('dark background', () => <Grid background="dark" />)
  .add('dynamic', () => (
    <IconButton
      icon="list"
      small={boolean('Small', false)}
      large={boolean('Large', false)}
      primary={boolean('Color override : Primary', false)}
      secondary={boolean('Color override : Secondary', false)}
      warning={boolean('Color override : Warning', false)}
    />
  ))
