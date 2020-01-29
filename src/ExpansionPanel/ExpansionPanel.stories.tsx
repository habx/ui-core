import { withKnobs, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import ExpansionPanelItem from '../ExpansionPanelItem'
import Text from '../Text'

import ExpansionPanel from './ExpansionPanel'
import ExpansionPanelProps from './ExpansionPanel.interface'
const ExpansionPanelItemContent = styled(Text)`
  max-width: 300px;
`

export const ExpansionPanelItems = () => (
  <React.Fragment>
    <ExpansionPanelItem title="Article 1">
      <ExpansionPanelItemContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        delectus distinctio eligendi eum exercitationem facilis, inventore ipsam
        laboriosam magnam magni maiores molestias natus perferendis,
        perspiciatis quidem ratione sint tenetur totam!
      </ExpansionPanelItemContent>
    </ExpansionPanelItem>
    <ExpansionPanelItem title="Article 2">
      <ExpansionPanelItemContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        delectus distinctio eligendi eum exercitationem facilis, inventore ipsam
        laboriosam magnam magni maiores molestias natus perferendis,
        perspiciatis quidem ratione sint tenetur totam!
      </ExpansionPanelItemContent>{' '}
    </ExpansionPanelItem>
    <ExpansionPanelItem title="Article 3">
      <ExpansionPanelItemContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        delectus distinctio eligendi eum exercitationem facilis, inventore ipsam
        laboriosam magnam magni maiores molestias natus perferendis,
        perspiciatis quidem ratione sint tenetur totam!
      </ExpansionPanelItemContent>{' '}
    </ExpansionPanelItem>
  </React.Fragment>
)

const GRID_PROPS = {
  children: <ExpansionPanelItems />,
}

const GRID_LINES = [{}]

const GRID_ITEMS = [
  {
    label: 'Default',
  },
  {
    label: 'Multi open',
    props: { multiOpen: true },
  },
  {
    label: 'Disabled',
    props: { disabled: true },
  },
]

const Grid = withGrid<ExpansionPanelProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(ExpansionPanel)

storiesOf('Miscellaneous|Expansion Panel', module)
  .addDecorator(withKnobs)
  .add('galery', () => <Grid />)
  .add('light background', () => <Grid background="light" />)
  .add('dark background', () => <Grid background="dark" />)
  .add('dynamic', () => (
    <ExpansionPanel
      disabled={boolean('Disabled', false)}
      multiOpen={boolean('Multi open', false)}
    >
      <ExpansionPanelItems />
    </ExpansionPanel>
  ))
