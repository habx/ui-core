import * as React from 'react'
import styled from 'styled-components'

import { CenteredComponent } from '../_storybook/CenteredComponent'
import { withGrid } from '../_storybook/withGrid'
import { Card } from '../Card'
import { Text } from '../Text'

import { CardItem, CardItemProps } from './index'

const CardContainer = styled(Card).attrs(() => ({ spacing: 'narrow' }))`
  width: 300px;
`

const GRID_PROPS = {
  title: 'Rocket launcher',
  description: 'Accédez au résumé de vos choix, recevez le par mail',
  illustration:
    '//res.cloudinary.com/habx/image/upload/illustrations/habxmojies/rocket.svg',
}

const GRID_LINES = [
  {
    title: 'Regular',
    props: { children: <CardItem icon="edit">Item 1</CardItem> },
  },
  {
    title: 'Without icon',
    props: { children: <CardItem>Item 1</CardItem> },
  },
  {
    title: 'Mutliple items',
    props: {
      children: (
        <React.Fragment>
          <CardItem>Item 1</CardItem>
          <CardItem>Item 2</CardItem>
          <CardItem>Item 3</CardItem>
        </React.Fragment>
      ),
    },
  },
  {
    title: 'With complex children',
    props: {
      children: (
        <CardItem icon="shower-head">
          <Text>Options TMAs</Text>
          <Text type="caption">23 elements with overlaping text</Text>
        </CardItem>
      ),
    },
  },
]

const GRID_ITEMS = [
  {
    label: 'Normal',
  },
]

const Grid = withGrid({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(CardContainer)

export default {
  title: 'Layouts/CardItem',
  component: CardItem,
}

export const basic = (props: CardItemProps) => (
  <CenteredComponent>
    <CardContainer>
      <CardItem icon="edit" {...props}>
        Item 1
      </CardItem>
    </CardContainer>
  </CenteredComponent>
)

export const gallery = () => <Grid />
