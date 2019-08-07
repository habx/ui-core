import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'

import withGrid from '../_internal/StorybookGrid'

import Tag from './Tag'
import TagProps from './Tag.interface'

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
]

const Grid = withGrid<TagProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(Tag)

storiesOf('Actions|Tag', module)
  .addDecorator(withDesign)
  .addDecorator(withKnobs)
  .add('gallery', () => <Grid />)
  .add('dynamic', () => (
    <Tag
      children={text('Value', 'Agencement 1')}
      large={boolean('Large', false)}
      active={boolean('Active', false)}
      disabled={boolean('Disabled', false)}
      markdown={boolean('Markdown support', false)}
    />
  ))
