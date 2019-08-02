import { withKnobs, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { withDesign } from 'storybook-addon-designs'

import withGrid from '../_internal/StorybookGrid'

import NavigationButton from './NavigationButton'
import NavigationButtonProps from './NavigationButton.interface'

const GRID_LINES = [
  {
    title: 'Regular',
    props: {},
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
    title: 'Regular + Colored background',
    props: {},
    coloredBackground: true,
  },
]

const GRID_ITEMS = [
  {
    label: 'Default',
    props: {},
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
  props: {},
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 24,
})(NavigationButton)

storiesOf('Actions|NavigationButton', module)
  .addDecorator(withDesign)
  .addDecorator(withKnobs)
  .add('gallery', () => <Grid />)
  .add('dynamic', () => (
    <NavigationButton
      disabled={boolean('Disabled', false)}
      secondary={boolean('Color override : Secondary', false)}
      previous={boolean('Icon: previous', false)}
    />
  ))
