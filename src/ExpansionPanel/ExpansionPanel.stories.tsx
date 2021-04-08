import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'
import { breakpoints } from '../breakpoints'
import { Card } from '../Card'
import { ExpansionPanelItem } from '../ExpansionPanelItem'
import { Text } from '../Text'

import { ExpansionPanel, ExpansionPanelProps } from './index'

const Container = styled.div`
  width: 450px;

  @media (${breakpoints.below.phone}) {
    width: 100vw;
  }
`

const CardContainer = styled(Card).attrs(() => ({
  spacing: 'narrow-horizontal-only',
}))`
  width: 450px;

  @media (${breakpoints.below.phone}) {
    width: 100vw;
  }
`

const ExpansionPanelItems = () => (
  <React.Fragment>
    <ExpansionPanelItem title="Article 1">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        delectus distinctio eligendi eum exercitationem facilis.
      </Text>
    </ExpansionPanelItem>
    <ExpansionPanelItem title="Article 2" description="description">
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

const GRID_LINES = [
  {},
  { title: 'small', props: { small: true } },
  { title: 'large', props: { large: true } },
  { title: 'Light', props: { light: true } },
]

const GRID_ITEMS = [
  {
    label: 'Default',
  },
  {
    label: 'Right',
    props: { expandIconPosition: 'right' as 'right' },
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
  itemWrapper: Container,
})(ExpansionPanel)

const GridInCard = withGrid<ExpansionPanelProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: CardContainer,
})(ExpansionPanel)

export default {
  title: 'Layouts/ExpansionPanel',
  component: ExpansionPanel,
  subcomponents: { ExpansionPanelItem },
}

export const basic = (props: ExpansionPanelProps) => (
  <ExpansionPanel {...props}>
    <ExpansionPanelItems />
  </ExpansionPanel>
)

export const gallery = () => <Grid />

export const inCard = () => <GridInCard />
