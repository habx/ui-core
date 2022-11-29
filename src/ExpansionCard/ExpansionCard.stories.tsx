import * as React from 'react'
import styled from 'styled-components'

import { CenteredComponent } from '../_storybook/CenteredComponent'
import { withGrid } from '../_storybook/withGrid'
import { Text } from '../Text'

import { ExpansionCard, ExpansionCardProps } from './index'

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

const CardChildren = () => (
  <CardChildrenContainer>
    <Text type="small">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae delectus
      distinctio eligendi eum exercitationem facilis.
    </Text>
  </CardChildrenContainer>
)

const GRID_PROPS = {
  children: <CardChildren />,
}

const GRID_LINES = [
  {
    label: 'Default',
  },
  {
    label: 'With title',
    props: {
      title: <Text type="caption">Title</Text>,
    },
    outline: true,
  },
  {
    label: 'With title and description',
    props: {
      title: <Text type="caption">Title</Text>,
      description: <Text type="caption">Description</Text>,
    },
    outline: true,
  },
]

const GRID_ITEMS = [
  {
    label: 'Default',
  },
]

const Grid = withGrid<ExpansionCardProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(ExpansionCard)

export default {
  title: 'Layouts/ExpansionCard',
  component: ExpansionCard,
}

export const basic = (props: ExpansionCardProps) => (
  <CenteredComponent>
    <ExpansionCard {...props}>{GRID_PROPS.children}</ExpansionCard>
  </CenteredComponent>
)

basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=4%3A0',
  },
}

export const gallery = () => <Grid />
