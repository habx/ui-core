import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import { CardChildren } from '../Card/Card.stories'

import BaseSlideShow from './SlideShow'
import SlideShowProps from './SlideShow.interface'

const Container = styled.div`
  position: relative;
  width: 450px;
  height: 400px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 48px);
`

const GRID_PROPS = {
  items: [{}, {}, {}, {}],
  renderItem: () => <CardChildren />,
}

const GRID_LINES = [
  { title: 'Basic' },
  { title: 'Hide navigation dots', props: { hideNavigationDots: true } },
  { title: 'Secondary', props: { secondary: true } },
  {
    title: 'Hide navigation buttons',
    props: { navigationComponent: () => null },
  },
]

const GRID_ITEMS = [{}]

const SlideShow: React.FunctionComponent<SlideShowProps> = props => (
  <Container>
    <BaseSlideShow {...props} />
  </Container>
)

const Grid = withGrid<SlideShowProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(SlideShow)

export default {
  title: 'Layouts/SlideShow',
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />
