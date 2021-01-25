import * as React from 'react'

import { CenteredComponent } from '../_storybook/CenteredComponent'
import { withGrid } from '../_storybook/withGrid'
import { Icon } from '../Icon'

import { Tab, TabProps } from './index'

const GRID_PROPS = {
  children: 'Agencement 1',
}

const GRID_LINES = [
  {
    title: 'Regular',
  },
  {
    title: 'Small',
    props: {
      small: true,
    },
  },
  {
    title: 'Large',
    props: {
      large: true,
    },
  },
]

const GRID_ITEMS = [
  {
    label: 'Default',
  },
  {
    label: 'Disabled',
    props: { disabled: true },
  },
  {
    label: 'Active',
    props: { active: true },
  },
  {
    label: 'Element left',
    props: {
      elementLeft: <Icon icon="list" />,
    },
  },
  {
    label: 'Element right',
    props: {
      elementRight: <Icon icon="list" />,
    },
  },
]

const Grid = withGrid<TabProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(Tab)

export default {
  title: 'Navigation/Tab',
  component: Tab,
  argTypes: {
    children: {
      defaultValue: 'Agencement 1',
    },
  },
}

export const basic = (props: TabProps) => (
  <CenteredComponent>
    <Tab {...props} />
  </CenteredComponent>
)

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=1393%3A0',
    },
  },
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />
