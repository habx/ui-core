import * as React from 'react'

import { Tab } from '..'

import { CenteredComponent } from '../_storybook/CenteredComponent'
import { withGrid } from '../_storybook/withGrid'

import { TabSelect, TabSelectProps } from './index'

const GRID_PROPS = {
  children: (
    <React.Fragment>
      <Tab>Choix 1</Tab>
      <Tab>Choix 2</Tab>
      <Tab>Choix 3</Tab>
    </React.Fragment>
  ),
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
]

const Grid = withGrid<TabSelectProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(TabSelect)

export default {
  title: 'Input/TabSelect',
  component: TabSelect,
  subcomponents: { Tab },
}

export const basic = (props: TabSelectProps) => (
  <CenteredComponent>
    <TabSelect {...props}>
      <Tab>Choix 1</Tab>
      <Tab>Choix 2</Tab>
      <Tab>Choix 3</Tab>
    </TabSelect>
  </CenteredComponent>
)

basic.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/sGKYmpfx5rf2LWLZrMDSZN/%F0%9F%A7%A9----Tag-%26-Tab?node-id=1%3A106',
  },
}

export const gallery = () => <Grid />
