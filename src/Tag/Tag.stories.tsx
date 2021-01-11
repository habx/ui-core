import * as React from 'react'

import { CenteredComponent } from '../_storybook/CenteredComponent'
import { withGrid } from '../_storybook/withGrid'
import { Icon } from '../Icon'

import { Tag, TagProps } from './index'

const GRID_PROPS = {
  children: 'Agencement',
  interactive: true,
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
    label: 'Secondary',
    props: { interactive: false },
  },
  {
    label: 'Primary',
    props: { interactive: false, primary: true },
  },
  {
    label: 'Error',
    props: { interactive: false, error: true },
  },
  {
    label: 'Warning',
    props: { interactive: false, warning: true },
  },
  {
    label: 'Success',
    props: { interactive: false, success: true },
  },
  {
    label: 'Disabled',
    props: { disabled: true },
  },
  {
    label: 'Interactive + active',
    props: { active: true },
  },
  {
    label: 'Element left',
    props: {
      elementLeft: <Icon icon="close" style={{ cursor: 'pointer' }} />,
    },
  },
  {
    label: 'Element right',
    props: {
      elementRight: <Icon icon="close" style={{ cursor: 'pointer' }} />,
    },
  },
]

const GridInteractive = withGrid<TagProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(Tag)

export default {
  title: 'Actions/Tag',
  component: Tag,
  argTypes: {
    children: {
      defaultValue: 'Agencement 1',
    },
  },
}

export const basic = (props: TagProps) => (
  <CenteredComponent>
    <Tag {...props} />
  </CenteredComponent>
)

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=1475%3A0',
    },
  },
}

export const gallery = () => <GridInteractive />

export const lightBackground = () => <GridInteractive background="light" />

export const darkBackground = () => <GridInteractive background="dark" />
