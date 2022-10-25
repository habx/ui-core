import * as React from 'react'

import { withGrid } from '../_storybook/withGrid'
import { Button, ButtonProps } from '../Button'
import { Icon } from '../Icon'

import { confirm } from './confirm'

const GRID_PROPS = {
  children: 'Click me!',
}

const GRID_LINES = [{ title: 'Confirm modals' }]

const GRID_ITEMS = [
  {
    label: 'With full config',
    props: {
      onClick: async () => {
        await confirm({
          title: 'Are you sure?',
          message: 'You really want to delete this ?',
          confirmLabel: 'Yes',
          cancelLabel: 'No',
        })
      },
    },
  },
  {
    label: 'With simple message',
    props: {
      onClick: async () => {
        await confirm('Are you sure ?')
      },
    },
  },
  {
    label: 'With deletion',
    props: {
      onClick: async () => {
        await confirm({
          message: 'Are you sure ?',
          title: 'Deletion',
          confirmLabel: 'Delete',
          type: 'delete',
        })
      },
    },
  },
  {
    label: 'With custom icon',
    props: {
      onClick: async () => {
        await confirm({
          message: 'Are you sure ?',
          title: 'Deletion',
          confirmLabel: 'Archive',
          type: 'delete',
          confirmIcon: <Icon icon="archivebox" />,
        })
      },
    },
  },
]

const Grid = withGrid<ButtonProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 24,
})(Button)

export default {
  title: 'Modals/confirm',
}

export const gallery = () => <Grid />
