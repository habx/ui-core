import * as React from 'react'

import { withGrid } from '../_storybook/withGrid'

import { NavigationButton, NavigationButtonProps } from './index'

const GRID_LINES = [
  {
    title: 'Regular',
  },
  {
    title: 'Large',
    props: { large: true },
  },
  {
    title: 'Small',
    props: { small: true },
  },
  {
    title: 'Toggle regular',
    props: { usage: 'toggle' as 'toggle' },
  },
  {
    title: 'Toggle large',
    props: { usage: 'toggle' as 'toggle', large: true },
  },
  {
    title: 'Toggle small',
    props: { usage: 'toggle' as 'toggle', small: true },
  },
]

const GRID_ITEMS = [
  {
    label: 'Default',
  },
  {
    label: 'Secondary',
    props: { secondary: true },
  },
  {
    label: 'Disabled',
    props: { disabled: true },
  },
  {
    label: 'Previous',
    props: { previous: true },
  },
]

const Grid = withGrid<NavigationButtonProps>({
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 24,
})(NavigationButton)

export default {
  title: 'Navigation/NavigationButton',
  component: NavigationButton,
}

export const basic = (props: NavigationButtonProps) => (
  <NavigationButton {...props} />
)

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A2116',
    },
  },
}

export const gallery = () => <Grid />
