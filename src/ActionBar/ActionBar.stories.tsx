import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { config } from 'storybook-addon-designs'
import styled from 'styled-components'

import withGrid from '../_internal/StorybookGrid'
import Button from '../Button'
import Card from '../Card'
import palette from '../palette'

import ActionBar from './ActionBar'
import ActionBarProps from './ActionBar.interface'

const CardChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 448px;
  max-width: calc(100vw - 48px);
  background-color: ${palette.darkBlue[100]};
`

const WrappedActionBar: React.FunctionComponent<ActionBarProps> = props => (
  <Card>
    <CardChildrenContainer />
    <ActionBar {...props} />
  </Card>
)

const GRID_PROPS = {}

const GRID_LINES = [{}]

const GRID_ITEMS = [
  {
    label: 'One button',
    props: {
      children: <Button>Save</Button>,
    },
  },
  {
    label: 'Two buttons',
    props: {
      children: (
        <React.Fragment>
          <Button link>Cancel</Button>
          <Button>Save</Button>
        </React.Fragment>
      ),
    },
  },
  {
    label: 'Three buttons',
    props: {
      children: (
        <React.Fragment>
          <Button link>Reset</Button>
          <Button link>Cancel</Button>
          <Button>Save</Button>
        </React.Fragment>
      ),
    },
  },
]

const Grid = withGrid<ActionBarProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(WrappedActionBar)

storiesOf('Layouts|ActionBar', module)
  .addDecorator(withKnobs)
  .add('gallery', () => <Grid />, {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=4%3A0',
    }),
  })
  .add('light background', () => <Grid background="light" />)
  .add('dark background', () => <Grid background="dark" />)
  .add('dynamic', () => <WrappedActionBar />)
