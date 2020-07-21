import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import Button from '../Button'
import HeaderBar from '../HeaderBar'
import palette from '../palette'

import LightBox from './LightBox'
import LightBoxProps from './LightBox.interface'

const Content = styled.div`
  background-color: ${palette.darkBlue[200]};
`

const GRID_PROPS = {
  triggerElement: <Button outline>Open</Button>,
}

const GRID_LINES = [{ title: 'Basic' }]

const GRID_ITEMS = [
  {
    props: {
      children: (
        <React.Fragment>
          <HeaderBar></HeaderBar>
          <Content />
        </React.Fragment>
      ),
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
}

export const gallery = () => <Grid />

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=62%3A2',
    },
  },
}
