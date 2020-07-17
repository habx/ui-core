import { withKnobs } from '@storybook/addon-knobs'
import * as React from 'react'

import withGrid from '../_internal/StorybookGrid'

import Badge from './Badge'
import BadgeProps from './Badge.interface'

const GRID_PROPS = {}

const GRID_LINES = [
  {
    title: 'Primary',
    props: {},
  },
  {
    title: 'Secondary',
    props: { secondary: true },
  },
  {
    title: 'Warning',
    props: { warning: true },
  },
]

const GRID_ITEMS = [
  {
    label: 'Default',
    props: {
      content: 5,
    },
  },
  {
    label: 'Maximum exceeded',
    props: {
      content: 10,
      max: 9,
    },
  },
]

const Grid = withGrid<BadgeProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(Badge)

export default {
  title: 'Alerts/Badge',
  decorators: [withKnobs],
}

export const gallery = () => <Grid />
