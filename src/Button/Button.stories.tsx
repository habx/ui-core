import { withKnobs, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import withGrid from '../_internal/StorybookGrid'
import Icon from '../Icon'

import Button, { ButtonProps } from './index'

const GRID_PROPS = {
  children: 'Voir tous nos projets',
}

const GRID_LINES = [
  {
    title: 'Solid + Regular',
  },
  {
    title: 'Solid + Small',
    props: { small: true },
  },
  {
    title: 'Solid + Large',
    props: { large: true },
  },
  {
    title: 'Outline + Regular',
    props: { outline: true },
  },
  {
    title: 'Outline + Small',
    props: { outline: true, small: true },
  },
  {
    title: 'Outline + Large',
    props: { outline: true, large: true },
  },
  {
    title: 'Link + Regular',
    props: { link: true },
  },
  {
    title: 'Link + Small',
    props: { link: true, small: true },
  },
  {
    title: 'Link + Large',
    props: { link: true, large: true },
  },
]

const GRID_ITEMS = [
  {},
  {
    props: { disabled: true },
  },
  {
    props: {
      iconLeft: <Icon icon="arrow-east" />,
    },
  },
  {
    props: {
      iconRight: <Icon icon="arrow-east" />,
    },
  },
  {
    props: {
      warning: true,
      children: 'Supprimer',
    },
  },
]

const Grid = withGrid<ButtonProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(Button)

storiesOf('Actions|Button', module)
  .addDecorator(withKnobs)
  .add('gallery', () => <Grid />)
  .add('dynamic', () => (
    <Button
      outline={boolean('Outline', false)}
      link={boolean('Link', false)}
      small={boolean('Small', false)}
      large={boolean('Large', false)}
      primary={boolean('Color override : Primary', false)}
      secondary={boolean('Color override : Secondary', false)}
      warning={boolean('Color override : Warning', false)}
      iconLeft={
        boolean('Icon left', false) ? <Icon icon="arrow-right" /> : undefined
      }
      iconRight={
        boolean('Icon right', false) ? <Icon icon="arrow-right" /> : undefined
      }
    >
      Voir tous nos projets
    </Button>
  ))
