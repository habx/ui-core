import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { config } from 'storybook-addon-designs'

import withGrid from '../_internal/StorybookGrid'
import Icon from '../Icon'

import Tab from './Tab'
import TabProps from './Tab.interface'

const GRID_PROPS = {
  children: 'Agencement 1',
}

const GRID_LINES = [
  {
    title: 'White background',
  },
  {
    title: 'Colored background',
    coloredBackground: true,
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
    label: 'Large',
    props: { large: true },
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

storiesOf('Navigation|Tab', module)
  .addDecorator(withKnobs)
  .add('gallery', () => <Grid />, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=1393%3A0',
    }),
  })
  .add('dynamic', () => (
    <Tab
      children={text('Value', 'Agencement 1')}
      large={boolean('Large', false)}
      active={boolean('Active', false)}
      disabled={boolean('Disabled', false)}
      markdown={boolean('Markdown support', false)}
      elementLeft={
        boolean('Icon left', false) ? <Icon icon="list" /> : undefined
      }
      elementRight={
        boolean('Icon right', false) ? <Icon icon="list" /> : undefined
      }
    />
  ))
