import * as React from 'react'
import styled from 'styled-components'

import { CenteredComponent } from '../_storybook/CenteredComponent'
import { withGrid } from '../_storybook/withGrid'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { Title } from '../Title'

import { SlideShow, SlideShowProps } from './index'

const Container = styled.div`
  position: relative;
  width: 450px;
  height: 400px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 48px);
`

const CardChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  max-width: calc(100vw - 48px);

  & > img {
    width: 100%;
    height: auto;
  }
`

const CardChildrenContent = styled.div`
  padding: 12px 24px;

  & > *:not(button) {
    padding-bottom: 12px;
  }
`

const CardChildren = () => (
  <CardChildrenContainer>
    <img
      alt="Illu"
      src="https://vivreparis.fr/wp-content/uploads/2019/03/paris-louvre-record-touristes.png"
    />
    <CardChildrenContent>
      <Title type="regular">Paris</Title>
      <Text markdown>
        The **Louvre Museum** is the world's largest art museum and a historic
        monument in Paris, France.
      </Text>
      <Button link elementRight={<Icon icon="arrow-east" />}>
        Visit
      </Button>
    </CardChildrenContent>
  </CardChildrenContainer>
)

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

const WrappedSlideShow: React.FunctionComponent<SlideShowProps> = (props) => (
  <Container>
    <SlideShow {...props} />
  </Container>
)

const Grid = withGrid<SlideShowProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(WrappedSlideShow)

export default {
  title: 'Layouts/SlideShow',
  component: SlideShow,
}

export const basic = (props: SlideShowProps) => (
  <CenteredComponent>
    <WrappedSlideShow {...props} {...GRID_PROPS} />
  </CenteredComponent>
)

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />
