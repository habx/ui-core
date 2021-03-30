import * as React from 'react'
import styled from 'styled-components'

import { CenteredComponent } from '../_storybook/CenteredComponent'
import { withGrid } from '../_storybook/withGrid'
import { Card } from '../Card'
import { Icon } from '../Icon'
import { Text } from '../Text'

import { CardItem, CardItemProps } from './index'

const CardContainer = styled(Card).attrs(() => ({ spacing: 'narrow' }))`
  width: 300px;
`

const GRID_LINES = [{}]

const GRID_ITEMS = [
  {
    label: 'Regular',
    props: {
      children: <CardItem icon={<Icon icon="edit" />}>Item 1</CardItem>,
    },
  },
  {
    label: 'Without icon',
    props: { children: <CardItem>Item 1</CardItem> },
  },
  {
    label: 'With complex children',
    props: {
      children: (
        <CardItem icon={<Icon icon="shower-head" />}>
          <Text>Options TMAs</Text>
          <Text type="caption">23 elements with overlaping text</Text>
        </CardItem>
      ),
    },
  },
  {
    label: 'Mutliple items',
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
]

const Grid = withGrid({
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
      <CardItem icon={<Icon icon="edit" />} {...props}>
        Item 1
      </CardItem>
    </CardContainer>
  </CenteredComponent>
)

export const gallery = () => <Grid />
