import * as React from 'react'

import { withGrid } from '../_storybook/withGrid'

import { Badge, BadgeProps } from './index'

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
    title: 'Error',
    props: { error: true },
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
  component: Badge,
  argTypes: {
    content: {
      defaultValue: 10,
    },
    max: {
      defaultValue: 9,
    },
  },
}

export const basic = (props: BadgeProps) => <Badge {...props} />

export const gallery = () => <Grid />
