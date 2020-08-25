import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import Button from '../Button'
import palette from '../palette'

import LightBox, { LightBoxProps } from './index'

const FakeImage = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${palette.darkBlue[200]};
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

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=62%3A2',
    },
  },
}

export const gallery = () => <Grid />
