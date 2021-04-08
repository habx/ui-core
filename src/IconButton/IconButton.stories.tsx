import * as React from 'react'

import { withGrid } from '../_storybook/withGrid'

import { IconButton, IconButtonProps } from './index'

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
    title: 'Tiny',
    props: { tiny: true },
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
    label: 'Grey bounding background',
    props: { background: 'grey' as 'grey' },
  },
  {
    label: 'White bounding background',
    props: { background: 'white' as 'white' },
  },
  {
    label: 'Disabled',
    props: { disabled: true },
  },
]

const Grid = withGrid<IconButtonProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 36,
})(IconButton)

export default {
  title: 'Actions/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      defaultValue: 'list',
    },
  },
}

export const basic = (props: IconButtonProps) => <IconButton {...props} />

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1250',
    },
  },
}

export const gallery = () => <Grid />
