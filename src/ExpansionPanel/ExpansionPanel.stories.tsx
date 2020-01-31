import { withKnobs, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import breakpoints from '../breakpoints'
import ExpansionPanelItem from '../ExpansionPanelItem'
import Text from '../Text'

import ExpansionPanel from './ExpansionPanel'
import ExpansionPanelProps from './ExpansionPanel.interface'

export const Container = styled.div`
  width: 450px;

  @media (${breakpoints.below.phone}) {
    width: 100vw;
  }
`

const WrappedExpansionPanel: React.FunctionComponent<ExpansionPanelProps> = props => (
  <Container>
    <ExpansionPanel {...props} />
  </Container>
)

export const ExpansionPanelItems = () => (
  <React.Fragment>
    <ExpansionPanelItem title="Article 1">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        delectus distinctio eligendi eum exercitationem facilis.
      </Text>
    </ExpansionPanelItem>
    <ExpansionPanelItem title="Article 2">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        delectus distinctio eligendi eum exercitationem facilis.
      </Text>
    </ExpansionPanelItem>
    <ExpansionPanelItem title="Article 3">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        delectus distinctio eligendi eum exercitationem facilis.
      </Text>
    </ExpansionPanelItem>
  </React.Fragment>
)

const GRID_PROPS = {
  children: <ExpansionPanelItems />,
}

const GRID_LINES = [{}, { title: 'Light', props: { light: true } }]

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
})(WrappedExpansionPanel)

storiesOf('Layouts|Expansion Panel', module)
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
