import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { config } from 'storybook-addon-designs'

import withGrid from '../_internal/StorybookGrid'
import Icon from '../Icon'

import Tag from './Tag'
import TagProps from './Tag.interface'

const GRID_PROPS = {
  children: 'Agencement 1',
}

const GRID_LINES = [{}]

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

storiesOf('Actions|Tag', module)
  .addDecorator(withKnobs)
  .add('gallery', () => <Grid />, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=1475%3A0',
    }),
  })
  .add('light background', () => <Grid background="light" />)
  .add('dark background', () => <Grid background="dark" />)
  .add('dynamic', () => (
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
  ))
