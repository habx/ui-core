import * as React from 'react'

import { CenteredComponent } from '../_storybook/CenteredComponent'
import { withGrid } from '../_storybook/withGrid'

import { IconTag, IconTagProps } from './index'

const GRID_PROPS = {
  icon: 'draw-plan-tma',
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
    label: 'Bare',
    props: { bare: true },
  },
  {
    label: 'Primary',
    props: { primary: true },
  },
  {
    label: 'Error',
    props: { error: true },
  },
  {
    label: 'Warning',
    props: { warning: true },
  },
  {
    label: 'Success',
    props: { success: true },
  },
]

const GridInteractive = withGrid<IconTagProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(IconTag)

export default {
  title: 'Actions/IconTag',
  component: IconTag,
  argTypes: {
    icon: { defaultValue: 'shower-head' },
  },
}

export const basic = (props: IconTagProps) => (
  <CenteredComponent>
    <IconTag {...props} />
  </CenteredComponent>
)

basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=1475%3A0',
  },
}

export const gallery = () => <GridInteractive />
