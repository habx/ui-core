import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'
import { ActionBar } from '../ActionBar'
import { Button } from '../Button'
import { HeaderBar } from '../HeaderBar'
import { TabsBar } from '../TabsBar'
import { TabsBarItem } from '../TabsBarItem'
import { Text } from '../Text'

import { SidePanel, SidePanelProps } from './index'

const Line = styled(Text)`
  margin-bottom: 12px;
`

const TabItem = styled(TabsBarItem)`
  font-size: 14px;
`

const Tabs = styled(HeaderBar).attrs({ small: true })`
  padding-top: 12px;
`

const TabsBarContent: React.FunctionComponent = () => (
  <React.Fragment>
    <Tabs>
      <TabsBar>
        <TabItem active={true}>Section 1</TabItem>
      </TabsBar>
    </Tabs>
    <Text>Section content</Text>
  </React.Fragment>
)

const ScrollableContent: React.FunctionComponent = () => (
  <React.Fragment>
    {Array.from({ length: 20 }, (_, index) => (
      <Line>Element n°{index + 1}</Line>
    ))}
  </React.Fragment>
)

const ScrollableContentWithActionBar: React.FunctionComponent = () => (
  <div>
    {Array.from({ length: 20 }, (_, index) => (
      <Line>Item {index + 1}</Line>
    ))}
    <ActionBar>
      <Button ghost>Cancel</Button>
      <Button>Validate</Button>
    </ActionBar>
  </div>
)

const GRID_PROPS = {
  triggerElement: <Button outline>Open</Button>,
}

const GRID_LINES = [{ title: 'Regular' }]

const GRID_ITEMS = [
  {
    props: {
      title: 'Example',
      children: <TabsBarContent />,
    },
    label: 'Short with tab bar and title',
  },
  {
    props: {
      title: 'Item list',
      children: <ScrollableContent />,
    },
    label: 'Scrollable',
  },
  {
    props: {
      title: 'Item list',
      children: <ScrollableContentWithActionBar />,
    },
    label: 'Scrollable with action bar',
  },
]

const Grid = withGrid<SidePanelProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemHorizontalSpace: 36,
})(SidePanel)

export default {
  title: 'Modals/SidePanel',
  component: SidePanel,
}

export const basic = (props: SidePanelProps) => (
  <SidePanel
    triggerElement={<Button outline>Open Side Panel</Button>}
    {...props}
  />
)

basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=62%3A2',
  },
}

export const gallery = () => <Grid />
