import * as React from 'react'
import styled from 'styled-components'

import CenteredComponent from '../_storybook/CenteredComponent'
import withGrid from '../_storybook/withGrid'
import Button from '../Button'
import Card from '../Card'
import palette from '../palette'
import Title from '../Title'

import HeaderBar, { HeaderBarProps } from './index'

const CardChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 360px;
  max-width: calc(100vw - 48px);
  background-color: ${palette.darkBlue[100]};
`

const HeaderBarWrapper = styled.div`
  width: 450px;
  height: 500px;
  border: 1px solid ${palette.darkBlue[200]};
`

const HeaderBarCardWrapper: React.FunctionComponent<{}> = ({ children }) => (
  <Card spacing="regular">
    {children}
    <CardChildrenContainer />
  </Card>
)

const GRID_PROPS = {}

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
]

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
  {
    label: 'Progress',
    props: {
      children: <Title type="regular">Title of the page</Title>,
      progress: 0.4,
    },
  },
]

const Grid = withGrid<HeaderBarProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: HeaderBarWrapper,
})(HeaderBar)

const GridInCard = withGrid<HeaderBarProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: HeaderBarCardWrapper,
})(HeaderBar)

export default {
  title: 'Layouts/HeaderBar',
  component: HeaderBar,
}

export const basic = (props: HeaderBarProps) => (
  <CenteredComponent>
    <HeaderBarCardWrapper>
      <HeaderBar {...props}>{GRID_ITEMS[1].props.children}</HeaderBar>
    </HeaderBarCardWrapper>
  </CenteredComponent>
)

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

export const inCard = () => <GridInCard />
