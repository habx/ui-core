import * as React from 'react'

import { withGrid } from '../_storybook/withGrid'

import { RoundIconButton, RoundIconButtonProps } from './index'

const GRID_PROPS = {
  icon: 'arrow-east',
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
    label: 'Error',
    props: { error: true },
  },
]

const Grid = withGrid<RoundIconButtonProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 36,
})(RoundIconButton)

export default {
  title: 'Actions/RoundIconButton',
  component: RoundIconButton,
  argTypes: {
    icon: {
      defaultValue: 'arrow-east',
    },
  },
}

export const basic = (props: RoundIconButtonProps) => (
  <RoundIconButton {...props} />
)

basic.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/ZQa5Akqvf8svk5NaKpQtK3/habx---2020-identity?node-id=573%3A4511',
  },
}

export const gallery = () => <Grid />
