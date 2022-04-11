import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'
import { Button } from '../Button'
import { theme } from '../theme'

import { LightBox, LightBoxProps } from './index'

const FakeImage = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${theme.neutralColor(200)};
`

const GRID_PROPS = {
  triggerElement: <Button outline>Open</Button>,
}

const GRID_LINES = [{ title: 'Basic' }]

const GRID_ITEMS = [
  {
    props: {
      children: <FakeImage />,
    },
  },
]

const Grid = withGrid<LightBoxProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(LightBox)

export default {
  title: 'Modals/LightBox',
  component: LightBox,
}

export const basic = (props: LightBoxProps) => (
  <LightBox triggerElement={<Button outline>Open</Button>} {...props} />
)

basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=62%3A2',
  },
}

export const gallery = () => <Grid />
