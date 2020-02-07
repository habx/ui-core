import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import * as React from 'react'

import withGrid from '../_internal/StorybookGrid'
import Icon from '../Icon'

import Tag from './Tag'
import TagProps from './Tag.interface'

const GRID_PROPS = {
  children: 'Agencement 1',
}

const GRID_LINES = [
  {
    title: 'Regular',
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
      elementLeft: <Icon icon="close" />,
    },
  },
  {
    label: 'Element right',
    props: {
      elementRight: <Icon icon="close" />,
    },
  },
]

const Grid = withGrid<TagProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(Tag)

export default {
  title: 'Actions/Tag',
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

export const dynamic = () => (
  <Tag
    children={text('Value', 'Agencement 1')}
    active={boolean('Active', false)}
    disabled={boolean('Disabled', false)}
    elementLeft={
      boolean('Icon left', false) ? <Icon icon="close" /> : undefined
    }
    elementRight={
      boolean('Icon right', false) ? <Icon icon="close" /> : undefined
    }
  />
)

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=1475%3A0',
    },
  },
}
