import { withKnobs } from '@storybook/addon-knobs'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import Button from '../Button'
import Card from '../Card'
import palette from '../palette'
import Title from '../Title'

import HeaderBar from './HeaderBar'
import HeaderBarProps from './HeaderBar.interface'

const CardChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 360px;
  max-width: calc(100vw - 48px);
  background-color: ${palette.darkBlue[100]};
`

const ActionBarFlatContainer = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid ${palette.darkBlue[200]};
`

const WrappedActionBar: React.FunctionComponent<HeaderBarProps> = props => (
  <ActionBarFlatContainer>
    <HeaderBar {...props} />
  </ActionBarFlatContainer>
)

const WrappedActionBarInCard: React.FunctionComponent<HeaderBarProps> = props => (
  <Card spacing="regular">
    <HeaderBar {...props} />
    <CardChildrenContainer />
  </Card>
)

const GRID_PROPS = {}

const GRID_LINES = [{}]

const GRID_ITEMS = [
  {
    label: 'Page title',
    props: {
      children: <Title type="regular">Title of the page</Title>,
    },
  },
  {
    label: 'Page title and action',
    props: {
      children: (
        <React.Fragment>
          <Title type="regular">Title of the page</Title>
          <Button small>Download </Button>
        </React.Fragment>
      ),
    },
  },
]

const Grid = withGrid<HeaderBarProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(WrappedActionBar)

const GridInCard = withGrid<HeaderBarProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(WrappedActionBarInCard)

export default {
  title: 'Layouts/HeaderBar',
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

export const inCard = () => <GridInCard />
