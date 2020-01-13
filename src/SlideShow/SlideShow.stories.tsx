import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import { CardChildren } from '../Card/Card.stories'

import BaseSlideShow from './SlideShow'
import SlideShowProps from './SlideShow.interface'

const Container = styled.div`
  position: relative;
  width: 500px;
  height: 400px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 48px);
`

const GRID_PROPS = {
  items: [{}, {}, {}, {}],
  renderItem: () => <CardChildren />,
}

const GRID_LINES = [{ title: 'Basic' }]

const GRID_ITEMS = [
  {
    props: {},
  },
]

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

storiesOf('Miscellaneous|SlideShow', module).add('galery', () => <Grid />)
