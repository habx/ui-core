import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'
import { TextInput } from '../TextInput'

import { ConfirmMenu, ConfirmMenuProps } from './index'

const Container = styled.div`
  width: 480px;
`

const GRID_PROPS = {
  children: <TextInput placeholder="This is a regular TextInput" />,
  childrenRefPropName: 'containerRef',
}

const GRID_LINES = [
  {
    props: {},
  },
]

const GRID_ITEMS = [
  {
    label: 'Icons',
    props: {},
  },
  {
    label: 'Textual',
    props: {
      textual: true,
    },
  },
]

const Grid = withGrid<ConfirmMenuProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: Container,
})(ConfirmMenu)

export default {
  title: 'Actions/ConfirmMenu',
  component: ConfirmMenu,
}

export const basic = (props: ConfirmMenuProps) => (
  <Container>
    <ConfirmMenu {...props} childrenRefPropName="containerRef">
      <TextInput placeholder="This is a regular TextInput" />
    </ConfirmMenu>
  </Container>
)

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />
