import * as React from 'react'
import styled from 'styled-components'

import { CenteredComponent } from '../_storybook/CenteredComponent'
import { withGrid } from '../_storybook/withGrid'
import { Button } from '../Button'
import { Card } from '../Card'
import { Modal } from '../Modal'
import { theme } from '../theme'

import { ActionBar, ActionBarProps } from './index'

const CardChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 360px;
  max-width: calc(100vw - 48px);
  background-color: ${theme.neutralColor(100)};

  &[data-modal='true'] {
    width: unset;
  }
`

const WrappedActionBar: React.FunctionComponent<ActionBarProps> = (props) => (
  <Card spacing="regular">
    <CardChildrenContainer />
    <ActionBar {...props} />
  </Card>
)

const WrappedActionBarInModal: React.FunctionComponent<ActionBarProps> = (
  props
) => (
  <Modal triggerElement={<Button>Open</Button>}>
    <form>
      <CardChildrenContainer data-modal />
      <ActionBar {...props} />
    </form>
  </Modal>
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
          <Button ghost>Cancel</Button>
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
          <Button ghost>Reset</Button>
          <Button ghost>Cancel</Button>
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

const GridInModal = withGrid<ActionBarProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(WrappedActionBarInModal)

export default {
  title: 'Layouts/ActionBar',
  component: ActionBar,
}

export const basic = ({ ...props }) => (
  <CenteredComponent>
    <Card spacing="regular">
      <CardChildrenContainer />
      <ActionBar {...props}>
        <Button ghost>Reset</Button>
        <Button ghost>Cancel</Button>
        <Button>Save</Button>
      </ActionBar>
    </Card>
  </CenteredComponent>
)

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

export const inModal = () => <GridInModal />
